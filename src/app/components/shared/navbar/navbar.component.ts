import { Component } from '@angular/core';
import { materialImports } from '../../../lib/material/material.imports'; 



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [...materialImports],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'  
})
export class NavbarComponent {

}
