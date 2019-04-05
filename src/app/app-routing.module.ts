import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelComponent} from './hotel/hotel.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AcceptedComponent} from './accepted/accepted.component';
import {AcceptingComponent} from './accepting/accepting.component';
import {MainComponent} from './main/main.component';
import {DocumentComponent} from './document/document.component';
import {MenuReviewComponent} from './menu-review/menu-review.component';
import {PrintComponent} from './print/print.component';
import {BookingTicketComponent} from './booking-ticket/booking-ticket.component';
import {FullMapComponent} from './full-map/full-map.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {PasswordRecoveryComponent} from './password-recovery/password-recovery.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'accepted', component: AcceptedComponent},
  {path: 'accepting', component: AcceptingComponent},
  {path: 'document', component: DocumentComponent},
  {path: 'menu-review', component: MenuReviewComponent},
  {path: 'print', component: PrintComponent},
  {path: 'booking-ticket', component: BookingTicketComponent},
  {path: 'full-map', component: FullMapComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
