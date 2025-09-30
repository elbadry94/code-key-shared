import { Component, inject, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { SectorsService } from '../../../../../shared/services/settings/sectors/sectors.service';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { AddEditVisionDialogComponent } from './add-edit-vision-dialog.component';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';

@Component({
  selector: 'app-sector-vision',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class SectorVisionComponent extends BaseListComponent {
  @Input() sectorId!: string;

  tableOptions!: TableOptions;
  override service = inject(SectorsService) as any;
  override dialogService = inject(DialogService);
  override dialogRef: DynamicDialogRef | undefined = undefined;
override dataTableService = inject(DataTableService);

  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }


  override ngOnInit(): void {
    super.ngOnInit();
    this.initializeTableOptions();
    this.loadDataFromServer();
  }

  initializeTableOptions() {
    this.tableOptions = {
      inputUrl: {
        getAll: `vision`,
        delete: `vision`
      },
      inputCols: [
        {
          field: 'vision',
          header: 'الرؤية',
          filter: true,
          filterMode: 'text'
        }
      ],
      inputActions: [
        {
          name: 'Edit',
          icon: 'pi pi-pencil',
          isCallBack: true,
          call: (row: any) => this.openEdit(row),
          allowAll: true
        },
        {
          name: 'DELETE',
          icon: 'pi pi-trash',
          color: 'text-error',
          allowAll: true,
          isDelete: true
        }
      ],
      permissions: {
        componentName: 'VISION-MANAGEMENT',
        allowAll: true,
        listOfPermissions: []
      },
      bodyOptions: {
        pageNumber: 1,
        pageSize: 10,
        orderByValue: [{ colId: 'id', sort: 'asc' }],
        filter: {}
      },
      appId: 0,
      responsiveDisplayedProperties: ['vision']
    };
  }

  override loadDataFromServer(): void {
    this.service.getVisionBySectorId(+this.sectorId).subscribe({
      next: (vision: string) => {
        this.data = [{ vision }];
        this.totalCount = 1;
      },
      error: (err: any) => {
        this.alert.error('Error getting Vision From Server');
      }
    });
  }

  override handleEvent(event: any) {
    super.handleEvent(event);
    if (event?.eventType === 'delete') {
      // ضع هنا منطق الحذف إذا كان هناك API خاص
      this.loadDataFromServer();
    }
  }

  openAdd() {
    this.openDialog(
      AddEditVisionDialogComponent,
      'إضافة رؤية جديدة',
      { sectorId: this.sectorId, vision: { vision: '' } },
      false
    );
  }

  openEdit(row: any) {
    this.openDialog(
      AddEditVisionDialogComponent,
      'تعديل الرؤية',
      { sectorId: this.sectorId, vision: row },
      false
    );
  }
}
