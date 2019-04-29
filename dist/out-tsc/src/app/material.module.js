import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatDialogModule, MatTableModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatIconModule, MatGridListModule, MatMenuModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
//import {MatPaginatorModule} from '@angular/material/paginator';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        NgModule({
            exports: [
                FormsModule,
                MatTableModule,
                MatDialogModule,
                MatFormFieldModule,
                MatButtonModule,
                MatInputModule,
                MatPaginatorModule,
                MatSortModule,
                MatToolbarModule,
                MatIconModule,
                MatGridListModule,
                MatMenuModule,
                MatCardModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map