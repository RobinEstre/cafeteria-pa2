import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Producto } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrl: './producto-dialog.component.css'
})
export class ProductoDialogComponent {
  form = this.fb.group({
    name: [this.data?.name || '', [Validators.required]],
    price: [this.data?.price ?? 0, [Validators.required, Validators.min(0.01)]],
    stock: [this.data?.stock ?? 0, [Validators.required, Validators.min(0)]],
  });
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Producto | null,
    private ref: MatDialogRef<ProductoDialogComponent>
  ) { }
  save() { if (this.form.valid) this.ref.close(this.form.value); }
  close() { this.ref.close(null); }
}