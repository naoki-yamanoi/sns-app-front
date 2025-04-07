export interface Post {
  id: number;
  content: string;
  userImage: string;
  userName: string;
  likeFlag: boolean;
  createdAt: Date;
}
