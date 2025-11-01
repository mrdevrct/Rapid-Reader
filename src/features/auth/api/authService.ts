// src/features/auth/api/authService.ts
import { httpClient } from "@/lib/api/httpClient";
import { httpServer } from "@/lib/api/httpServer";
import { authApi } from "./authApi";
import {
  SendOtpRequest,
  SendOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from "../types/auth.type";
import { MeResponse } from "../types/user.types";
import { OrdersResponse } from "../types/order.types";

// 💻 --- Client Side Service ---
export const AuthServiceClient = {
  async sendOtpClient(data: SendOtpRequest): Promise<SendOtpResponse> {
    return httpClient.request<SendOtpRequest, SendOtpResponse>(
      authApi.sendOtp,
      data
    );
  },

  async verifyOtpClient(data: VerifyOtpRequest): Promise<VerifyOtpResponse> {
    return httpClient.request<VerifyOtpRequest, VerifyOtpResponse>(
      authApi.verifyOtp,
      data
    );
  },

  async getUserOrdersClient(): Promise<OrdersResponse> {
    return httpClient.request<void, OrdersResponse>(authApi.orders);
  },

  async getCurrentUserClient(): Promise<MeResponse> {
    return await fetch("/api/auth/me", {
      credentials: "include",
      cache: "no-store",
    }).then((res) => {
      if (!res.ok) throw new Error("خطا در دریافت اطلاعات کاربر");
      return res.json();
    });
  },
};

// 🖥 --- Server Side Service ---
export const AuthServiceServer = {
  async sendOtpServer(data: SendOtpRequest): Promise<SendOtpResponse> {
    return httpServer.request<SendOtpRequest, SendOtpResponse>(
      authApi.sendOtp,
      data
    );
  },

  async verifyOtpServer(data: VerifyOtpRequest): Promise<VerifyOtpResponse> {
    return httpServer.request<VerifyOtpRequest, VerifyOtpResponse>(
      authApi.verifyOtp,
      data
    );
  },

  async getCurrentUserServer(): Promise<MeResponse> {
    return httpServer.request<void, MeResponse>(authApi.me, undefined, {
      revalidate: 0,
      tags: ["auth-user"],
    });
  },

  async getUserOrdersServer(): Promise<OrdersResponse> {
    return httpServer.request<void, OrdersResponse>(authApi.orders);
  },
};
