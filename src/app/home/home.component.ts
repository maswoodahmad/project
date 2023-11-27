import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text: string;
  list?: string[];
  
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  public services = [
    'Oil Change',
    'Brake Inspection and Service',
    'Tire Rotation and Balancing',
    'Engine Diagnostics',
    'Transmission Service',
    'Wheel Alignment',
    'Battery Replacement',
    'Exhaust System Repair',
    'Air Conditioning Service',
    'Scheduled Maintenance',
  ];
  

  

  tiles: Tile[] = [
    { text: 'Welcome to XYZ Garage', cols: 4, rows: 1 },
    { text: 'Services We Provide', cols: 2, rows: 2 },
    { text: 'About Us', cols: 2, rows: 1 },
    { text: 'Services Link', cols: 2, rows: 1 },
  ];

  


}

