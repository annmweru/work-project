// import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import {Router,NavigationStart} from '@angular/router';
// import { from, Subscription } from 'rxjs';

// // import {Alert,AlertType} from '@app/_models';
// // import {AlertService} from '@app/_userservices';
// @Component({
//   selector: 'app-alert',
//   templateUrl: './alert.component.html',
//   styleUrls: ['./alert.component.css']
// })
// export class AlertComponent implements OnInit , OnDestroy{
//   @Input() id='default-alert';
//   @Input() fade = true;

  
//   // alertSubscription: Subscription = new Subscription;
//   // route: Subscription = new Subscription;

// //   constructor(private router:Router,private alertService:AlertService) { }
// //   ngOnDestroy(): void {
// //     throw new Error('Method not implemented.');
// //   }

// //   ngOnInit(): void {
// //   //   this.alertSubscription=this.alertService.onAlert(this.id)
// //   //   .subscribe(alert =>{
// //   //     if (!alert.message){
// //   //       this.alerts=this.alerts.filter(x =>x.keepAfterRouteChange);

// //   //       this.alerts.forEach(x => delete x.keepAfterRouteChange);
// //   //       return;
// //   //     }
// //   //     this.alerts.push(alert);

// //   //     if(alert.autoClose){
// //   //       setTimeout(() => this.removeAlert(alert), 3000);
// //   //     }
// //   //   });
// //   // }

// }
