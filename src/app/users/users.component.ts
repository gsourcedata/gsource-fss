import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { UsersService } from '../users.service';
import {saveAs} from 'file-saver';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FileService } from '../service/file.service';
import { FileElement } from '../file-upload/element';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FileRemovedDialogComponent } from "./file-removed-dialog/file-removed-dialog.component";
import { FolderAddedAlertmodalComponent } from './modals/folder-added-alertmodal/folder-added-alertmodal.component';
//import { DialogData } from './DialogData';
import { FoldermoduleComponent } from './foldermodule/foldermodule.component';
const uri = 'http://localhost:3000/api/upload'

export interface DialogData {
  animal: string;
  addFolder: string
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {

   getFile(path) {
    this._fileService.getFiles(path)
    .subscribe(
        data => {
          console.log('data', data)
          this.allData = data
          console.log('1111111111111111111alldata', this.allData)
          this.allData = Array.of(this.allData);
          for(var i = 0; i < this.allData.length; i++){
            for(var j = 0; j < this.allData[i].length; j++){
                console.log(this.allData[i][j]);
                console.log(this.allData[i][j].isFolder);
                this.fileService.add(this.allData[i][j]);
                this.updateFileElementQuery();
            }
        }
        },
        error => console.error(error)
    );
  };











  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public fileElements: Observable<FileElement[]>;

  details: UserDetails;
  uploader:FileUploader = new FileUploader({url:uri});
  closeResult: string;
    attachmentList:any = [];
    allData:any = []
    currentRoot: FileElement;
    currentPath: string;
    canNavigateUp = false;
    filespath = ''
  constructor(private auth: AuthenticationService, private http: HttpClient, private _fileService:UsersService, private router: Router, private dialog: MatDialog, public fileService: FileService) {
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
  }
  }

  ngOnInit() {   
   

    this.auth.getuser().subscribe(user => {
      console.log(user)
      this.details = user;
      console.log('get user details', this.details)
      this.updateFileElementQuery();
    }, (err) => {
      console.error(err);
    });
    this.auth.profile().subscribe(user => {
      this.details = user;
      console.log('Usercomponent : userDetails ', this.details)
      this.updateFileElementQuery();
    }, (err) => {
      console.error(err);
    });
    
    //get files 
    this.getFile({parent: this.currentRoot ? this.currentRoot.id : 'root', path:this.currentPath })



    // file upload root 
      
 
    //--------------------------------------------------
   // const folderA = this.fileService.add({ name: 'Folder A', isFolder: true, parent: 'root' });
    /*this.fileService.add({ name: 'Folder B', isFolder: true, parent: 'root', path: 'root' });
    this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' , path: 'root'});
     this.fileService.add({ name: 'Folder C', isFolder: true, parent: folderA.id });
    this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' });
    this.fileService.add({ name: 'File B', isFolder: false, parent: 'root' }); */
        console.log('this,fileservice ', this.fileService)
    this.updateFileElementQuery();
  }

  download(index){
    var filename = this.attachmentList[index].uploadname;

    this._fileService.downloadFile(filename)
    .subscribe(
        data => saveAs(data, filename),
        error => console.error(error)
    );
}



openDialog(): void {
  const dialogRef = this.dialog.open(FileRemovedDialogComponent, {
    width: '400px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('results', result)
  });
}

  
  //new folders ngular version 
  addFolder(folder: { name: string }) {
    console.log('adding folder to the aservice for the ui')
    console.log( 'addfolder ', this.currentRoot ? this.currentRoot.id : 'root')
    this.fileService.createFolder({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root', path: this.currentPath })
    .subscribe(data=> {
      console.log('the folder added successfully ', data)
      
      this.dialog.open(FolderAddedAlertmodalComponent,{
        width: '400px',
        data: {addFolder: data},
      });
    }, 
    error =>{
      console.log('error while addning the fils and folder')
      console.error('Error while creting the new folder', error)
    });
    this.updateFileElementQuery();
  } 
  
  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
    console.log('updateFileElementQuery', this.fileElements)
  }
  removeElement(element: FileElement) {
    console.log('UserComponent : remove element : emelent ', element)
    this.fileService.delete(element).subscribe(data=>{
      console.log('file remove data ', data)
      this.dialog.open(FileRemovedDialogComponent, {
        width: '600px',
        data: {animal : data}
      });    
    },error=>{
      console.log('file remove data ERROR!', error)
    });
    this.updateFileElementQuery();
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    console.log('this current path: navigateToFolder  ', element )
    this.canNavigateUp = true;
    this.getFile({parent: this.currentRoot ? this.currentRoot.id : 'root', path:this.currentPath })
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    this._fileService.uploadFile({parent: this.currentRoot ? this.currentRoot.id : 'root', path:this.currentPath }).subscribe(data=>{
      console.log('file upload data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data)
    })
    this.updateFileElementQuery()

  }

  navigateUp() {
    console.log('nevigat eup funcrion is called ')
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }

  renameElement(element: FileElement) {
    console.log(element);
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }
  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    console.log('pushToPath : p ; ', p)
    return p;
    
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    console.log('popFromPath : p ; ', p)
    return p;
  }
}


