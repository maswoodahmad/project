import { Component } from '@angular/core';
import { GarageService } from '../garage.service';
import { Observable } from 'rxjs';
import Garage from '../garage.model';
import { ColDef } from 'ag-grid-community';
import { RowDetailsDialogComponent } from '../row-details-dialog/row-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
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

  

  public rowData: Garage[] = [];
  constructor( private _garageService: GarageService, private dialog: MatDialog) {
    
  }

  ngOnInit() {
    
    this._garageService.getServices().subscribe(
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

  

 

  

}
