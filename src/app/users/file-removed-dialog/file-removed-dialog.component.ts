import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData, UsersComponent } from "../users.component";
@Component({
  selector: 'app-file-removed-dialog',
  templateUrl: './file-removed-dialog.component.html',
  styleUrls: ['./file-removed-dialog.component.css']
})
export class FileRemovedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<FileRemovedDialogComponent> ) { 

  }

  ngOnInit() {
  }

}
