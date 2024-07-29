import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{

  @Input() message: string | null = null;
  @Input() type: 'success' | 'error' = 'success';
 
  ngOnInit(): void {
    setTimeout(() => this.message = null, 3000); 
  }
}
