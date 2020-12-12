import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Food } from './interface';

@Injectable()
export class FoodsService {

    getAllFood(): Observable<Food[]> {
        return this.apiService.get('recipes');
    }

    constructor(private apiService: ApiService) {}
}