import { inject, injectable } from 'tsyringe'
import { getRepository, In, Repository } from 'typeorm';

import ILog from '@interfaces/ILog';
import { ICategories } from '@interfaces/categories/ICategories';
import { Category } from '@models/typeorm/entities/category';

import { ICategoriesRepository } from './ICategoriesRepository'

@injectable()
export default class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor(
    @inject('log')
    private log: ILog
  ) {
    this.repository = getRepository(Category)
  }

  async listCategories(): Promise<Category[]> {
    try {
      const categories = this.repository.find()
      
      return categories
    } catch (error) {
      this.log.error(error)
    }
  }

  async findCategoriesByParent(parents: number[]): Promise<ICategories[]> {
    try {
      const categories = this.repository.find({
        where: [
          { id: In(parents) },
          { parentId: In(parents) }
        ]
      })
    
      return categories
    } catch (error) {
      this.log.error(error)
    }
  }
  
}
