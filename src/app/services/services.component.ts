
import { Component } from '@angular/core';
import { GarageService } from '../garage.service';
import { Observable } from 'rxjs';
import Garage from '../garage.model';
import { ColDef } from 'ag-grid-community';
import { RowDetailsDialogComponent } from '../row-details-dialog/row-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api/api.service';


declare function fileSave(data:any):any;
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {


  public styles ={
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',    
    justifyContent: 'center',
    margin: '2% 10%',
    height: '100vh', 

  }

  

  public rowData: any = [];
  constructor( 
    private _garageService: GarageService,
     private dialog: MatDialog,
     private _apiService:ApiService
     
     ) {
    
  }

  ngOnInit() {
    
    this._apiService.getMessage().subscribe(
      data => {
        
       console.log(data);

       this.rowData=data;
        
  }
        ,
      error=>console.error(error)
)

  }
  colDefs: ColDef[] = [
    
    { headerName : 'Service Id', field: 'serviceId', resizable: true , width:100},
    { headerName: 'Service Name', field: 'serviceName',resizable: true  },
    { headerName: 'Description', field: 'description' ,resizable: true, width:600},
    { headerName: 'Price', field: 'price' ,resizable: true },
  ];

  
  onCellClicked(event: any){
    console.log(event);
    const rowData = event.data;
    this.dialog.open(RowDetailsDialogComponent,{

      data:rowData,
      width:'600px'
    });


  }


  submit() {
    

    // fileSave(this.rowData);

    this._apiService.getMessage().subscribe((data:any) => { 
      console.log(data);



  }); 

console.log(this.rowData);



  this._apiService
.addData(this.rowData)
.subscribe(
  response=> console.log("server response:", response),
  error=> console.log("error message", error)
)


}
}  

  



  




