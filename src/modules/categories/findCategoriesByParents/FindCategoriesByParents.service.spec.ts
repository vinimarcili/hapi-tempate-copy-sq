import 'reflect-metadata'

import { CategoriesRepositoryInMemory } from '@repositories/categories/in-Memory/categoriesInMemory.repository';

import { FindCategoriesByParentsService } from './FindCategoriesByParents.service';


let getCategoriesService: FindCategoriesByParentsService
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Get Categories", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()

    getCategoriesService = new FindCategoriesByParentsService(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to list all categories", async () => {
    const parents = [];
    const raw = false;
  
    const categories = await getCategoriesService.execute({ parents, raw});

    expect(categories).toHaveLength(2)
  })

  it("should be able to list only category 1", async () => {
    const parents = [ 1 ];
    const raw = false;
  
    const categories = await getCategoriesService.execute({ parents, raw});

    expect(categories).toHaveLength(1)
  })

  it("should be able to list category 1 and category 2", async () => {
    const parents = [ 2 ];
    const raw = false;
  
    const categories = await getCategoriesService.execute({ parents, raw});

    expect(categories).toHaveLength(2)
  })

  it("should be able to list only category 2", async () => {
    const parents = [ 3 ];
    const raw = false;
  
    const categories = await getCategoriesService.execute({ parents, raw});

    expect(categories).toHaveLength(1)
  })
})