import { Component, OnInit } from '@angular/core';
import { menuItems } from "../menuItems";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = menuItems;
  
  constructor() {};

  ngOnInit(): void {};

}
