import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { ProductoService } from '../_servicios/producto.service';
import { Producto } from '../_modelo/producto';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule ,  RouterModule],
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent  {
  operar(): void {
    if (this.form.valid) {  
      const producto: Producto = this.form.value;
      this.servicio.alta(producto).subscribe({
        next: () => {
          console.log('Producto creado con éxito');
        },
        
      });
    } else {
      console.error('El formulario no es válido');
    }
  }

  // producto: Producto = { idProducto: 0, nombreProducto: '', precioUnitario: 0, unidadesStock: 0 };

  // constructor(private productoService: ProductoService) {}

  // daralta(): void {
  //   this.productoService.alta(this.producto).subscribe();
  // }
  form:FormGroup;
  id:number = 0;
  edicion:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicio: ProductoService

  ){this.form = new FormGroup({

    'idProducto' : new FormControl(0),
    'nombreProducto' : new FormControl(''),
    'precioUnitario' : new FormControl(0),
    'unidadesStock' : new FormControl(0)


  });}

  ngOnInit(): void {
    this.route.params
    .subscribe(data =>{
      this.id = data['id'];
      this.edicion = data['id'] !=null;
      this.formaFormulario();
    })
    
  }
  formaFormulario(): void {
    if (this.edicion) {
      this.servicio.listarProductoPorId(this.id)
        .subscribe({
          next: (producto: Producto) => {
          
            this.form = new FormGroup({
              'idProducto': new FormControl(producto.idProducto),

              'nombreProducto': new FormControl(producto.nombreProducto, Validators.required),  // Asumiendo que el nombre es requerido
              
              'precioUnitario': new FormControl(producto.precioUnitario, [Validators.required, Validators.min(0.01)]),  // Asumiendo que el precio debe ser positivo
             
              'unidadesStock': new FormControl(producto.unidadesStock, [Validators.required, Validators.min(0)]),  // Asumiendo que las unidades en stock no pueden ser negativas
            });
          },
          error: err => {
            console.error('Error al cargar el producto:', err);
            this.router.navigate(['/error']); 
          }
        });
    }
  }
  
}
// idProducto: number;
//     nombreProducto: string;
//     precioUnitario: number;
//     unidadesStock: number;