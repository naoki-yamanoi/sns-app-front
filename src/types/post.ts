export interface FollowPost {
  id: number;
  userId: number;
  userName: string;
  content: string;
  userImage: string;
  followFlag: boolean;
  likeFlag: boolean;
  createdAt: string;
}

export interface MyPost {
  id: number;
  userId: number;
  userName: string;
  content: string;
  userImage: string;
  likeFlag: boolean;
  createdAt: string;
}
