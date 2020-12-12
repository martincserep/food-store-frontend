import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [IngredientsComponent],
    exports: [],
    imports: [
        SharedModule,
        TableModule,
        RouterModule.forChild([
            { path: '', component: IngredientsComponent }
        ])
    ],
})
export class IngredientsModule { }