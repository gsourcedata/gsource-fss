import { Component, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { FileElement } from './element';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from './new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './rename-dialog/rename-dialog.component';
import { UsersService } from '../users.service';
import {saveAs} from 'file-saver';
import { element } from '@angular/core/src/render3';
import { AuthenticationService, UserDetails } from '../authentication.service';
import {FileRemovedDialogComponent} from "../users/file-removed-dialog/file-removed-dialog.component";
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
const uri = 'http://localhost:3000/api/upload'
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnChanges{
  uploader:FileUploader = new FileUploader({url:uri});
  closeResult: string;  
  attachmentList:any = [];


  constructor(private auth: AuthenticationService,public dialog: MatDialog, private _fileService:UsersService) {
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.fileElements.push(JSON.parse(response));
      console.log('connnnsssstttrrruuuccctttooorrrr', response)
  }

  }
  uploadCard = true
  doneBut = false
  userData:any = []
  user : string
  @Input() fileElements: FileElement[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  @Output() navigatedUp = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    console.log('uploaddddddddddderrrrrrrrrrrrr', this.uploader)

    this.auth.profile().subscribe(user => {
      console.log('Usercomponent : userDetails ', user)
      this.user= user.roles
    }, (err) => {
      console.error(err);
    });

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._fileService.getAll().subscribe(
      data => {
        console.log("data from the getall", data)
       // for(let entry of data)
       this.userData = data

     
       console.log(this.userData)
        console.log("file element in thwe geteALL () Dartat _+_+_+_+_+_", this.fileElements)
    
          
        //this.userData = Array.of(this.userData);
        this.fileElements.forEach(element => {
          if(element.isFolder){
            this.userData.forEach(user=>{
             // console.log('userdata', user)
              if(element.name == user._id){
               // element.name = user.name

              }
            })
          }
            
          });


      }, error => {
        console.error(error)
      }
    )
    
  }
  
  hide(){
    
    if(!this.uploadCard){
      console.log('iffffffffffffffffffffffffff')
      this.uploadCard = true
    }else{
      this.uploadCard = false
    }
    console.log('uploaddd card', this.uploadCard)
  }
  

  downloadFile(element: FileElement){ 
    console.log('donwload funcrion is working', element)
    //var filename = this.attachmentList[index].uploadname;
    var filename = element

    this._fileService.downloadFile(filename)
    .subscribe(
        data => {
          console.log('data>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data)
          console.log('filename', filename)

          saveAs(data, filename.name)
        },
        error => console.error(error)
    );
  }

  deleteElement(element: FileElement) {
    console.log('delete element', element)
    this.elementRemoved.emit(element);
  }

  navigate(element: FileElement) {
    console.log('_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+__+++_+_+_=', element)
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element: element, moveTo: moveTo });
  }

  openNewFolderDialog() {
    let dialogRef = this.dialog.open(NewFolderDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res });
        console.log('folder added ', res)
      }
    });
  }

  openRenameDialog(element: FileElement) {
    let dialogRef = this.dialog.open(RenameDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    });
  }
  openFileRemovedDialog() {
   this.dialog.open(FileRemovedDialogComponent);
    /* dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    }); */
  }

  openMenu(event: MouseEvent, element: FileElement, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }

}
