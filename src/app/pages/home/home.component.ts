import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public displayedColumns: string[] = ['idx', 'name', 'price', 'stock', 'description', 'opt'];
  public dataSource!: any
  public is_edit: boolean = false
  private id_product!: number

  public form_product!: FormGroup
  public success_create: boolean = false
  public success_delete: boolean = false
  constructor(
    private api_service: ApiService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.loadInfoProductos()
    this.loadFormProduct()
  }

  loadFormProduct() {
    this.form_product = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      stock: [1, [Validators.required]]
    })
  }

  loadInfoProductos() {
    this.api_service.viewAllProducts().subscribe(
      ({data}: any) => {
        this.dataSource = data
      }
    )
  }

  deleteProduct(id_product: number) {
    this.api_service.deleteProductById(id_product).subscribe(
      resp => {
        this.success_delete = true
        this.loadInfoProductos()
      }
    )
  }

  onChangeToCreateOrEditModal(id_product?: number) {
    if (!id_product) {
      this.is_edit = false
      this.form_product.reset()
    } else {
      this.is_edit = true
      this.id_product = id_product
      this.api_service.viewUniqueProductById(id_product).subscribe(
        ({data}: any) => {
          console.log(data);
          
          this.form_product.setValue({ name: data.name, description: data.description, stock: data.stock, price: data.price })
        }
      )
    }
  }

  setDataProduct() {
    if (this.is_edit === true) {
      this.api_service.updateProductById(this.id_product, this.form_product.value).subscribe(
        resp => {
          this.success_create = true
          this.loadInfoProductos()
        }
      )
    }else {
      this.api_service.createProduct(this.form_product.value).subscribe(
        resp => {
          this.success_create = true
          this.loadInfoProductos()
        }
      )
    }
  }

}
