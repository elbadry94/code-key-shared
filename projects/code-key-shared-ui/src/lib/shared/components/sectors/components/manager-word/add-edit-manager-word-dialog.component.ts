import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-manager-word-dialog',
  templateUrl: './add-edit-manager-word-dialog.component.html',
  standalone: true,
  imports: [FormsModule, ButtonModule],
})
export class AddEditManagerWordDialogComponent {
  @Input() managerWord: any = { managerWord: '', date: '' };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  dialogRef = inject(DynamicDialogRef);

  onSave() {
    this.save.emit(this.managerWord);
    this.dialogRef.close(this.managerWord);
  }

  onCancel() {
    this.cancel.emit();
    this.dialogRef.close();
  }
}
