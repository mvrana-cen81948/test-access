import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Component } from './lib2.component';

@NgModule({
    imports: [CommonModule],
    declarations: [Lib2Component],
    exports: [
        Lib2Component
    ]
})
export class Lib2Module {}
