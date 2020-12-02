
Datatables

npm install jquery --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev
npm install bootstrap --save

npm install jszip --save
npm install datatables.net-buttons --save
npm install datatables.net-buttons-dt --save
npm install @types/datatables.net-buttons --save-dev

npm install datatables.net-responsive --save
npm install datatables.net-responsive-dt --save


"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/datatables.net-dt/css/jquery.dataTables.css",
  "node_modules/datatables.net-buttons-dt/css/buttons.dataTables.css",
  "node_modules/datatables.net-responsive-dt/css/responsive.dataTables.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/datatables.net/js/jquery.dataTables.js",
  "node_modules/jszip/dist/jszip.js",
  "node_modules/datatables.net-buttons/js/dataTables.buttons.js",
  "node_modules/datatables.net-buttons/js/buttons.colVis.js",
  "node_modules/datatables.net-buttons/js/buttons.flash.js",
  "node_modules/datatables.net-buttons/js/buttons.html5.js",
  "node_modules/datatables.net-buttons/js/buttons.print.js",
  "node_modules/datatables.net-responsive/js/dataTables.responsive.js"
]


HTML ---------------

<div class="">

  <!-- <button (click)="funcaoAdicionar()" class="btn btn-info mr-2 mt-2">
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
    </svg>Voltar
  </button> -->

  <button (click)="funcaoAdicionar()" class="btn btn-success mt-2"> Adicionar novo Registro
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
  </button>

  <table class="table table-striped table-bordered table-sm row-border hover" datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Website</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let group of dataa">
        <td>{{group.name}}</td>
        <td>{{group.email}}</td>
        <td>{{group.website}}</td>
        <td>
          <button (click)="funcaoDetalhes(group)" class="btn btn-primary">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-zoom-in" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
              <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </button>

          <button (click)="funcaoEditar(group)" class="btn btn-warning mx-2">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </button>
          <button (click)="funcaoExcluir(group)" class="btn btn-danger">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

TS ----------

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, { static: false })

  dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  dtTrigger = new Subject();
  datatableElement: DataTableDirective;
  public dataa = null;

  ngOnInit() {

    this.funcaoOpcoes();

    this.funcaoGeraDados();

  }

  funcaoOpcoes() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 30],
      processing: true,
      language: {
        emptyTable: "Não há dados na tabela",
        info: 'Mostrando _START_ até _END_ de _TOTAL_ registros',
        infoEmpty: "Sem registros",
        lengthMenu: "Mostrar _MENU_ registros por página",
        loadingRecords: "Carregando...",
        processing: "Processando...",
        search: "Pesquisar:",
        zeroRecords: "Nada encontrado",
        paginate: {
          "first": "Primeiro",
          "last": "Último",
          "next": "Próximo",
          "previous": "Anterior"
        }
      },

      // dom: 'Bfrtip',
      dom:
        "<'row mt-3 left aligned'<'col-sm-12'Bf>>" +
        "<'row'<'col-sm-12'lrt>>" +
        "<'row'<'col-sm-12'ip>>",


      buttons: [
        { extend: 'colvis', text: 'Colunas visíveis' },
        { extend: 'print', text: 'Imprimir' },
        { extend: 'excel', text: 'Exportar para Excel', filename: 'wes' + '_excel' },
      ],
      responsive: true,
    };
  }

  funcaoGeraDados() {
    setTimeout(() => {
      this.dataa = [
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
      this.rerender();
    }, 5000);
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  funcaoAdicionar(){
    console.log("Adicionar registro");
  }

  funcaoDetalhes(registro){
    console.log(registro);
  }

  funcaoEditar(registro){
    console.log(registro);
  }

  funcaoExcluir(registro){
    console.log(registro);
  }
}


Module -------------

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

