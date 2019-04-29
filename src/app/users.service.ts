import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
//import {Observable} from 'rxjs';


@Injectable()

export class UsersService {

    constructor(private _http:HttpClient){}


    uploadFile(filepath){
        console.log('file path************************************', filepath)
        const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
        console.log('file data for deletion', filepath)
        return this._http.post('http://localhost:3000/api/fileUpload', JSON.stringify(filepath), {
            headers: headers
            })
      }

    downloadFile(file){
        var body = {filename:file};
        console.log('donwload path ', body.filename.Path)
        return this._http.post('http://localhost:3000/api/download',body,{
            responseType : 'blob',
            headers:new HttpHeaders().append('Content-Type','application/json')
        });
    }

    getFiles(files){
        var body = {filename:files};
        console.log('get files body', body)
        const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    
        
    
        return this._http.post('http://localhost:3000/api/files', JSON.stringify(body), {
        headers: headers
        })
    }
    
    deleteFile(filedata){
        var body = {filename:filedata};
        console.log('get files body', body)
        const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
        console.log('file data for deletion', filedata)
        return this._http.post('http://localhost:3000/api/removefile', JSON.stringify(body), {
            headers: headers
            })
    }

  /*   createFolder(folderName:String){
        var body = {newfoldername:folderName};
            console.log('createFolder', body)
            return this._http.post('http://localhost:3000/api/createfolder', body, {
            responseType :  'blob',
            headers:new HttpHeaders().append('Content-Type','application/json')
        })
    }    */



    getAll(){
        const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/getall',{
            headers: headers
        })
    }

}

