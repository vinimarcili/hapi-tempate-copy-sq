import { container } from "tsyringe";

import LogConfig from "@shared/infra/http/log-config"

import './providers'

import { ICategoriesRepository } from "@repositories/categories/ICategoriesRepository";
import CategoriesRepository from "@repositories/categories/categories.repository";

import { IRecruitmentsRepository } from "@repositories/recruitments/IRecruitmentsRepository";
import RecruitmentsRepository from "@repositories/recruitments/recruitments.repository";

container.register(
  'log',
  { useValue: LogConfig() }
)

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IRecruitmentsRepository>(
  'RecruitmentsRepository',
  RecruitmentsRepository
)
