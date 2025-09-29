import { Component, inject, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { AddEditMessageDialogComponent } from './add-edit-message-dialog.component';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';
import { SectorsService } from '../../../../services/sectors/sectors.service';

@Component({
  selector: 'app-sector-message',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class SectorMessageComponent extends BaseListComponent {
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
        getAll: `message`,
        delete: `message`
      },
      inputCols: [
        {
          field: 'message',
          header: 'الرسالة',
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
        componentName: 'MESSAGE-MANAGEMENT',
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
      responsiveDisplayedProperties: ['message']
    };
  }

  override loadDataFromServer(): void {
    this.service.getMessageBySectorId(+this.sectorId).subscribe({
      next: (message: string) => {
        this.data = [{ message }];
        this.totalCount = 1;
      },
      error: (err: any) => {
        this.alert.error('Error getting Message From Server');
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
      AddEditMessageDialogComponent,
      'إضافة رسالة جديدة',
      { sectorId: this.sectorId, message: { message: '' } },
      false
    );
  }

  openEdit(row: any) {
    this.openDialog(
      AddEditMessageDialogComponent,
      'تعديل الرسالة',
      { sectorId: this.sectorId, message: row },
      false
    );
  }
}
