export interface Company {
  name: string;
  type?: string;
  country?: string;
  status: boolean;
  id?: string;
  logoUrl?;
  email: string;
  admin: {
    name: string;
    email: string;
  };
}
