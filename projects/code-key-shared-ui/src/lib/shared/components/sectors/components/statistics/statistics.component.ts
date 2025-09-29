import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { SectorsService } from '../../../../../shared/services/settings/sectors/sectors.service';
import { AddEditStatisticsDialogComponent } from './add-edit-statistics-dialog.component';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';
import { SectorStatistic } from '../../../../../pages/models/sector-dto';

@Component({
  selector: 'app-sector-statistics',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class SectorStatisticsComponent extends BaseListComponent {
  @Input() sectorId!: string;

  tableOptions!: TableOptions;
  override service = inject(SectorsService) as any;
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
        getAll: `statistics`,
        delete: `statistics`
      },
      inputCols: [
        {
          field: 'label',
          header: 'التسمية',
          filter: true
        },
        {
          field: 'value',
          header: 'القيمة',
          filter: true
        },
        {
          field: 'icon',
          header: 'الأيقونة',
          filter: true
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
        componentName: 'STATISTICS-MANAGEMENT',
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
      responsiveDisplayedProperties: ['label', 'value', 'icon']
    };
  }

  override loadDataFromServer(): void {
    this.service.getStatisticsBySectorId(+this.sectorId).subscribe({
      next: (stats: SectorStatistic[]) => {
        this.data = stats;
        this.totalCount = stats.length;
      },
      error: (err: any) => {
        this.alert.error('Error getting Statistics From Server');
      }
    });
  }

  openAdd() {
    this.openDialog(
      AddEditStatisticsDialogComponent,
      'إضافة إحصائية جديدة',
      { statistics: { label: '', value: '', icon: '' } },
      false
    );
  }

  openEdit(rowData: any) {
    this.openDialog(
      AddEditStatisticsDialogComponent,
      'تعديل الإحصائية',
      { statistics: { ...rowData } },
      false
    );
  }

  override handleEvent(event: any) {
    super.handleEvent(event);
    if (event?.eventType === 'delete') {
      this.service.deleteStatistic(+this.sectorId, event.data.id).subscribe(() => {
        this.loadDataFromServer();
      });
    } else if (event?.eventType === 'add') {
      this.service.addStatistic(+this.sectorId, event.data).subscribe(() => {
        this.loadDataFromServer();
      });
    } else if (event?.eventType === 'edit') {
      this.service.updateStatistic(+this.sectorId, event.data).subscribe(() => {
        this.loadDataFromServer();
      });
    }
  }
}
//
