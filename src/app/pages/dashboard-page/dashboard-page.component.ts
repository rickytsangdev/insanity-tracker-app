import { Component } from '@angular/core';
import { materialImports } from '../../lib/material/material.imports';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [...materialImports],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
