//import { Routes } from '@angular/router';

//export const routes: Routes = [];
import { Routes } from '@angular/router';

// Auth
import { LoginComponent } from './modules/auth/login/login';
import { Register } from './modules/auth/register/register';

// Core Pages
import { Dashboard } from './modules/dashboard/dashboard';

// Patients
import { PatientList } from './modules/patients/patient-list/patient-list';
import { PatientDetails } from './modules/patients/patient-details/patient-details';
import { PatientForm } from './modules/patients/patient-form/patient-form';
import { Home } from './modules/home/home';

export const routes: Routes = [

  // Default redirect
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Auth Routes
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: Register
  },

  // Dashboard
  {
    path: 'dashboard',
    component: Dashboard
  },

  // home
  {
    path: 'home',
    component: Home
  },

  // Patients Module
  {
    path: 'patients',
    children: [
      {
        path: '',
        component: PatientList
      },
      {
        path: 'new',
        component: PatientForm
      },
      {
        path: ':id',
        component: PatientDetails
      },
      {
        path: 'edit/:id',
        component: PatientForm
      }
    ]
  },

  // Fallback (404)
  {
    path: '**',
    redirectTo: 'home'
  }

];