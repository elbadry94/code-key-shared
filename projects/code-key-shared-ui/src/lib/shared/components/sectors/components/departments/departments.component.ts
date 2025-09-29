import { Component, Input, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';

@Component({
  selector: 'app-sector-departments',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent, DialogModule, ButtonModule, InputTextModule, CheckboxModule, FormsModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class SectorDepartmentsComponent extends BaseListComponent {
  @Input() sectorId!: string;
  @Input() service: any; // Injected service for data operations
  @Input() tableColumns: any[] = []; // Configurable table columns
  @Input() addDialogComponent: any; // Component for add/edit dialog
  @Input() uiStrings: { addTitle: string; editTitle: string; nameHeader: string; overviewHeader: string; emailHeader: string } = {
    addTitle: 'Add New Department',
    editTitle: 'Edit Department',
    nameHeader: 'Department Name',
    overviewHeader: 'Overview',
    emailHeader: 'Email'
  }; // Configurable UI strings

  tableOptions!: TableOptions;
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
        getAll: `departments`,
        delete: `departments`
      },
      inputCols: this.tableColumns.length > 0 ? this.tableColumns : [
        {
          field: 'name',
          header: this.uiStrings.nameHeader,
          filter: true,
          filterMode: 'text'
        },
        {
          field: 'overview',
          header: this.uiStrings.overviewHeader,
          filter: true,
          filterMode: 'text'
        },
        {
          field: 'contact.email',
          header: this.uiStrings.emailHeader,
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
        componentName: 'DEPARTMENTS-MANAGEMENT',
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
      responsiveDisplayedProperties: ['name', 'overview', 'contact.email']
    };
  }

  override loadDataFromServer(): void {
    if (this.service && this.service.getDepartmentsBySectorId) {
      this.service.getDepartmentsBySectorId(+this.sectorId).subscribe({
        next: (departments: any[]) => {
          this.data = departments;
          this.totalCount = departments.length;
        },
        error: (err: any) => {
          this.alert.error('Error getting Departments From Server');
        }
      });
    }
  }

  openAdd() {
    if (this.addDialogComponent) {
      this.openDialog(
        this.addDialogComponent,
        this.uiStrings.addTitle,
        { sectorId: this.sectorId, department: null },
        false
      );
      this.dialogRef?.onClose.subscribe((result: any) => {
        if (result) this.loadDataFromServer();
      });
    }
  }

  openEdit(rowData: any) {
    if (this.addDialogComponent) {
      this.openDialog(
        this.addDialogComponent,
        this.uiStrings.editTitle,
        { sectorId: this.sectorId, department: rowData },
        false
      );
      this.dialogRef?.onClose.subscribe((result: any) => {
        if (result) this.loadDataFromServer();
      });
    }
  }

  override handleEvent(event: any) {
    super.handleEvent(event);
    if (event?.eventType === 'delete' && this.service && this.service.deleteDepartment) {
      this.service.deleteDepartment(+this.sectorId, event.data).subscribe(() => {
        this.loadDataFromServer();
      });
    }
  }
}
