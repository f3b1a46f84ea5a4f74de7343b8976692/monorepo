import { CategoryInterface } from './category.interface';
import { CityInterface } from './city.interface';

export interface CitySliceInterface {
    list: CityInterface[];
    query: string;
    isOpen: boolean;
    categories: CategoryInterface[];
    selectedCategories: CategoryInterface[];
}
