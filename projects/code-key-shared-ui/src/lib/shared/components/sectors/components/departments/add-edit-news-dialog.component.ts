import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-news-dialog',
  templateUrl: './add-edit-news-dialog.component.html',
  standalone: true,
  imports: [FormsModule, ButtonModule],
})
export class AddEditNewsDialogComponent {
  @Input() news: any = { title: '', summary: '', date: '', image: '', category: '' };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  dialogRef = inject(DynamicDialogRef);

  onSave() {
    this.save.emit(this.news);
    this.dialogRef.close(this.news);
  }

  onCancel() {
    this.cancel.emit();
    this.dialogRef.close();
  }
}
