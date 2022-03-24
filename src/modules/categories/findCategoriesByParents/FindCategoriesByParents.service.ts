import { inject, injectable } from "tsyringe"

import { Category } from "@models/typeorm/entities/category"
import { ICategoriesRepository } from "@repositories/categories/ICategoriesRepository"
import { mapCategories } from "@utils/category.util"

interface IRequest {
  parents: number[];
  raw: boolean;
}

@injectable()
class FindCategoriesByParentsService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ parents, raw }: IRequest): Promise<Category[]> {
    let foundCategories = []

    if (parents.length > 0) {
      foundCategories = await this.categoriesRepository.findCategoriesByParent(parents)
    } else {
      foundCategories = await this.categoriesRepository.listCategories()
    }

    const mappedCategories = raw ? foundCategories : mapCategories(foundCategories)

    return mappedCategories
  }
}

export { FindCategoriesByParentsService };
