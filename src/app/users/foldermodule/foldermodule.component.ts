import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from './dialogData';


@Component({
  selector: 'app-foldermodule',
  templateUrl: './foldermodule.component.html',
  styleUrls: ['./foldermodule.component.css']
})
export class FoldermoduleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FoldermoduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
