# Agoravai

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


1 - DATATABLE INTO YOUR ANGULAR 9 APPLICATION:
npm install jquery --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev
npm install bootstrap --save
 

2 - ANGULAR.JSON FILE:
"styles": [
             ...
       "node_modules/bootstrap/dist/css/bootstrap.min.css",
       "node_modules/datatables.net-dt/css/jquery.dataTables.css"
           ],
"scripts": [
            ...
       "node_modules/jquery/dist/jquery.min.js", 
       "node_modules/bootstrap/dist/js/bootstrap.min.js",
       "node_modules/datatables.net/js/jquery.dataTables.js"
     ]
 

3 - APP.MODULE.TS FILE:
...
import {DataTablesModule} from 'angular-datatables';
imports: [
    ...
  DataTablesModule
  ],
 

4 - APP.COMPONENT.TS FILE:

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;

  title = 'agoravai';

  public dataa = [
    { name: 'Nome1', email: 'email1@gmail.com', website: 'website1.com' },
    { name: 'Nome2', email: 'email2@gmail.com', website: 'website2.com' },
    { name: 'Nome3', email: 'email3@gmail.com', website: 'website3.com' },
    { name: 'Nome4', email: 'email4@gmail.com', website: 'website4.com' },
    { name: 'Nome5', email: 'email5@gmail.com', website: 'website5.com' },
    { name: 'Nome6', email: 'email6@gmail.com', website: 'website6.com' },
    { name: 'Nome7', email: 'email7@gmail.com', website: 'website7.com' },
    { name: 'Nome8', email: 'email8@gmail.com', website: 'website8.com' },
    { name: 'Nome9', email: 'email9@gmail.com', website: 'website9.com' },
    { name: 'Nome10', email: 'email10@gmail.com', website: 'website10.com' },
    { name: 'Nome11', email: 'email11@gmail.com', website: 'website11.com' },
    { name: 'Nome12', email: 'email12@gmail.com', website: 'website12.com' },
    { name: 'Nome13', email: 'email13@gmail.com', website: 'website13.com' },
    { name: 'Nome14', email: 'email14@gmail.com', website: 'website14.com' },
    { name: 'Nome15', email: 'email15@gmail.com', website: 'website15.com' },
    { name: 'Nome16', email: 'email16@gmail.com', website: 'website16.com' },
    { name: 'Nome17', email: 'email17@gmail.com', website: 'website17.com' },
    { name: 'Nome18', email: 'email18@gmail.com', website: 'website18.com' },
    { name: 'Nome19', email: 'email19@gmail.com', website: 'website19.com' },
    { name: 'Nome20', email: 'email20@gmail.com', website: 'website20.com' },
    { name: 'Nome21', email: 'email21@gmail.com', website: 'website21.com' },
    { name: 'Nome22', email: 'email22@gmail.com', website: 'website22.com' },
    { name: 'Nome23', email: 'email23@gmail.com', website: 'website23.com' },
    { name: 'Nome24', email: 'email24@gmail.com', website: 'website24.com' },
    { name: 'Nome25', email: 'email25@gmail.com', website: 'website25.com' },
    { name: 'Nome26', email: 'email26@gmail.com', website: 'website26.com' },
    { name: 'Nome27', email: 'email27@gmail.com', website: 'website27.com' },
    { name: 'Nome28', email: 'email28@gmail.com', website: 'website28.com' },
    { name: 'Nome29', email: 'email29@gmail.com', website: 'website29.com' },
    { name: 'Nome30', email: 'email30@gmail.com', website: 'website30.com' },
    { name: 'Nome31', email: 'email31@gmail.com', website: 'website31.com' },
    { name: 'Nome32', email: 'email32@gmail.com', website: 'website32.com' },
    { name: 'Nome33', email: 'email33@gmail.com', website: 'website33.com' },
    { name: 'Nome34', email: 'email34@gmail.com', website: 'website34.com' },
    { name: 'Nome35', email: 'email35@gmail.com', website: 'website35.com' },
    { name: 'Nome36', email: 'email36@gmail.com', website: 'website36.com' },
    { name: 'Nome37', email: 'email37@gmail.com', website: 'website37.com' },
    { name: 'Nome38', email: 'email38@gmail.com', website: 'website38.com' },
    { name: 'Nome39', email: 'email39@gmail.com', website: 'website39.com' },
    { name: 'Nome40', email: 'email40@gmail.com', website: 'website40.com' },
  ];

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 30],
      processing: true
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

}

 

5 - APP.COMPONENT.HTML FILE:
<div class="container">
  <table class="table table-striped table-bordered table-sm row-border hover" datatable [dtOptions]="dtOptions">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Website</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let group of dataa">
        <td>{{group.name}}</td>
        <td>{{group.email}}</td>
        <td>{{group.website}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th><input type="text" placeholder="Pesquisar nome" name="search-nome" /></th>
        <th><input type="text" placeholder="Pesquisar e-mail" name="search-email" /></th>
        <th><input type="text" placeholder="Pesquisar website" name="search-website" /></th>
      </tr>
    </tfoot>
  </table>
</div>

6 - Link Documentação:
 
http://l-lin.github.io/angular-datatables/#/getting-started

Thank you
