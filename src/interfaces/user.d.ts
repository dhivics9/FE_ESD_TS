interface User {
  id: number,
  email: string,
  name: string,
  token: string,
  password?: string,
  createdAt?: Date,
  updatedAt?: Date,
}