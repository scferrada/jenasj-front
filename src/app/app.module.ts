import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorModule } from '@ngstack/code-editor';

import {AppMaterialModule} from './app-material/app-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { QueryEditorComponent } from './query-editor/query-editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { QueryResultsComponent } from './query-results/query-results.component';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    QueryEditorComponent,
    SidebarComponent,
    ExampleDialogComponent,
    QueryResultsComponent,
    HelpDialogComponent,
    ShareDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CodeEditorModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
