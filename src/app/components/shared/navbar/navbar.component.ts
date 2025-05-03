import { Component } from '@angular/core';
import { materialImports } from '../../../lib/material/material.imports'; 
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [...materialImports, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'  
})
export class NavbarComponent {

}
