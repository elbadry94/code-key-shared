import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';
import { SectorService } from '../../../../interfaces/sector-dto';
import { SectorsService } from '../../../../services/sectors/sectors.service';

@Component({
  selector: 'app-add-edit-sector-service',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, CheckboxModule, FormsModule],
  templateUrl: './add-edit-sector-service.component.html',
  styleUrls: ['./add-edit-sector-service.component.css']
})
export class AddEditSectorServiceComponent implements OnInit {
  service: SectorService = {} as SectorService;
  sectorId: string = '';

  sectorsService = inject(SectorsService);
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);

  ngOnInit() {
    this.sectorId = this.config.data.sectorId;
    if (this.config.data.service) {
      this.service = { ...this.config.data.service };
    } else {
      this.service = {
        id: '',
        name: '',
        description: '',
        steps: [],
        requiredDocuments: [],
      };
    }
  }

  onSave() {
    if (this.service.id) {
      // edit
  this.sectorsService.updateService(this.sectorId, this.service).subscribe(() => {
        this.ref.close();
      });
    } else {
      // add
  this.sectorsService.addService(this.sectorId, this.service).subscribe(() => {
        this.ref.close();
      });
    }
  }

  onCancel() {
    this.ref.close();
  }
}
