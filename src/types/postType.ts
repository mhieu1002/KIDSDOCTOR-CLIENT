type PostsDTO = {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  files?: string[];
  slug: string;
  isActive: boolean;
  authorId: number;
  groupId: number;
  displayTime?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

export type { PostsDTO };
