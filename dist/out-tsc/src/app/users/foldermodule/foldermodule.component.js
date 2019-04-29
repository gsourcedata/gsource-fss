import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var FoldermoduleComponent = /** @class */ (function () {
    function FoldermoduleComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FoldermoduleComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FoldermoduleComponent.prototype.ngOnInit = function () {
    };
    FoldermoduleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-foldermodule',
            templateUrl: './foldermodule.component.html',
            styleUrls: ['./foldermodule.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], FoldermoduleComponent);
    return FoldermoduleComponent;
}());
export { FoldermoduleComponent };
//# sourceMappingURL=foldermodule.component.js.map