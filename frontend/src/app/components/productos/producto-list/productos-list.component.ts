import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Producto, ProductoService } from '../../../services/producto.service';
import { ToastService } from '../../../shared/toast.service';
import { ProductoDialogComponent } from '../producto-dialog/producto-dialog.component';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {
  displayed = ['id', 'name', 'price', 'stock', 'actions'];
  data = new MatTableDataSource<Producto>([]);
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: ProductoService, private dialog: MatDialog, private toast: ToastService) { }

  ngOnInit() { this.cargar(); }

  cargar() {
    this.loading = true;
    this.api.getAll().subscribe({
      next: r => { this.data.data = r; this.data.paginator = this.paginator; },
      error: () => this.toast.err('No se pudo cargar productos'),
      complete: () => this.loading = false
    });
  }

  crear() {
    const ref = this.dialog.open(ProductoDialogComponent, { width: '420px', data: null });
    ref.afterClosed().subscribe(val => {
      if (!val) return;
      this.api.create(val).subscribe({
        next: () => { this.toast.ok('Producto creado'); this.cargar(); },
        error: () => this.toast.err('Error creando producto')
      });
    });
  }

  editar(row: Producto) {
    const ref = this.dialog.open(ProductoDialogComponent, { width: '420px', data: row });
    ref.afterClosed().subscribe(val => {
      if (!val) return;
      this.api.update(row.id!, val).subscribe({
        next: () => { this.toast.ok('Producto actualizado'); this.cargar(); },
        error: () => this.toast.err('Error actualizando producto')
      });
    });
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar producto?')) return;
    this.api.delete(id).subscribe({
      next: () => { this.toast.ok('Producto eliminado'); this.cargar(); },
      error: () => this.toast.err('No se pudo eliminar')
    });
  }
}
