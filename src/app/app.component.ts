import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;
  columnDefs = [
    {headerName: "IFSC NO.", field: "ifsc", width: 100, height: 30, sortable: true},
    {headerName: "Bank ID.", field: "bank_id", width: 100, sortable: true},
    {headerName: "Branch", field: "branch", width: 250, sortable: true},
    {headerName: "Address", field: "address", width: 1000, sortable: true},
    {headerName: "City", field: "city", width: 85, sortable: true},
    {headerName: "District", field: "district", width:130, sortable: true},
    {headerName: "State", field: "state", width: 120, sortable: true},
    {headerName: "Bank Name", field: "bank_name", width: 355, sortable: true}
  ];
  constructor(private http: HttpClient) {

  }
  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http.get("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
    .subscribe(dataValue=> {
      params.api.setRowData(dataValue);
    })
  }
}
