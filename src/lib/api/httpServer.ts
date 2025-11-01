import { getServerToken } from "./auth-server";
import { API_URL } from "@/config/api";
import { handleHttpError } from "./httpError";
import { Endpoint } from "./endpoint.type";

interface CacheOpts {
  revalidate?: number;
  tags?: string[];
}

export const httpServer = {
  async request<Req, Res>(
    endpoint: Endpoint<Req, Res>,
    reqData?: Req,
    cacheOpts?: CacheOpts
  ): Promise<Res> {
    const url =
      typeof endpoint.path === "function"
        ? endpoint.path(reqData!)
        : endpoint.path;

    // ✅ فقط اگر مسیر تابع نباشد، query بساز
    let query = "";
    if (
      typeof endpoint.path !== "function" &&
      reqData &&
      typeof reqData === "object"
    ) {
      const params = new URLSearchParams();
      Object.entries(reqData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
      query = params.toString() ? `?${params.toString()}` : "";
    }

    const fullUrl = `${API_URL}${url}${query}`;

    const token = endpoint.requiresAuth ? await getServerToken() : null;

    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const start = performance.now();

    try {
      const res = await fetch(fullUrl, {
        method: endpoint.method,
        headers,
        body: endpoint.method !== "GET" ? JSON.stringify(reqData) : undefined,
        ...(cacheOpts
          ? { next: { revalidate: cacheOpts.revalidate, tags: cacheOpts.tags } }
          : {}),
      });

      const duration = (performance.now() - start).toFixed(2);
      const cacheHeader = res.headers.get("x-vercel-cache");
      const cacheStatus = cacheHeader
        ? cacheHeader.toUpperCase()
        : cacheOpts?.revalidate
        ? "POSSIBLE_CACHE"
        : "NO_CACHE";

      console.log(
        `📡 [HTTP SERVER] ${endpoint.method} ${fullUrl} → ${res.status} | ${duration}ms | Cache: ${cacheStatus}`
      );

      if (!res.ok) throw new Error(`Server error ${res.status}`);

      return res.json() as Promise<Res>;
    } catch (e) {
      const duration = (performance.now() - start).toFixed(2);
      console.error(
        `❌ [HTTP SERVER ERROR] ${endpoint.method} ${fullUrl} failed after ${duration}ms`
      );
      throw handleHttpError(e, `SERVER ${endpoint.method} ${fullUrl}`);
    }
  },
};
