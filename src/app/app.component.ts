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
