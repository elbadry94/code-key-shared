import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewsItem } from '../../../../interfaces/sector-dto';
import { SectorsService } from '../../../../services/sectors/sectors.service';

@Component({
  selector: 'app-add-edit-news-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, TextareaModule, FormsModule],
  template: `
    <div class="p-fluid">
      <div class="row">
        <div class="col-lg-6 mb-3 d-flex align-items-center">
          <label for="title" class="form-label me-2">عنوان الخبر</label>
          <input pInputText id="title" [(ngModel)]="news.title" class="flex-fill" placeholder="عنوان الخبر" />
        </div>
        <div class="col-lg-6 mb-3 d-flex align-items-center">
          <label for="category" class="form-label me-2">التصنيف</label>
          <input pInputText id="category" [(ngModel)]="news.category" class="flex-fill" placeholder="تصنيف الخبر" />
        </div>
        <div class="col-lg-12 mb-3 d-flex align-items-center">
          <label for="summary" class="form-label me-2">الملخص</label>
          <textarea pInputTextarea id="summary" [(ngModel)]="news.summary" rows="2" class="flex-fill" placeholder="ملخص الخبر"></textarea>
        </div>
        <div class="col-lg-6 mb-3 d-flex align-items-center">
          <label for="date" class="form-label me-2">التاريخ</label>
          <input pInputText id="date" [(ngModel)]="news.date" class="flex-fill" placeholder="YYYY-MM-DD" />
        </div>
        <div class="col-lg-6 mb-3 d-flex align-items-center">
          <label for="image" class="form-label me-2">رابط الصورة</label>
          <input pInputText id="image" [(ngModel)]="news.image" class="flex-fill" placeholder="رابط الصورة" />
        </div>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-4">
        <button pButton type="button" label="إلغاء" class="p-button-secondary" (click)="onCancel()"></button>
        <button pButton type="button" label="حفظ" [disabled]="!news.title || !news.summary || !news.date || !news.category" (click)="onSave()"></button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AddEditNewsDialogComponent implements OnInit {
  news: NewsItem = { id: '', title: '', summary: '', date: '', image: '', category: '' };
  sectorId: string = '';
  sectorsService = inject(SectorsService);
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);

  ngOnInit() {
    this.sectorId = this.config.data.sectorId;
    if (this.config.data.news) {
      this.news = { ...this.config.data.news };
    }
  }

  onSave() {
    if (this.news.id) {
      // edit
      this.sectorsService.updateNews(this.sectorId, this.news).subscribe(() => {
        this.ref.close(true);
      });
    } else {
      // add
      this.sectorsService.addNews(this.sectorId, this.news).subscribe(() => {
        this.ref.close(true);
      });
    }
  }

  onCancel() {
    this.ref.close();
  }
}
