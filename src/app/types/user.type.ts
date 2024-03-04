export interface User {
  isLoggedIn: boolean;
  userData: {
    email: string;
    password: string;
    name?: string;
    profileImage?: string;
  };
}
