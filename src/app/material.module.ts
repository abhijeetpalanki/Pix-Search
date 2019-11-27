import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatGridListModule } from "@angular/material";

@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatGridListModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatGridListModule
    ]
})
export class MaterialModule { }