import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var RenameDialogComponent = /** @class */ (function () {
    function RenameDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    RenameDialogComponent.prototype.ngOnInit = function () {
    };
    RenameDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rename-dialog',
            templateUrl: './rename-dialog.component.html',
            styleUrls: ['./rename-dialog.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef])
    ], RenameDialogComponent);
    return RenameDialogComponent;
}());
export { RenameDialogComponent };
//# sourceMappingURL=rename-dialog.component.js.map