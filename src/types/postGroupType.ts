type PostGroupDTO = {
  id: number;
  title: string;
  status: boolean;
  slug: string;
  postCategoryId?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

export type { PostGroupDTO };