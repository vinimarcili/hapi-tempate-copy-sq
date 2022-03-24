import { Category } from "@models/typeorm/entities/category";

interface ICategoriesRepository {
  listCategories(): Promise<Category[]>
  findCategoriesByParent(parents: number[]): Promise<Category[]>;
}

export { ICategoriesRepository };