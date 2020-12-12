import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FoodsComponent } from "./components/foods/foods.component";

@NgModule({
    declarations: [FoodsComponent],
    imports: [
        RouterModule.forChild([
            { path: '', component: FoodsComponent }
        ])
    ]
})
export class FoodsModule {}