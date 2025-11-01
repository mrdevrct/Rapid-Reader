export interface SendOtpRequest {
  mobile: string;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export interface VerifyOtpRequest {
  mobile: string;
  otp: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  token?: string;
}