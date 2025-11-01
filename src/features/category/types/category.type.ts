export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  image: null | string;
  parent?: null | number;
  permalink: string
  children?: Category[];
}

export type CategoryListResponse = {
  categories: Category[];
  total?: number;
};
