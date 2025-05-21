export interface LoveNote {
  id: string;
  recipientName: string;
  recipientEmail?: string;
  message: string;
  createdAt: number;
}

export interface SearchParams {
  name?: string;
  email?: string;
}