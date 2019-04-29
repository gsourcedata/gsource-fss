import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import 'rxjs/Rx';
import { AuthenticationService } from '../authentication.service';
import { FileUploader } from 'ng2-file-upload';
import { UsersService } from '../users.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { FileService } from '../service/file.service';
import { HttpClient } from '@angular/common/http';
import { FileRemovedDialogComponent } from "./file-removed-dialog/file-removed-dialog.component";
var uri = 'http://localhost:3000/api/upload';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(auth, http, _fileService, router, dialog, fileService) {
        var _this = this;
        this.auth = auth;
        this.http = http;
        this._fileService = _fileService;
        this.router = router;
        this.dialog = dialog;
        this.fileService = fileService;
        this.uploader = new FileUploader({ url: uri });
        this.attachmentList = [];
        this.allData = [];
        this.canNavigateUp = false;
        this.filespath = '';
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
        };
    }
    UsersComponent.prototype.getFile = function (path) {
        var _this = this;
        this._fileService.getFiles(path)
            .subscribe(function (data) {
            console.log('data', data);
            _this.allData = data;
            console.log('1111111111111111111alldata', _this.allData);
            _this.allData = Array.of(_this.allData);
            for (var i = 0; i < _this.allData.length; i++) {
                for (var j = 0; j < _this.allData[i].length; j++) {
                    console.log(_this.allData[i][j]);
                    console.log(_this.allData[i][j].isFolder);
                    _this.fileService.add(_this.allData[i][j]);
                    _this.updateFileElementQuery();
                }
            }
        }, function (error) { return console.error(error); });
    };
    ;
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getuser().subscribe(function (user) {
            console.log(user);
            _this.details = user;
            console.log('get user details', _this.details);
            _this.updateFileElementQuery();
        }, function (err) {
            console.error(err);
        });
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            console.log('Usercomponent : userDetails ', _this.details);
            _this.updateFileElementQuery();
        }, function (err) {
            console.error(err);
        });
        //get files 
        this.getFile({ parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath });
        //--------------------------------------------------
        // const folderA = this.fileService.add({ name: 'Folder A', isFolder: true, parent: 'root' });
        /*this.fileService.add({ name: 'Folder B', isFolder: true, parent: 'root', path: 'root' });
        this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' , path: 'root'});
         this.fileService.add({ name: 'Folder C', isFolder: true, parent: folderA.id });
        this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' });
        this.fileService.add({ name: 'File B', isFolder: false, parent: 'root' }); */
        console.log('this,fileservice ', this.fileService);
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.download = function (index) {
        var filename = this.attachmentList[index].uploadname;
        this._fileService.downloadFile(filename)
            .subscribe(function (data) { return saveAs(data, filename); }, function (error) { return console.error(error); });
    };
    UsersComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(FileRemovedDialogComponent, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('results', result);
        });
    };
    //new folders ngular version 
    UsersComponent.prototype.addFolder = function (folder) {
        console.log('adding folder to the aservice for the ui');
        console.log('addfolder ', this.currentRoot ? this.currentRoot.id : 'root');
        this.fileService.createFolder({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath }).subscribe(function (data) {
            console.log('the folder added successfully ', data);
        }, function (err) {
            console.log('Error while creting the new folder', err);
        });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.updateFileElementQuery = function () {
        this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
        console.log('updateFileElementQuery', this.fileElements);
    };
    UsersComponent.prototype.removeElement = function (element) {
        var _this = this;
        console.log('UserComponent : remove element : emelent ', element);
        this.fileService.delete(element).subscribe(function (data) {
            console.log('file remove data ', data);
            _this.dialog.open(FileRemovedDialogComponent, {
                width: '600px',
                data: { animal: data }
            });
        }, function (error) {
            console.log('file remove data ERROR!', error);
        });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.navigateToFolder = function (element) {
        this.currentRoot = element;
        this.currentPath = this.pushToPath(this.currentPath, element.name);
        console.log('this current path: navigateToFolder  ', element);
        this.canNavigateUp = true;
        this.getFile({ parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.navigateUp = function () {
        console.log('nevigat eup funcrion is called ');
        if (this.currentRoot && this.currentRoot.parent === 'root') {
            this.currentRoot = null;
            this.canNavigateUp = false;
            this.updateFileElementQuery();
        }
        else {
            this.currentRoot = this.fileService.get(this.currentRoot.parent);
            this.updateFileElementQuery();
        }
        this.currentPath = this.popFromPath(this.currentPath);
    };
    UsersComponent.prototype.moveElement = function (event) {
        this.fileService.update(event.element.id, { parent: event.moveTo.id });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.renameElement = function (element) {
        console.log(element);
        this.fileService.update(element.id, { name: element.name });
        this.updateFileElementQuery();
    };
    UsersComponent.prototype.pushToPath = function (path, folderName) {
        var p = path ? path : '';
        p += folderName + "/";
        console.log('pushToPath : p ; ', p);
        return p;
    };
    UsersComponent.prototype.popFromPath = function (path) {
        var p = path ? path : '';
        var split = p.split('/');
        split.splice(split.length - 2, 1);
        p = split.join('/');
        console.log('popFromPath : p ; ', p);
        return p;
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], UsersComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort),
        tslib_1.__metadata("design:type", MatSort)
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css'],
            providers: [UsersService]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService, HttpClient, UsersService, Router, MatDialog, FileService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map