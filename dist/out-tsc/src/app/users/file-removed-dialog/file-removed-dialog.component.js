import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
var FileRemovedDialogComponent = /** @class */ (function () {
    function FileRemovedDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    FileRemovedDialogComponent.prototype.ngOnInit = function () {
    };
    FileRemovedDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-file-removed-dialog',
            templateUrl: './file-removed-dialog.component.html',
            styleUrls: ['./file-removed-dialog.component.css']
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, MatDialogRef])
    ], FileRemovedDialogComponent);
    return FileRemovedDialogComponent;
}());
export { FileRemovedDialogComponent };
//# sourceMappingURL=file-removed-dialog.component.js.map