import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-about-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule],
  template: `
    <div class="p-fluid">
      <div class="row">
        <div class="col-lg-12 mb-3 d-flex align-items-center">
          <label for="aboutDesc" class="form-label me-2">وصف القطاع</label>
          <textarea id="aboutDesc" [(ngModel)]="about.description" rows="3" class="flex-fill" placeholder="أدخل وصف القطاع"></textarea>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-4">
        <button pButton type="button" label="إلغاء" class="p-button-secondary" (click)="onCancel()"></button>
        <button pButton type="button" label="حفظ" [disabled]="!about.description" (click)="onSave()"></button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AddEditAboutDialogComponent implements OnInit {
  about: any = { description: '' };
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);

  ngOnInit() {
    if (this.config.data && this.config.data.about) {
      this.about = { ...this.config.data.about };
    }
  }

  onSave() {
    this.ref.close(this.about);
  }

  onCancel() {
    this.ref.close();
  }
}
