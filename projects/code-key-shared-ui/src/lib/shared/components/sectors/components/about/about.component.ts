import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';

@Component({
  selector: 'app-sector-about',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class SectorAboutComponent extends BaseListComponent {
  @Input() sectorId!: string;
  @Input() service: any; // Injected service for data operations
  @Input() tableColumns: any[] = []; // Configurable table columns
  @Input() addDialogComponent: any; // Component for add/edit dialog
  @Input() uiStrings: { addTitle: string; editTitle: string; descriptionHeader: string } = {
    addTitle: 'Add New About',
    editTitle: 'Edit About',
    descriptionHeader: 'Description'
  }; // Configurable UI strings

  tableOptions!: TableOptions;
  override dataTableService = inject(DataTableService);

  constructor() {
    super(inject(ActivatedRoute));
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initializeTableOptions();
    this.loadDataFromServer();
  }

  initializeTableOptions() {
    this.tableOptions = {
      inputUrl: {
        getAll: `about`,
        delete: `about`
      },
      inputCols: this.tableColumns.length > 0 ? this.tableColumns : [
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
        componentName: 'ABOUT-MANAGEMENT',
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
      responsiveDisplayedProperties: ['description']
    };
  }

  override loadDataFromServer(): void {
    if (this.service && this.service.getAboutListBySectorId) {
      this.service.getAboutListBySectorId(+this.sectorId).subscribe({
        next: (items: any[]) => {
          this.data = items;
          this.totalCount = items.length;
        },
        error: (err: any) => {
          this.alert.error('Error getting About List From Server');
        }
      });
    }
  }

  openAdd() {
    if (this.addDialogComponent) {
      this.openDialog(
        this.addDialogComponent,
        this.uiStrings.addTitle,
        { about: { description: '' } },
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
        { about: { ...rowData } },
        false
      );
      this.dialogRef?.onClose.subscribe((result: any) => {
        if (result) this.loadDataFromServer();
      });
    }
  }

  override handleEvent(event: any) {
    super.handleEvent(event);
    if (event?.type === 'delete' && this.service && this.service.deleteAbout) {
      this.service.deleteAbout(+this.sectorId, event.data).subscribe(() => {
        this.loadDataFromServer();
      });
    }
  }
}
