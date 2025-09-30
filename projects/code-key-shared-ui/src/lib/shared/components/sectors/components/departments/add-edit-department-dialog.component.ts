import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-edit-department-dialog',
  templateUrl: './add-edit-department-dialog.component.html',
  standalone: true,
  imports: [FormsModule, ButtonModule],
})
export class AddEditDepartmentDialogComponent {
  @Input() department: any = { name: '', manager: '' };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  dialogRef = inject(DynamicDialogRef);

  onSave() {
    this.save.emit(this.department);
    this.dialogRef.close(this.department);
  }

  onCancel() {
    this.cancel.emit();
    this.dialogRef.close();
  }
}
