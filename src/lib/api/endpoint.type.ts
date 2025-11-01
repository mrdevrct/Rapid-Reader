/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface Endpoint<Req = void, Res = any> {
  path: string | ((req: Req) => string);
  method: HttpMethod;
  requiresAuth?: boolean;
  request?: Req;
  response?: Res;
}
