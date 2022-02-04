import { Component, OnInit } from '@angular/core';
import { Categroy } from 'src/app/_models/product/category.model';
import { Tag } from 'src/app/_models/product/tags.model';
import { CategroyService } from 'src/app/_services/product/categroy.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { TagService } from 'src/app/_services/product/tag.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories!: Categroy[]
  tags!: Tag[]
  public srchItem: string = '';
  
  constructor( private categoriesService: CategroyService,
    private tagsService: TagService,
    private productService: ProductService ) {}

  ngOnInit(): void { this.getAllCategories()
    this.getAllTags()
    
  }

  getAllCategories() {
    this.categories = this.categoriesService.getAllCategories()
  }

  // Make tags  work
  getAllTags() {
    this.tags = this.tagsService.getAlltags().slice(0, 5)
  }

  // activate search box
  search(event: any) {
    this.srchItem = (event.target as HTMLInputElement).value;
    this.productService.search.next(this.srchItem)
    
  }
}
