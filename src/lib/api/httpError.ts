// src/lib/api/httpError.ts
import { logError } from "./logger";

export interface ApiError {
  status: number;
  message: string;
  context?: string;
  raw?: any;
}

/**
 * @function handleHttpError
 * هندل مرکزی خطا برای axios یا fetch.
 * خطا رو نرمالایز کرده و در dev mode لاگ می‌گیره.
 */
export function handleHttpError(error: any, context?: string): ApiError {
  let message = "Unexpected error occurred";
  let status = 500;

  // 🧩 axios error
  if (error?.response) {
    status = error.response.status;
    message =
      error.response.data?.message ||
      error.response.statusText ||
      "HTTP error occurred";
  }

  // 🧩 fetch error
  else if (error?.status && error?.message) {
    status = error.status;
    message = error.message;
  }

  // 🧩 network / unknown
  else if (error instanceof Error) {
    message = error.message;
  }

  const normalizedError: ApiError = {
    status,
    message,
    context,
    raw: error,
  };

  // 🚀 Log error in dev mode
  logError({
    type: "HTTP_ERROR",
    ...normalizedError,
  });

  return normalizedError;
}
