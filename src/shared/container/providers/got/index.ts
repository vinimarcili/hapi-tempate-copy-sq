import { container } from "tsyringe";
import got from 'got'

container.register(
  'got',
  { useValue: got }
)