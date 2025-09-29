import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-sector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-sector.component.html',
  styleUrl: './add-sector.component.css'
})
export class AddSectorComponent {
  @Input() formFields: { name: string; label: string; required: boolean }[] = [
    { name: 'name', label: 'Name', required: true },
    { name: 'subTitle', label: 'Subtitle', required: true }
  ]; // Configurable form fields
  @Input() submitButtonText: string = 'Submit'; // Configurable submit button text
  @Output() submitForm = new EventEmitter<any>(); // Generic submit event

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    const formGroup: any = {};
    this.formFields.forEach(field => {
      formGroup[field.name] = [field.required ? ['', Validators.required] : ''];
    });
    this.form = this.fb.group(formGroup);
  }

  submit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
}
