import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { Lsuffix } from './pipes/lsuffix.pipe';

@NgModule({
    declarations: [Lsuffix],
    imports: [HttpClientModule],
    exports: [Lsuffix]
})
export class SharedModule { }
