import { Component } from '@angular/core';
import { ProductoService } from '../_servicios/producto.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-borrar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './borrar-producto.component.html',
  styleUrl: './borrar-producto.component.css'
})
export class BorrarProductoComponent {
  idProducto: number | null = null;

  constructor(private productoService: ProductoService) {}
  
  eliminarProducto(): void {
    if (this.idProducto) {
      this.productoService.eliminar(this.idProducto).subscribe();
    }
}
}
