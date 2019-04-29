import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { v4 } from 'uuid';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
var FileService = /** @class */ (function () {
    function FileService(_http) {
        this._http = _http;
        this.map = new Map();
        this.count = 0;
    }
    FileService.prototype.createFolder = function (folderName) {
        folderName.id = v4();
        this.map.set(folderName.id, this.clone(folderName));
        var body = { newfoldername: folderName };
        console.log('createFolder added to map ', body);
        return this._http.post('http://localhost:3000/api/createfolder', body, {
            responseType: 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    };
    FileService.prototype.add = function (fileElement) {
        console.log('count ++_______', this.count++);
        console.log('fileeemelmet: fileservice ', fileElement);
        console.log('mapppppppppppppppppp1111111111', this.map);
        console.log('-=-=-==-=--=-=-=-=-=-=-=--=mapppp', this.map.entries);
        if (this.map.size > 0) {
            this.map.forEach(function (element, index, id) {
                if (element.Path != fileElement.Path) {
                    console.log('_+__+_+_+_+_+_++_ELEMENT ', element);
                }
            });
        }
        fileElement.id = v4();
        this.map.set(fileElement.id, this.clone(fileElement));
        console.log('fileeemelmet: fileservice : return', fileElement);
        return fileElement;
    };
    FileService.prototype.delete = function (element) {
        console.log('delete: fileService: id ', element);
        this.map.delete(element.id);
        var body = { filename: element };
        console.log('get files body', body);
        var headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/removefile', JSON.stringify(body), {
            headers: headers
        });
    };
    FileService.prototype.update = function (id, update) {
        var element = this.map.get(id);
        element = Object.assign(element, update);
        this.map.set(element.id, element);
    };
    FileService.prototype.queryInFolder = function (folderId) {
        var _this = this;
        //console.log('queryInfolder: folderID', folderId)
        var result = [];
        this.map.forEach(function (element) {
            //  console.log('queryInfolder: this.map: elemnt', element)
            if (element.parent === folderId) {
                result.push(_this.clone(element));
            }
        });
        if (!this.querySubject) {
            this.querySubject = new BehaviorSubject(result);
        }
        else {
            this.querySubject.next(result);
        }
        console.log('queryInfolder: this.query subject ', this.querySubject.asObservable());
        return this.querySubject.asObservable();
    };
    FileService.prototype.get = function (id) {
        return this.map.get(id);
    };
    FileService.prototype.clone = function (element) {
        return JSON.parse(JSON.stringify(element));
    };
    FileService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FileService);
    return FileService;
}());
export { FileService };
//# sourceMappingURL=file.service.js.map