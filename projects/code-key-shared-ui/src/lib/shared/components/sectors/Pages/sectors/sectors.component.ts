 
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SectorsService } from '../../../../../shared/services/settings/sectors/sectors.service';
import { TableOptions } from '../../../../../shared/interfaces';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { PTitleToolbarComponent } from "../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component";
import { PrimeDataTableComponent } from "../../../../../shared/components/primeng/p-datatable/p-datatable.component";
import { DataTableService } from '../../../../../shared/services/table/datatable.service';
import { HttpService } from '../../../../../core/services/http/http.service';
import { AddEditSectorComponent } from '../../components/add-edit-sector/add-edit-sector.component';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [
  RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent
  ],
  templateUrl:'./sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent extends BaseListComponent {
  @Input() apiConfig: { getPaged: string; delete: string } = {
    getPaged: 'getPaged',
    delete: 'deletesoft'
  };

  isEnglish = false;
  tableOptions!: TableOptions;
  private _service = inject(SectorsService);
  override dataTableService = inject(DataTableService);

  override get service(): HttpService {
    return this._service;
  }

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
        getAll: `v1/sectors/${this.apiConfig.getPaged}`,
        delete: `v1/sectors/${this.apiConfig.delete}`
      },
      inputCols: this.initializeTableColumns(),
      inputActions: this.initializeTableActions(),
      permissions: {
        componentName: 'SECTORS-MANAGEMENT',
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
      responsiveDisplayedProperties: ['name', 'subTitle']
    };
  }

  initializeTableColumns(): TableOptions['inputCols'] {
    return [
      {
        field: 'name',
        header: 'اسم القطاع',
        filter: true,
        filterMode: 'text'
      },
      {
        field: 'subTitle',
        header: 'وصف القطاع',
        filter: true,
        filterMode: 'text'
      }
    ];
  }

  initializeTableActions(): TableOptions['inputActions'] {
    return [
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
      },
      {
        name: 'Details',
        icon: 'pi pi-info-circle',
        color: 'text-middle',
        isCallBack: true,
        call: () => {
          this.route.navigate(['features'], { relativeTo: this.activatedRoute });
        },
        allowAll: true
      }
    ];
  }

  override loadDataFromServer(): void {
    this._service.getAllSectors().subscribe({
      next: (sectors) => {
        this.data = sectors;
        this.totalCount = sectors.length;
      },
      error: (error: any) => {
        console.error('Error loading sectors:', error);
        this.alert.error('خطأ في جلب القطاعات');
      }
    });
  }

  override handleEvent(event: any) {
    if (event.eventType === 'delete') {
      this._service.remove(event.data).subscribe({
        next: () => {
          this.alert.success('تم حذف القطاع بنجاح');
          this.loadDataFromServer();
        },
        error: (error: any) => {
          console.error('Error deleting sector:', error);
          this.alert.error('خطأ في حذف القطاع');
        }
      });
    }
  }

  openAdd() {
    this.openDialog(AddEditSectorComponent, 'إضافة قطاع جديد', {
      pageType: 'add'
    });
  }

  openEdit(rowData: any) {
    this.openDialog(AddEditSectorComponent, 'تعديل القطاع', {
      pageType: 'edit',
      rowData
    });
  }

  override ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
