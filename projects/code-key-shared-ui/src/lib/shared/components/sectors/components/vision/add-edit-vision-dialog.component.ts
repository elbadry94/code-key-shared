import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-vision-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule],
  template: `
    <div class="p-fluid">
      <div class="row">
        <div class="col-lg-12 mb-3 d-flex align-items-center">
          <label for="vision" class="form-label me-2">الرؤية</label>
          <textarea pInputTextarea id="vision" [(ngModel)]="vision.vision" rows="3" placeholder="أدخل الرؤية" class="flex-fill"></textarea>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-4">
        <button pButton type="button" label="إلغاء" class="p-button-secondary" (click)="onCancel()"></button>
        <button pButton type="button" label="حفظ" [disabled]="!vision.vision" (click)="onSave()"></button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AddEditVisionDialogComponent implements OnInit {
  vision: any = { vision: '' };
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);

  ngOnInit() {
    if (this.config.data && this.config.data.vision) {
      this.vision = { ...this.config.data.vision };
    }
  }

  onSave() {
    this.ref.close(this.vision);
  }

  onCancel() {
    this.ref.close();
  }
}
