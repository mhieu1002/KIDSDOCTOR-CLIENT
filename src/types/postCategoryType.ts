type PostCategoryDTO = {
  id: number;
  title: string;
  slug: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

export type { PostCategoryDTO };
