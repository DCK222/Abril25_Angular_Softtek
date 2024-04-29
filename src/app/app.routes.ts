import { Routes } from '@angular/router';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { Component } from '@angular/core';
import { BorrarProductoComponent } from './borrar-producto/borrar-producto.component';

export const routes: Routes = [
    {
        path: '', 
        component: MostrarProductosComponent, 
        children: [
            { path: 'alta', component: AltaProductoComponent },
            { path: 'borrar', component: BorrarProductoComponent }
        ]
    }
];
