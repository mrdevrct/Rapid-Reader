"use client";

import axios from "axios";
import { getToken } from "./auth";
import { API_URL } from "@/config/api";
import { handleHttpError } from "./httpError";
import { Endpoint } from "./endpoint.type";

export const httpClient = {
  async request<Req, Res>(
    endpoint: Endpoint<Req, Res>,
    reqData?: Req
  ): Promise<Res> {
    try {
      // 🧱 ساخت URL پایه
      const url =
        typeof endpoint.path === "function"
          ? endpoint.path(reqData!)
          : endpoint.path;

      // 🧩 فقط اگر مسیر تابع نباشد، query بساز
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

      // 🔐 دریافت توکن در صورت نیاز
      const token = endpoint.requiresAuth ? getToken() : null;
      console.log("httpClient token", token);

      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      // 📡 ارسال درخواست
      const response = await axios({
        method: endpoint.method,
        url: fullUrl,
        headers,
        data: endpoint.method !== "GET" ? reqData : undefined,
      });

      return response.data as Res;
    } catch (e) {
      throw handleHttpError(e, `CLIENT ${endpoint.method} ${endpoint.path}`);
    }
  },
};
