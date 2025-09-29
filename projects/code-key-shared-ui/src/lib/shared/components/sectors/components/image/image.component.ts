import { Component, inject, Input } from '@angular/core';
import { AddEditSectorImageDialogComponent } from './add-edit-sector-image-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';
import { SectorsService } from '../../../../services/sectors/sectors.service';

@Component({
  selector: 'app-sector-image',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class SectorImageComponent extends BaseListComponent {
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
        getAll: `images`,
        delete: `images`
      },
      inputCols: [
        {
          field: 'imageUrl',
          header: 'رابط الصورة',
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
        componentName: 'IMAGE-MANAGEMENT',
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
      responsiveDisplayedProperties: ['imageUrl']
    };
  }

  openAdd() {
    this.openDialog(
      AddEditSectorImageDialogComponent,
      'إضافة صورة جديدة',
      { sectorId: this.sectorId },
      false
    );
  }

  openEdit(rowData: any) {
    this.openDialog(
      AddEditSectorImageDialogComponent,
      'تعديل صورة القطاع',
      { sectorId: this.sectorId, image: rowData },
      false
    );
  }
}
