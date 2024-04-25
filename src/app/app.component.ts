import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarProductosComponent } from "./mostrar-productos/mostrar-productos.component";
import { AltaProductoComponent } from "./alta-producto/alta-producto.component";
import { BorrarProductoComponent } from "./borrar-producto/borrar-producto.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MostrarProductosComponent, AltaProductoComponent, BorrarProductoComponent]
})
export class AppComponent {
  title = 'abril25_angular_Softtek';
}
