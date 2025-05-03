import { Routes } from '@angular/router';

// import pages compoennt based on the path
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { WorkoutPageComponent } from './pages/workout-page/workout-page.component';
import { NutritionPageComponent } from './pages/nutrition-page/nutrition-page.component';
import { ExportPageComponent } from './pages/export-page/export-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ModalComponent } from './components/shared/modal/modal.component';

export const routes: Routes = [
  { path: '', component: DashboardPageComponent }, // page d'accueil = page dashboard
  { path: 'progress', component: ProgressPageComponent },
  { path: 'workout', component: WorkoutPageComponent },
  { path: 'nutrition', component: NutritionPageComponent },
  { path: 'export', component: ExportPageComponent },
  { path: 'notfound', component: NotfoundPageComponent },
  { path: 'add', component: ModalComponent },
  { path: ' ', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NotfoundPageComponent, pathMatch: 'full' },
];
