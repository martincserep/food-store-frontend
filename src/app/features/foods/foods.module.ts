import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { FoodsComponent } from "./components/foods/foods.component";

@NgModule({
    declarations: [FoodsComponent],
    imports: [
        TableModule,
        RouterModule.forChild([
            { path: '', component: FoodsComponent }
        ])
    ]
})
export class FoodsModule {}