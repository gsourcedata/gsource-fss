import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var NewFolderDialogComponent = /** @class */ (function () {
    function NewFolderDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NewFolderDialogComponent.prototype.ngOnInit = function () {
    };
    NewFolderDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-new-folder-dialog',
            templateUrl: './new-folder-dialog.component.html',
            styleUrls: ['./new-folder-dialog.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef])
    ], NewFolderDialogComponent);
    return NewFolderDialogComponent;
}());
export { NewFolderDialogComponent };
//# sourceMappingURL=new-folder-dialog.component.js.map