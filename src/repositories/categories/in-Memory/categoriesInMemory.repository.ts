import { Category } from "@models/typeorm/entities/category";

import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [
    {
      id: 1,
      description: 'Descrição da categoria 1',
      description_en: 'Category 1 description',
      description_es: 'Descripción de categoría 1',
      parentId: 2
    },
    {
      id: 2,
      description: 'Descrição da categoria 2',
      description_en: 'Category 2 description',
      description_es: 'Descripción de categoría 2',
      parentId: 3
    }
  ];

  async listCategories(): Promise<Category[]> {
    return this.categories
  }

  async findCategoriesByParent(parents: number[]): Promise<Category[]> {
    const categories = this.categories.filter((category) => {
      if (parents.includes(category.id) || parents.includes(category.parentId)) {
        return category
      }
    })

    return categories
  }
}

export { CategoriesRepositoryInMemory }