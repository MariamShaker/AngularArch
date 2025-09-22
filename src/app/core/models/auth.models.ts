// Credentials for login
export interface Credentials {
  email: string;
  password: string;
}

// Data for registration
export interface RegisterData {
    name: string | null;
  email: string | null;
  password: string | null;
  role: string | null;
  avatar?: string | null;
}

// Optional: Response from login API
export interface LoginResponse {
  token: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
}
