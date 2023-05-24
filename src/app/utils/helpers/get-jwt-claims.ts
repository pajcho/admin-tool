export interface JwtClaims {
  exp: number;
  iat: number;
  userId: string;
  username: string;
  ROLE_AGENT: boolean;
}

export function getJwtClaims(token: string): JwtClaims {
  const jwtData = token.split('.')[1];
  const decodedJwtJsonData = window.atob(jwtData);
  return JSON.parse(decodedJwtJsonData);
}
