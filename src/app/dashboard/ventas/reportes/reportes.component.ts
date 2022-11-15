import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goForm(v: string){
    this.router.navigateByUrl('/'+v)
  }
}
