// src/core/utils/logger.ts
export function logError(error: any) {
  if (process.env.NODE_ENV !== "production") {
    console.error("❌ [HTTP ERROR]", JSON.stringify(error, null, 2));
  } else {
    // اینجا می‌تونی لاگ‌ها رو بفرستی به Sentry، Datadog، Logtail و ...
  }
}
