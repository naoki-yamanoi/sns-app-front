export interface User {
  id: number;
  name: string;
  email: string;
}

export interface RecommendUser {
  id: number;
  name: string;
  comment: string;
  image: string;
  followFlg: boolean;
}
