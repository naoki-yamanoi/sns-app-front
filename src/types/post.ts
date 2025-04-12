export interface FollowPost {
  id: number;
  userName: string;
  content: string;
  userImage: string;
  followFlag: boolean;
  likeFlag: boolean;
  createdAt: string;
}

export interface MyPost {
  id: number;
  userName: string;
  content: string;
  userImage: string;
  likeFlag: boolean;
  createdAt: string;
}
