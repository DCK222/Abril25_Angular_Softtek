import { Observable, Subject } from "rxjs";
import { entorno } from "../_entorno/entorno";
import { Producto } from "../_modelo/producto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    private ulrPuerto = 'http://localhost:8080/productos';

    constructor(private http: HttpClient) {}
  
    listarProductos(): Observable<Producto[]> {
      return this.http.get<Producto[]>(this.ulrPuerto);
    }


    alta(producto: Producto): Observable<Producto> {
        console.log('Prueba a ver si hace algo esto', producto);
        return this.http.post<Producto>(this.ulrPuerto, producto);
    }

    eliminar(idProducto: number): Observable<any> {
        return this.http.delete(`${this.ulrPuerto}/${idProducto}`);
      }
}