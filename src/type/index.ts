export interface IData {
  id: string;
  title: string;
  date: string;
  description: string;
  avatars: { url: string; name: string }[];
  score: number;
}

export type IDateset = IData[];
