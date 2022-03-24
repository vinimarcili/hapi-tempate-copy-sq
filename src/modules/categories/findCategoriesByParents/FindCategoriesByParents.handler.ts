import { Request, ResponseToolkit } from 'hapi';
import { DependencyContainer } from 'tsyringe';

import { ApplicationError } from '@errors/ApplicationError';

import { FindCategoriesByParentsService } from './FindCategoriesByParents.service';

async function FindCategoriesByParentsHandler (
  request: Request,
  reply: ResponseToolkit,
  container: DependencyContainer
) {
  try {
    const raw = request.query.raw === 'true'

    let queryParents = request.query.parents || []
    queryParents = Array.isArray(queryParents) ? queryParents : [queryParents]

    const parents = queryParents.map(parent => Number(parent))

    const findCategoriesByParentsService = container.resolve(FindCategoriesByParentsService)

    const categories = await findCategoriesByParentsService.execute({ parents, raw })

    return categories
  } catch (err) {
    return ApplicationError(err)
  }
}

export { FindCategoriesByParentsHandler }