import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

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
import { ServiceProductService } from './service/service-product.service';

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
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ServiceProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
