import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { SEARCH_SELECT } from '../../constants/selects'
import { PurchaseItem } from '../../models/PurchaseItem';
import { purchasesRequest } from '../../models/purchasesRequest';
import { PurchasesService } from '../../services/purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.sass']
})
export class PurchasesComponent implements OnInit {
  ELEMENT_DATA: PurchaseItem[] = []
  selected: purchasesRequest;
  isLoading: boolean = true;
  isLoadingExport: boolean = false;
  form: FormGroup;
  fields = SEARCH_SELECT
  error: string = '';
  displayedColumns: string[] = ['name', 'cel', 'email', 'date', 'age', 'purchase'];
  dataSource :PurchaseItem[]= [];


  constructor(
    private purchase: PurchasesService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private auth: AuthService,
  ) {
    const start = new Date();
    start.setMonth(start.getMonth() - 24);
    this.selected =  {
      vault_id: 'b73bde9f-6891-4b2e-847e-484be1830794',
      // vault_id: '63c20f43-c29e-4632-a4c3-fc45c3ece77b',
      begin_date: start.toISOString(),
      end_date: new Date().toISOString(),
      filter_field: '',
      filter_value: '',
      items_per_page: 4,
      page: 0,
    }

    this.form = this.fb.group({
      begin_date: [''],
      end_date: [''],
      filter_field: [''],
      filter_value: [''],
    });
  }



  ngOnInit(): void {
    this.getData(this.selected)
  }


  getData(request: purchasesRequest){
    this.isLoading = true;
    this.purchase.getPurchases(request).subscribe(response => {
      this.isLoading = false;
      if(response.items==null){
        this.dataSource = [];  
      }else{
        this.dataSource = response.items;
      }
      
    },
    error=>{
      this.error = 'Ha ocurrido un Error.'
      this.dataSource = [];  
      if(error.status===401){
        this.auth.logout()
        this.auth
          this._snackBar.open('Sesion expirada', 'Cerrar', {
            duration: 2000,
          });
      }
    })
  }


  onSubmit(e: Event){
    e.preventDefault()

    const request : purchasesRequest = {
      begin_date: this.begin_date,
      end_date : this.end_date,
      filter_field: this.filter_field,
      filter_value: this.filter_value,
      page: 0,
      items_per_page: 4,
      vault_id: this.selected.vault_id
    }
    this.getData(request)
  }

  csv(){
    this.isLoadingExport = true
    this.purchase.export(this.selected).subscribe(result=>{
      result = result.replace(/"/g,'')
      const data = window.atob(result) 
      var blob = new Blob([data], {type: "data:text/csv;base64"});
      var url  = window.URL.createObjectURL(blob);
      const a = window.document.createElement("a");
      a.download = "test.csv";  
      a.href = url
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.isLoadingExport = false
    })
  }



  get begin_date() { return this.form.get('begin_date')?.value; }
  get end_date() { return this.form.get('end_date')?.value; }
  get filter_field() { return this.form.get('filter_field')?.value; }
  get filter_value() { return this.form.get('filter_value')?.value; }
}
