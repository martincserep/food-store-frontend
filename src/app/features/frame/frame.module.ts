import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { FrameComponent } from "./components/frame/frame.component";

@NgModule({
    declarations: [FrameComponent],
    exports: [],
    imports: [
        FontAwesomeModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: FrameComponent , children: [
                { path: '', pathMatch: 'full', redirectTo: 'foods' },
                { path: 'foods', loadChildren: () => import('../foods/foods.module').then(m => m.FoodsModule)},
                { path: 'categories', loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule)},
                { path: 'ingredients', loadChildren: () => import('../ingredients/ingredients.module').then(m => m.IngredientsModule)},
                { path: 'favorites', loadChildren: () => import('../ingredients/ingredients.module').then(m => m.IngredientsModule)},
            ]}
        ]),
    ]
})
export class FrameModule { }