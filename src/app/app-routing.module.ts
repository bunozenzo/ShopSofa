import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CornerSofaComponent } from './corner-sofa/corner-sofa.component';
import { SkinSofaComponent } from './skin-sofa/skin-sofa.component';
import { ChairSofaComponent } from './chair-sofa/chair-sofa.component';
import { TableSofaComponent } from './table-sofa/table-sofa.component';
import { OtherComponent } from './other/other.component';
import { SaleOfComponent } from './sale-of/sale-of.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home',  component: HomeComponent},
  { path: 'CornerSofa',  component: CornerSofaComponent},
  { path: 'SkinSofa',  component: SkinSofaComponent},
  { path: 'ChairSofa',  component: ChairSofaComponent},
  { path: 'TableSofa',  component: TableSofaComponent},
  { path: 'SaleOf',  component: SaleOfComponent},
  { path: 'Other',  component: OtherComponent},
  { path: 'Detail/:id',  component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
