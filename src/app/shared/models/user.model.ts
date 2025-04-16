export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'customer';
  displayName?: string;
}
