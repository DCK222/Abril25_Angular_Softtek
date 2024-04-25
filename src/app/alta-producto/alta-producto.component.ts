import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductoService } from '../_servicios/producto.service';
import { Producto } from '../_modelo/producto';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent  {

  producto: Producto = { idProducto: 0, nombreProducto: '', precioUnitario: 0, unidadesStock: 0 };

  constructor(private productoService: ProductoService) {}

  daralta(): void {
    this.productoService.alta(this.producto).subscribe();
  }
  
}