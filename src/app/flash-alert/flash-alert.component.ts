import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flash-alert',
  templateUrl: './flash-alert.component.html',
  styleUrls: ['./flash-alert.component.css']
})
export class FlashAlertComponent implements OnInit {
  @Input() tipo: string;
  @Input() navigate: string;
  @Input() msg: string;
  timeout = 1500;
  constructor(private _router: Router) { }

  ngOnInit() {        
  }

  onClosed(): void {    
    this._router.navigate([this.navigate]);
  }
}
