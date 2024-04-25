import { Component, OnInit } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { ProductoService } from '../_servicios/producto.service';

@Component({
  selector: 'app-mostrar-productos',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-productos.component.html',
  styleUrl: './mostrar-productos.component.css'
})
export class MostrarProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.listarProductos().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
      },
    );
  }

}
