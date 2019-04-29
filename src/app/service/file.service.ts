import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { v4 } from 'uuid';
import { FileElement } from '../file-upload/element';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { element } from '@angular/core/src/render3';
export interface IFileService {
  add(fileElement: FileElement);
  delete(id: string);
  update(id: string, update: Partial<FileElement>);
  queryInFolder(folderId: string): Observable<FileElement[]>;
  get(id: string): FileElement;
}


@Injectable()
export class FileService implements IFileService {
  private map = new Map<string, FileElement>();

  constructor(private _http:HttpClient) {}


  createFolder(folderName:any){
   // folderName.id = v4();
      folderName.id = folderName.name;
        this.map.set(folderName.id, this.clone(folderName));

        var body = {newfoldername:folderName};
        console.log('get files body', body)
        const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
        //console.log('file data for deletion', filedata)
        return this._http.post('http://localhost:3000/api/createfolder', JSON.stringify(body), {
            headers: headers
            })






            /* var body = {newfoldername:folderName};
        console.log('createFolder added to map ', body)
        return this._http.post('http://localhost:3000/api/createfolder', body, {
        responseType :  'blob',
        headers:new HttpHeaders().append('Content-Type','application/json')
    }) */
}   

count = 0 
  add(fileElement: FileElement) {


    console.log('count ++_______', this.count++)
    console.log('fileeemelmet: fileservice ', fileElement)
    console.log('mapppppppppppppppppp1111111111',this.map.get(fileElement.Path))
        console.log('-=-=-==-=--=-=-=-=-=-=-=--=mapppp', this.map.has(fileElement.Path))
        if(!this.map.has(fileElement.Path)){
          console.log('fileElement path', fileElement.Path)
         // var _id = v4();
          fileElement.id = fileElement.name 
           this.map.set(fileElement.id, this.clone(fileElement));
          console.log('fileeemelmet: fileservice : return', fileElement)
         }
    return fileElement;
  }

  delete(element) {
    console.log('delete: fileService: id ',element)
    this.map.delete(element.id);
    var body = {filename:element};
        console.log('get files body', body)
        const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/removefile', JSON.stringify(body), {
            headers: headers
            })
  
  }


  

  update(id: string, update: Partial<FileElement>) {
    let element = this.map.get(id);
    element = Object.assign(element, update);
    this.map.set(element.id, element);
  }

  private querySubject: BehaviorSubject<FileElement[]>;
  queryInFolder(folderId: string) {
    //console.log('queryInfolder: folderID', folderId)
    const result: FileElement[] = [];
    this.map.forEach(element => {
    //  console.log('queryInfolder: this.map: elemnt', element)
      if (element.parent === folderId) {
        result.push(this.clone(element));
      }
    });
    if (!this.querySubject) {
      this.querySubject = new BehaviorSubject(result);
    
    } else {
      this.querySubject.next(result);
    }
    console.log('queryInfolder: this.query subject ', this.querySubject.asObservable())
    return this.querySubject.asObservable();
  }

  get(id: string) {
    return this.map.get(id);
  }

  clone(element: FileElement) {
    return JSON.parse(JSON.stringify(element));
  }
}
