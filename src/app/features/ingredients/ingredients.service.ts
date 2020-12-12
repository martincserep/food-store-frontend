import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Ingredient } from './interface';

@Injectable()
export class IngredientsService {

    getAllIngredient(): Observable<Ingredient[]> {
        return this.apiService.get('ingredients');
    }

    constructor(private apiService: ApiService) {}
}