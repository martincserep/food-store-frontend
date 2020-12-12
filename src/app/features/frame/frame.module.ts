import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FrameComponent } from "./components/frame/frame.component";

@NgModule({
    declarations: [FrameComponent],
    exports: [],
    imports: [
        FontAwesomeModule,
        RouterModule.forChild([
            { path: '', component: FrameComponent , children: [
                { path: '', loadChildren: () => import('../foods/foods.module').then(m => m.FoodsModule)}
            ]}
        ]),
    ]
})
export class FrameModule { }