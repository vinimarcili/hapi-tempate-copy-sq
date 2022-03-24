import { Category } from "@models/typeorm/entities/category"

async function mapCategories (categories: Category[]): Promise<Category[]> {
  return categories
}

export { mapCategories }
