import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { _product, _response_register_user, _user } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url_api: string = environment.url_api_eme

  constructor(
    private http: HttpClient
  ) { }

  //* |-> Getter que mantendra el token en los headers de la peticion
  private get header_oauth() {
    return {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('Authorization')}` || ''
      }
    }
  }

  // TODO -> Peticiones Oauth
  /**
   * 
   */
  //? -> Metodo que registrata un usuario
  registerUser(body: _user) {
    const url: string = `${this.url_api}/register`
      return this.http.post<_response_register_user>(url, body)
  }

  //? -> Metodo que autentificara un usuario
  loginUser(body: _user) {
    const url: string = `${this.url_api}/login`
      return this.http.post(url, body)
  }

  // TODO -> Peticiones de Productos
  /**
   * 
   */
  //? -> Metodo que mostrara todos los productos
  viewAllProducts() {
    const url: string = `${this.url_api}/products`
      return this.http.get(url, this.header_oauth)
  }

  //? -> Metodo que mostrara un producto por id
  viewUniqueProductById(id_product: number) {
    const url: string = `${this.url_api}/products/${id_product}`
      return this.http.get(url, this.header_oauth)
  }

  //? -> Metodo que creara un producto
  createProduct(body: _product) {
    const url: string = `${this.url_api}/products`
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('Authorization') || ''}`)
      .set('X-CSRF-TOKEN', localStorage.getItem('x-csrf') || '');
      return this.http.post(url, body, { headers })
  }

  //? -> Metodo que editara un producto por su id
  updateProductById(id_product: number, body: _product) {
    const url: string = `${this.url_api}/products/${id_product}`
      return this.http.put(url, body, this.header_oauth)
  }

  //? -> Metodo que eliminara un producto por su id
  deleteProductById(id_product: number) {
    const url: string = `${this.url_api}/products/${id_product}`
      return this.http.delete(url, this.header_oauth)
  }

}
