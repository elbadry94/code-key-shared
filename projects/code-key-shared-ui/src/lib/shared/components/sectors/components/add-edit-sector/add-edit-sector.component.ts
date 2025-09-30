import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SectorsService } from '../../../../services/sectors/sectors.service';
import { SectorData } from '../../../../interfaces/sector-dto';


@Component({
  selector: 'app-add-edit-sector',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule, FileUploadModule],
  templateUrl: './add-edit-sector.component.html',
  styleUrl: './add-edit-sector.component.css'
})
export class AddEditSectorComponent implements OnInit {
  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);
  private sectorsService = inject(SectorsService);

  pageType: 'add' | 'edit' = 'add';
  sector: SectorData = {
    id: '',
    name: '',
    title: '',
    description: '',
    image: '',
    viceDean: {
      name: '',
      title: '',
      photo: '',
      email: '',
      office: ''
    },
    departments: [],
    services: [],
    news: [],
    media: [],
    statistics: [],
    activities: [],
    achievements: []
  };
  selectedImageFile?: File;
  selectedPhotoFile?: File;

  ngOnInit(): void {
    const data = this.config.data;
    this.pageType = data.pageType || 'add';
    if (this.pageType === 'edit' && data.rowData) {
      this.sector = { ...data.rowData };
    }
  }

  onImageSelect(event: any): void {
    this.selectedImageFile = event.files[0];
  }

  onPhotoSelect(event: any): void {
    this.selectedPhotoFile = event.files[0];
  }

  save(): void {
    // Handle file uploads if needed, assume service handles base64 or files
    if (this.selectedImageFile) {
      // TODO: Upload image and set sector.image to URL
      this.sector.image = URL.createObjectURL(this.selectedImageFile);
    }
    if (this.selectedPhotoFile) {
      // TODO: Upload photo and set viceDean.photo to URL
      this.sector.viceDean.photo = URL.createObjectURL(this.selectedPhotoFile);
    }

    if (this.pageType === 'add') {
      this.sectorsService.addSector(this.sector).subscribe({
        next: () => {
          this.ref.close(true);
        },
        error: (err) => {
          console.error('Error adding sector:', err);
          // Handle error, e.g., alert
        }
      });
    } else {
      this.sectorsService.updateSector(this.sector).subscribe({
        next: () => {
          this.ref.close(true);
        },
        error: (err) => {
          console.error('Error updating sector:', err);
        }
      });
    }
  }

  cancel(): void {
    this.ref.close();
  }
}
