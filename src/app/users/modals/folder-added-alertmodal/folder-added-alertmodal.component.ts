import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData, UsersComponent } from "../../users.component";

@Component({
  selector: 'app-folder-added-alertmodal',
  templateUrl: './folder-added-alertmodal.component.html',
  styleUrls: ['./folder-added-alertmodal.component.css']
})
export class FolderAddedAlertmodalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<FolderAddedAlertmodalComponent>) { }

  ngOnInit() {
  }

}
