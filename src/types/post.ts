export interface FollowPost {
  id: number;
  userId: number;
  userName: string;
  content: string;
  userImage: string;
  followFlg: boolean;
  likeFlg: boolean;
  createdAt: string;
}

export interface LikePost {
  id: number;
  userId: number;
  userName: string;
  content: string;
  userImage: string;
  followFlg: boolean;
  likeFlg: boolean;
  createdAt: string;
}

export interface MyPost {
  id: number;
  userId: number;
  userName: string;
  content: string;
  userImage: string;
  likeFlg: boolean;
  createdAt: string;
}
