import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [LowerCasePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  page:string ="";
  private modalService = inject(NgbModal);

  stats: any = [
    {
      "Section": 1,
      "TotalPatients": 1240,
      "AppointmentsToday": 32,
      "CheckedIn": 18,
      "Pending": 14
    }
  ];

  appointments: any = [
    { "id": 1, "time": "09:00", "patient_name": "Vusi Ndlovu", "status": "Waiting", "Action":"Start" },
    { "id": 2, "time": "10:00", "patient_name": "Mpendulo Nkosi", "status": "InProgress", "Action":"View" },
    { "id": 3, "time": "10:30", "patient_name": "Zodwa Mnguni", "status": "Missed", "Action":"Reschedule" }
  ];

  liveactivities: any = [
    { "id": 0, "activity": "John Doe checked in" },
    { "id": 1, "activity": "Prescription issued" },
    { "id": 2, "activity": "Appointment created" },
    { "id": 3, "activity": "Patient discharged" },
    { "id": 4, "activity": "Jane Khumalo checked in" }
  ];

  alerts: any = [
    { "id": 0, "alert": "5 Missed Appointments" },
    { "id": 1, "alert": "Long Waiting Times" },
    { "id": 2, "alert": "Unpaid Invoices" }
  ];

  patientInsight: any = [{
    "NewPatients": 12,
    "Retuning": 20,
    "HighRisk": 3
  }];

  //modal
  open(content:any,_page:string){
    this.page = _page;
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title',
      size: 'xl',
      windowClass: 'modal-xl-custom'
    });
  }

}
