import { Component, inject, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { BaseListComponent } from '../../../../../base/components/base-list-component';

@Component({
  selector: 'app-sector-services',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends BaseListComponent {
  @Input() sectorId!: string;
  @Input() service: any; // Injected service for data operations
  @Input() tableColumns: any[] = []; // Configurable table columns
  @Input() addDialogComponent: any; // Component for add/edit dialog
  @Input() uiStrings: { addTitle: string; editTitle: string; nameHeader: string; descriptionHeader: string } = {
    addTitle: 'Add New Service',
    editTitle: 'Edit Service',
    nameHeader: 'Service Name',
    descriptionHeader: 'Service Description'
  }; // Configurable UI strings

  tableOptions!: TableOptions;
  override dialogService = inject(DialogService);
  override dialogRef: DynamicDialogRef | undefined = undefined;

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
        getAll: `services`,
        delete: `services`
      },
      inputCols: this.tableColumns.length > 0 ? this.tableColumns : [
        {
          field: 'name',
          header: this.uiStrings.nameHeader,
          filter: true,
          filterMode: 'text'
        },
        {
          field: 'description',
          header: this.uiStrings.descriptionHeader,
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
        componentName: 'SERVICES-MANAGEMENT',
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
      responsiveDisplayedProperties: ['name', 'description']
    };
  }

  override loadDataFromServer(): void {
    if (this.service && this.service.getServicesBySectorId) {
      this.service.getServicesBySectorId(+this.sectorId).subscribe({
        next: (services: any[]) => {
          this.data = services;
          this.totalCount = services.length;
        },
        error: (err: any) => {
          this.alert.error('Error getting Services From Server');
        }
      });
    }
  }

  openAdd() {
    if (this.addDialogComponent) {
      this.openDialog(
        this.addDialogComponent,
        this.uiStrings.addTitle,
        { sectorId: this.sectorId },
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
        { sectorId: this.sectorId, service: rowData },
        false
      );
      this.dialogRef?.onClose.subscribe((result: any) => {
        if (result) this.loadDataFromServer();
      });
    }
  }

  override handleEvent(event: any) {
    super.handleEvent(event);
    if (event?.eventType === 'delete' && this.service && this.service.deleteService) {
      this.service.deleteService(+this.sectorId, event.data).subscribe(() => {
        this.loadDataFromServer();
      });
    }
  }
}
