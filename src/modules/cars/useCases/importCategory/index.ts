import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryService } from './ImportCategoryService';

const categoryRepository = CategoriesRepository.getInstance();
const importCategoryService = new ImportCategoryService(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryService);

export { importCategoryController };