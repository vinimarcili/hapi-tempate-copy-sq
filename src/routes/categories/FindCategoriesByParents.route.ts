import { IRoute } from '@interfaces/IRoute'

import { FindCategoriesByParentsHandler } from '@modules/categories/findCategoriesByParents/FindCategoriesByParents.handler'
import { GetCategoriesSchema } from '@validations/schemas/GetCategoriesSchema'

const route: IRoute = {
  path: '/categories/find-by-parents',
  method: 'GET',
  handler: FindCategoriesByParentsHandler,
  options: {
    description: 'Retorna categorias',
    notes: 'Retorna todas as categorias ou alguma categoria específica com base no valor passado na variável parents',
    tags: ['api', 'categories'],
    validate: {
      query: GetCategoriesSchema
    },
    plugins: {
      'hapi-swagger': {
        response: {
          '200': {
            'description': 'Categoria encontrada.'
          }
        }
      }
    }
  }
}

export default route
