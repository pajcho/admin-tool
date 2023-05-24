export interface DashboardStat {
  loading: boolean;
  count: number;
}

export interface ForgotPasswordResponse {
  email: string;
}

export interface ValidatePasswordTokenResponse {
  valid: boolean;
}
