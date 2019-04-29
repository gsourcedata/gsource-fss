import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
//import {Observable} from 'rxjs';
var UsersService = /** @class */ (function () {
    function UsersService(_http) {
        this._http = _http;
    }
    UsersService.prototype.downloadFile = function (file) {
        var body = { filename: file };
        console.log('donwload path ', body.filename.Path);
        return this._http.post('http://localhost:3000/api/download', body, {
            responseType: 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    };
    UsersService.prototype.getFiles = function (files) {
        var body = { filename: files };
        console.log('get files body', body);
        var headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/files', JSON.stringify(body), {
            headers: headers
        });
    };
    UsersService.prototype.deleteFile = function (filedata) {
        var body = { filename: filedata };
        console.log('get files body', body);
        var headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        console.log('file data for deletion', filedata);
        return this._http.post('http://localhost:3000/api/removefile', JSON.stringify(body), {
            headers: headers
        });
    };
    /*   createFolder(folderName:String){
          var body = {newfoldername:folderName};
              console.log('createFolder', body)
              return this._http.post('http://localhost:3000/api/createfolder', body, {
              responseType :  'blob',
              headers:new HttpHeaders().append('Content-Type','application/json')
          })
      }    */
    UsersService.prototype.getAll = function () {
        var headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/getall', {
            headers: headers
        });
    };
    UsersService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UsersService);
    return UsersService;
}());
export { UsersService };
//# sourceMappingURL=users.service.js.map