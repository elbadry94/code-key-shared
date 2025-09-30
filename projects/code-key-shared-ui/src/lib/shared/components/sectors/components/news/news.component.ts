import { Component, inject, Input } from '@angular/core';
import { AddEditNewsDialogComponent } from './add-edit-news-dialog.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableOptions } from '../../../../../shared/interfaces';
import { BaseListComponent } from '../../../../../base/components/base-list-component';
import { PTitleToolbarComponent } from '../../../../../shared/components/primeng/p-title-toolbar/p-title-toolbar.component';
import { PrimeDataTableComponent } from '../../../../../shared/components/primeng/p-datatable/p-datatable.component';
import { DataTableService } from '../../../../../shared/services/table/datatable.service';
import { NewsItem } from '../../../../interfaces/sector-dto';
import { SectorsService } from '../../../../services/sectors/sectors.service';

@Component({
  selector: 'app-sector-news',
  standalone: true,
  imports: [RouterModule, CardModule, PTitleToolbarComponent, PrimeDataTableComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class SectorNewsComponent extends BaseListComponent {
  @Input() sectorId!: string;

  override data: NewsItem[] = [];
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
        getAll: `news`,
        delete: `news`
      },
      inputCols: [
        {
          field: 'title',
          header: 'عنوان الخبر',
          filter: true,
          filterMode: 'text'
        },
        {
          field: 'summary',
          header: 'ملخص الخبر',
          filter: true,
          filterMode: 'text'
        },
        {
          field: 'date',
          header: 'التاريخ',
          filter: true,
          filterMode: 'text'
        },
        {
          field: 'category',
          header: 'التصنيف',
          filter: true,
          filterMode: 'text'
        }
      ],
      inputActions: [
        {
          name: 'Details',
          icon: 'pi pi-eye',
          color: 'text-info',
          isCallBack: true,
          call: (row: NewsItem) => {
            this.onShowDetails(row);
          },
          allowAll: true
        },
        {
          name: 'Edit',
          icon: 'pi pi-file-edit',
          color: 'text-middle',
          isCallBack: true,
          call: (row: NewsItem) => {
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
        componentName: 'NEWS-MANAGEMENT',
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
      responsiveDisplayedProperties: ['title', 'summary', 'date', 'category']
    };
  }

  override loadDataFromServer(): void {
    this.service.getNewsBySectorId(+this.sectorId).subscribe({
      next: (news: NewsItem[]) => {
        this.data = news;
        this.totalCount = news.length;
      },
      error: (err: any) => {
        this.alert.error('Error getting News From Server');
      }
    });
  }

  openAdd() {
    this.openDialog(
      AddEditNewsDialogComponent,
      'إضافة خبر جديد',
      { sectorId: this.sectorId, news: { id: '', title: '', summary: '', date: '', image: '', category: '' } as NewsItem },
      false
    );
    this.dialogRef?.onClose.subscribe((result: any) => {
      if (result) this.loadDataFromServer();
    });
  }

  openEdit(rowData: NewsItem) {
    this.openDialog(
      AddEditNewsDialogComponent,
      'تعديل الخبر',
      { sectorId: this.sectorId, news: { ...rowData } },
      false
    );
    this.dialogRef?.onClose.subscribe((result: any) => {
      if (result) this.loadDataFromServer();
    });
  }

  onShowDetails(row: NewsItem) {
    // هنا يمكنك فتح ديالوج تفاصيل أو توجيه لصفحة تفاصيل الخبر
    alert(`تفاصيل الخبر:\nالعنوان: ${row.title}\nالملخص: ${row.summary}\nالتاريخ: ${row.date}\nالتصنيف: ${row.category}`);
  }

  override handleEvent(event: any) {
    super.handleEvent(event);
    if (event?.eventType === 'delete') {
      this.service.deleteNews(+this.sectorId, event.data).subscribe(() => {
        this.loadDataFromServer();
      });
    }
  }
}
