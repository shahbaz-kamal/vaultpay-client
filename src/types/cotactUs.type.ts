export interface IContactUs {
  _id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  isRead?: boolean;
  createdAt?:Date
  updatedAt?:Date
}
