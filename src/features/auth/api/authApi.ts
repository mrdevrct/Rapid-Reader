// src/features/auth/api/authApi.ts
import { Endpoint } from "@/lib/api/endpoint.type";
import {
  SendOtpRequest,
  SendOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from "../types/auth.type";
import { MeResponse } from "../types/user.types";
import { OrdersResponse } from "../types/order.types";

export const authApi = {
  sendOtp: {
    path: "/wp-json/custom/v1/otp/request",
    method: "POST",
    requiresAuth: false,
  } as Endpoint<SendOtpRequest, SendOtpResponse>,

  verifyOtp: {
    path: "/wp-json/custom/v1/otp/verify",
    method: "POST",
    requiresAuth: false,
  } as Endpoint<VerifyOtpRequest, VerifyOtpResponse>,

  me: {
    path: "/wp-json/custom/v1/me",
    method: "GET",
    requiresAuth: true,
  } as Endpoint<void, MeResponse>,

  orders: {
    path: "/wp-json/custom/v1/orders",
    method: "GET",
    requiresAuth: true,
  } as Endpoint<void, OrdersResponse>,
};

