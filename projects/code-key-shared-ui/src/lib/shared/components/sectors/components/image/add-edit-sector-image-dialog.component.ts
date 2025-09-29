import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-sector-image-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, FormsModule],
  template: `
    <div class="p-fluid">
      <div *ngIf="imagePreview" class="mb-3 text-center">
        <img [src]="imagePreview" alt="صورة القطاع" style="max-width: 100%; max-height: 200px; border-radius: 8px; border: 1px solid #eee;" />
      </div>
      <div class="mb-3">
        <input type="file" accept="image/*" (change)="onFileChange($event)" />
      </div>
      <div class="flex justify-content-end gap-2 mt-4">
        <button pButton type="button" label="إلغاء" class="p-button-secondary" (click)="onCancel()"></button>
        <button pButton type="button" label="حفظ" [disabled]="!imageFile && !imagePreview" (click)="onSave()"></button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AddEditSectorImageDialogComponent implements OnInit {
  imageFile: File | null = null;
  imagePreview: string | null = null;
  sectorId: string = '';
  imageData: any = {};

  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);

  ngOnInit() {
    this.sectorId = this.config.data.sectorId;
    if (this.config.data.image) {
      this.imageData = { ...this.config.data.image };
      this.imagePreview = this.imageData.imageUrl;
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSave() {
    if (this.imageFile) {
      // رفع الصورة كملف
      const formData = new FormData();
      formData.append('image', this.imageFile);
      formData.append('sectorId', this.sectorId);
      if (this.imageData.id) {
        formData.append('id', this.imageData.id);
      }
      this.ref.close(formData);
    } else if (this.imagePreview) {
      // تعديل فقط بدون تغيير الصورة
      this.ref.close({ ...this.imageData });
    }
  }

  onCancel() {
    this.ref.close();
  }
}
