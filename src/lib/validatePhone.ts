export function persianToEnglishDigits(str: string): string {
  return str.replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);
}

export function validatePhone(input: string): boolean {
  if (!input) return false;

  const normalized = persianToEnglishDigits(input).replace(/\s+/g, "");

  const phoneRegex = /^09\d{9}$/;

  return phoneRegex.test(normalized);
}
