import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../dto/product';
import { Subscription } from 'rxjs';
import { ServiceProductService } from '../service/service-product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  public productDetail: Product;
  public subcription: Subscription;
  constructor(private serviceService: ServiceProductService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = params['id'];
      this.serviceService.getServiceId(id)
        .then(service => this.productDetail = service);
    });
  }
}
