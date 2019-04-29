import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from './new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './rename-dialog/rename-dialog.component';
import { UsersService } from '../users.service';
import { saveAs } from 'file-saver';
import { AuthenticationService } from '../authentication.service';
import { FileRemovedDialogComponent } from "../users/file-removed-dialog/file-removed-dialog.component";
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(auth, dialog, _fileService) {
        this.auth = auth;
        this.dialog = dialog;
        this._fileService = _fileService;
        this.userData = [];
        this.folderAdded = new EventEmitter();
        this.elementRemoved = new EventEmitter();
        this.elementRenamed = new EventEmitter();
        this.navigatedDown = new EventEmitter();
        this.elementMoved = new EventEmitter();
        this.navigatedUp = new EventEmitter();
    }
    FileUploadComponent.prototype.ngOnChanges = function (changes) { };
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            console.log('Usercomponent : userDetails ', user);
            _this.user = user.roles;
        }, function (err) {
            console.error(err);
        });
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._fileService.getAll().subscribe(function (data) {
            console.log("data from the getall", data);
            // for(let entry of data)
            _this.userData = data;
            console.log(_this.userData);
            console.log("file element in thwe geteALL () Dartat _+_+_+_+_+_", _this.fileElements);
            //this.userData = Array.of(this.userData);
            _this.fileElements.forEach(function (element) {
                if (element.isFolder) {
                    _this.userData.forEach(function (user) {
                        // console.log('userdata', user)
                        if (element.name == user._id) {
                            // element.name = user.name
                        }
                    });
                }
            });
        }, function (error) {
            console.error(error);
        });
    };
    FileUploadComponent.prototype.downloadFile = function (element) {
        console.log('donwload funcrion is working', element);
        //var filename = this.attachmentList[index].uploadname;
        var filename = element;
        this._fileService.downloadFile(filename)
            .subscribe(function (data) {
            console.log('data>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data);
            console.log('filename', filename);
            saveAs(data, filename.name);
        }, function (error) { return console.error(error); });
    };
    FileUploadComponent.prototype.deleteElement = function (element) {
        console.log('delete element', element);
        this.elementRemoved.emit(element);
    };
    FileUploadComponent.prototype.navigate = function (element) {
        console.log('_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+__+++_+_+_=', element);
        if (element.isFolder) {
            this.navigatedDown.emit(element);
        }
    };
    FileUploadComponent.prototype.navigateUp = function () {
        this.navigatedUp.emit();
    };
    FileUploadComponent.prototype.moveElement = function (element, moveTo) {
        this.elementMoved.emit({ element: element, moveTo: moveTo });
    };
    FileUploadComponent.prototype.openNewFolderDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NewFolderDialogComponent);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.folderAdded.emit({ name: res });
                console.log('folder added ', res);
            }
        });
    };
    FileUploadComponent.prototype.openRenameDialog = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(RenameDialogComponent);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                element.name = res;
                _this.elementRenamed.emit(element);
            }
        });
    };
    FileUploadComponent.prototype.openFileRemovedDialog = function () {
        this.dialog.open(FileRemovedDialogComponent);
        /* dialogRef.afterClosed().subscribe(res => {
          if (res) {
            element.name = res;
            this.elementRenamed.emit(element);
          }
        }); */
    };
    FileUploadComponent.prototype.openMenu = function (event, element, viewChild) {
        event.preventDefault();
        viewChild.openMenu();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], FileUploadComponent.prototype, "fileElements", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], FileUploadComponent.prototype, "canNavigateUp", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], FileUploadComponent.prototype, "path", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FileUploadComponent.prototype, "folderAdded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FileUploadComponent.prototype, "elementRemoved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FileUploadComponent.prototype, "elementRenamed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FileUploadComponent.prototype, "navigatedDown", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FileUploadComponent.prototype, "elementMoved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FileUploadComponent.prototype, "navigatedUp", void 0);
    FileUploadComponent = tslib_1.__decorate([
        Component({
            selector: 'app-file-upload',
            templateUrl: './file-upload.component.html',
            styleUrls: ['./file-upload.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService, MatDialog, UsersService])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
export { FileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map