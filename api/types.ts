export interface User {
  id: Number;
  username: string;
  email: string;
  provider: string;
  confirmed: Boolean;
  blocked: null | boolean;
  role: number;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: number;
  title: string;
  body: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  message: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResult {
  jwt: string;
  user: User;
}
