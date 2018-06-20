import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CornerSofaComponent } from './corner-sofa/corner-sofa.component';
import { SkinSofaComponent } from './skin-sofa/skin-sofa.component';
import { ChairSofaComponent } from './chair-sofa/chair-sofa.component';
import { TableSofaComponent } from './table-sofa/table-sofa.component';
import { OtherComponent } from './other/other.component';
import { SaleOfComponent } from './sale-of/sale-of.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CornerSofaComponent,
    SkinSofaComponent,
    ChairSofaComponent,
    TableSofaComponent,
    OtherComponent,
    SaleOfComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
