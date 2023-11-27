import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Garage from '../garage.model';

@Component({
  selector: 'app-row-details-dialog',
  templateUrl: './row-details-dialog.component.html',
  styleUrls: ['./row-details-dialog.component.css']
})
export class RowDetailsDialogComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Garage,
    public dialogRef: MatDialogRef<RowDetailsDialogComponent>  // Inject MatDialogRef
  ) {
  
  }
  

  closeDialog(): void {
    this.dialogRef.close();

}
}