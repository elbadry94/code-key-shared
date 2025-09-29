import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { Component, Input, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { AddEditManagerWordDialogComponent } from './add-edit-manager-word-dialog.component';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';
import { SectorsService } from '../../../../services/sectors/sectors.service';

@Component({
  selector: 'app-sector-manager-word',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent, DialogModule, ButtonModule, InputTextModule, CheckboxModule, FormsModule],
  templateUrl: './manager-word.component.html',
  styleUrls: ['./manager-word.component.css']
})
export class SectorManagerWordComponent extends BaseListComponent {
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
        getAll: `manager-words`,
        delete: `manager-words`
      },
      inputCols: [
        {
          field: 'managerWord',
          header: 'كلمة المدير',
          filter: true,
          filterMode: 'text'
        },
        {
          field: 'date',
          header: 'التاريخ',
          filter: true,
          filterMode: 'text'
        }
      ],
      inputActions: [
        {
          name: 'Edit',
          icon: 'pi pi-file-edit',
          color: 'text-middle',
          isCallBack: true,
          call: (row: any) => {
            this.openEdit(row);
          },
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
        componentName: 'MANAGER-WORD-MANAGEMENT',
        allowAll: true,
        listOfPermissions: []
      },
      bodyOptions: {
        pageNumber: 1,
        pageSize: 10,
        orderByValue: [{ colId: 'id', sort: 'asc' }],
        filter: {}
      },
      appId: 1,
      responsiveDisplayedProperties: ['managerWord', 'date']
    };
  }

  override loadDataFromServer(): void {
    this.service.getManagerWordsBySectorId(+this.sectorId).subscribe({
      next: (items: any[]) => {
        this.data = items;
        this.totalCount = items.length;
      },
      error: (err: any) => {
        this.alert.error('Error getting Manager Words From Server');
      }
    });
  }

  openAdd() {
    this.openDialog(
      AddEditManagerWordDialogComponent,
      'إضافة كلمة مدير جديدة',
      { sectorId: this.sectorId, managerWord: { managerWord: '', date: '' } },
      false
    );
  }

  openEdit(rowData: any) {
    this.openDialog(
      AddEditManagerWordDialogComponent,
      'تعديل كلمة المدير',
      { sectorId: this.sectorId, managerWord: rowData },
      false
    );
  }

  override handleEvent(event: any) {
    super.handleEvent(event);
    if (event?.eventType === 'delete') {
      this.service.deleteManagerWord(+this.sectorId, event.data).subscribe(() => {
        this.loadDataFromServer();
      });
    }
  }
}
