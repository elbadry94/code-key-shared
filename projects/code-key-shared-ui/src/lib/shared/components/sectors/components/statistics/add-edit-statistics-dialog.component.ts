import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-statistics-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule],
  template: `
    <div class="p-fluid">
      <div class="row">
        <div class="col-lg-4 mb-3">
          <label for="label" class="form-label">التسمية</label>
          <input type="text" id="label" [(ngModel)]="statistics.label" placeholder="التسمية" class="w-100" />
        </div>
        <div class="col-lg-4 mb-3">
          <label for="value" class="form-label">القيمة</label>
          <input type="text" id="value" [(ngModel)]="statistics.value" placeholder="القيمة" class="w-100" />
        </div>
        <div class="col-lg-4 mb-3">
          <label for="icon" class="form-label">الأيقونة</label>
          <input type="text" id="icon" [(ngModel)]="statistics.icon" placeholder="الأيقونة" class="w-100" />
        </div>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-4">
        <button pButton type="button" label="إلغاء" class="p-button-secondary" (click)="onCancel()"></button>
        <button pButton type="button" label="حفظ" [disabled]="!statistics.label || !statistics.value || !statistics.icon" (click)="onSave()"></button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AddEditStatisticsDialogComponent implements OnInit {
  statistics: any = { label: '', value: '', icon: '' };
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);

  ngOnInit() {
    if (this.config.data && this.config.data.statistics) {
      this.statistics = { ...this.config.data.statistics };
    }
  }

  onSave() {
    this.ref.close(this.statistics);
  }

  onCancel() {
    this.ref.close();
  }
}
