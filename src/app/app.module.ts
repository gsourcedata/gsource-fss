import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EffectsModule } from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import { TreeModule } from 'angular-tree-component';
import {TranslateModule} from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ParticlesModule } from 'angular-particle';
import { MatFileUploadModule } from 'angular-material-fileupload';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FoldermoduleComponent } from './users/foldermodule/foldermodule.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { FileService } from './service/file.service'
import { UsersService } from './users.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { NewFolderDialogComponent } from './file-upload/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './file-upload/rename-dialog/rename-dialog.component';
import { FileRemovedDialogComponent } from "./users/file-removed-dialog/file-removed-dialog.component";
import { from } from 'rxjs';
import { FolderAddedAlertmodalComponent } from './users/modals/folder-added-alertmodal/folder-added-alertmodal.component';
//import { FileRemovedDialogComponent } from './users/file-removed-dialog/file-removed-dialog.component';
const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'profile', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: '**', component: UsersComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    FileUploadComponent,
    FoldermoduleComponent,
    NewFolderDialogComponent,
    RenameDialogComponent,
    FileRemovedDialogComponent,
    FolderAddedAlertmodalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ConfirmationPopoverModule.forRoot(),
    EffectsModule.forRoot([]),
    ParticlesModule,
    StoreModule.forRoot({}),
    TreeModule.forRoot(),
    TranslateModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    MatFileUploadModule
  ],
  providers: [
      AuthenticationService, 
      AuthGuardService,
      FileService,
      UsersService
      ],
  bootstrap: [AppComponent],
  entryComponents: [
    FoldermoduleComponent, 
    NewFolderDialogComponent, 
    RenameDialogComponent, 
    FileRemovedDialogComponent, 
    FolderAddedAlertmodalComponent],
})
export class AppModule { }
