import { NgModule } from '@angular/core';

import { MatDialogModule, MatTableModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatIconModule,MatGridListModule,
    MatMenuModule,MatCardModule, MatSidenavModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
//import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  exports: [
      FormsModule, 
      MatTableModule, 
      MatDialogModule, 
      MatFormFieldModule, 
      MatButtonModule, 
      MatInputModule, 
      MatPaginatorModule, 
      MatSortModule, 
      MatToolbarModule,
      MatIconModule,
      MatGridListModule,
      MatMenuModule,
      MatCardModule,
      MatSidenavModule
    ]
})
export class MaterialModule {}

