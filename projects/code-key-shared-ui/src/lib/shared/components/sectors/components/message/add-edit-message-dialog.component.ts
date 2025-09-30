import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-message-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule],
  template: `
    <div class="p-fluid">
      <div class="row">
        <div class="col-lg-12 mb-3 d-flex align-items-center">
          <label for="message" class="form-label me-2">الرسالة</label>
          <textarea pInputTextarea id="message" [(ngModel)]="message.message" rows="3" placeholder="أدخل الرسالة" class="flex-fill"></textarea>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-4">
        <button pButton type="button" label="إلغاء" class="p-button-secondary" (click)="onCancel()"></button>
        <button pButton type="button" label="حفظ" [disabled]="!message.message" (click)="onSave()"></button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AddEditMessageDialogComponent implements OnInit {
  message: any = { message: '' };
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);

  ngOnInit() {
    if (this.config.data && this.config.data.message) {
      this.message = { ...this.config.data.message };
    }
  }

  onSave() {
    this.ref.close(this.message);
  }

  onCancel() {
    this.ref.close();
  }
}
