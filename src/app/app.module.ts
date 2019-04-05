import { BrowserModule } from '@angular/platform-browser';
import {GoTopButtonModule} from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';
import { SlickModule } from 'ngx-slick';
import { DragScrollModule } from 'ngx-drag-scroll/lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchCityDateComponent } from './search-city-date/search-city-date.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MapComponent } from './map/map.component';
import { HeadMainComponent } from './head-main/head-main.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainHotelComponent } from './main-hotel/main-hotel.component';
import { OrderHeadComponent } from './order-head/order-head.component';

import {GalleriaModule} from 'primeng/galleria';
import {TabViewModule} from 'primeng/tabview';
import { AcceptedComponent } from './accepted/accepted.component';
import { AcceptingComponent } from './accepting/accepting.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BookingComponent } from './booking/booking.component';
import { PriceComponent } from './price/price.component';
import { SeatAvailabilityComponent } from './seat-availability/seat-availability.component';
import { HotelComponent } from './hotel/hotel.component';
import { MainComponent } from './main/main.component';
import { DocumentComponent } from './document/document.component';
import { ContractComponent } from './contract/contract.component';
import { AccountsComponent } from './accounts/accounts.component';
import { EcpComponent } from './ecp/ecp.component';
import { MenuReviewComponent } from './menu-review/menu-review.component';
import { MyReviewComponent } from './my-review/my-review.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { PrintComponent } from './print/print.component';
import { HeadPrintComponent } from './head-print/head-print.component';
import { MainPrintComponent } from './main-print/main-print.component';
import { FooterComponent } from './footer/footer.component';
import { SimilarHotelsComponent } from './similar-hotels/similar-hotels.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { HeadBookingTicketComponent } from './head-booking-ticket/head-booking-ticket.component';
import { MainBookingTicketComponent } from './main-booking-ticket/main-booking-ticket.component';
import { FooterBackToApartmentComponent } from './footer-back-to-apartment/footer-back-to-apartment.component';
import { FooterBackToHotelComponent } from './footer-back-to-hotel/footer-back-to-hotel.component';
import { FullMapComponent } from './full-map/full-map.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SearchCityDateComponent,
    HotelsComponent,
    MapComponent,
    HeadMainComponent,
    NotFoundComponent,
    MainHotelComponent,
    OrderHeadComponent,
    AcceptedComponent,
    AcceptingComponent,
    TabsComponent,
    ReviewsComponent,
    BookingComponent,
    PriceComponent,
    SeatAvailabilityComponent,
    HotelComponent,
    MainComponent,
    DocumentComponent,
    ContractComponent,
    AccountsComponent,
    EcpComponent,
    MenuReviewComponent,
    MyReviewComponent,
    WriteReviewComponent,
    PrintComponent,
    HeadPrintComponent,
    MainPrintComponent,
    FooterComponent,
    SimilarHotelsComponent,
    BookingTicketComponent,
    HeadBookingTicketComponent,
    MainBookingTicketComponent,
    FooterBackToApartmentComponent,
    FooterBackToHotelComponent,
    FullMapComponent,
    ChangePasswordComponent,
    PasswordRecoveryComponent,
    AuthorizationComponent,
    RegistrationComponent
  ],
  imports: [
    GoTopButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AccordionModule,
    MatSlideToggleModule,
    GalleriaModule,
    TabViewModule,
    SlickModule.forRoot(),
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
