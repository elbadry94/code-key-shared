 // ...existing code...

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../../../../core/services';
import { environment } from '../../../../../environments/environment';
import { SectorData, ViceDeanInfo, SectorDepartment, SectorService, NewsItem, MediaItem, SectorStatistic, ActivityItem, Achievement } from '../../../../pages/models/sector-dto';
import { UrlConfig } from '../../../../core/interface/http/UrlConfig';

@Injectable({
  providedIn: 'root'
})

export class SectorsService extends HttpService {
  protected get baseUrl(): string {
    return environment.HOST_API + 'v1/sectors/';
  }

  // Override postFilter to handle mock data for getPaged
  override postFilter<T, D>(URL_Config: UrlConfig, body: T): Observable<D> {
    if (URL_Config.apiName === 'getPaged') {
      return of({
        data: {
          data: this.staticSectors,
          totalCount: this.staticSectors.length
        },
        message: 'Success',
        status: 200,
        exception: null
      } as any);
    }
    return super.postFilter(URL_Config, body);
  }

  // Mock Data for Testing - Updated to SectorData structure
  private staticSectors: SectorData[] = [
    {
      id: '1',
      name: 'قطاع الخدمات الإلكترونية',
      title: 'الخدمات الإلكترونية',
      description: 'قطاع مسؤول عن تقديم الخدمات الإلكترونية للمواطنين.',
      image: '/assets/images/sector1.jpg',
      viceDean: {
        name: 'د. محمد أحمد',
        title: 'عميد القطاع',
        photo: '/assets/images/vice-dean1.jpg',
        email: 'mohamed@example.com',
        office: 'مكتب 101'
      },
      departments: [
        {
          id: '1',
          name: 'إدارة الدعم الفني',
          overview: 'إدارة تقدم الدعم الفني للخدمات الإلكترونية.',
          responsibilities: ['صيانة النظم', 'دعم المستخدمين', 'تطوير البرمجيات'],
          contact: {
            email: 'support@sector1.com',
            office: 'مبنى A',
            phone: '123456'
          }
        },
        {
          id: '2',
          name: 'إدارة التطوير',
          overview: 'إدارة مسؤولة عن تطوير الخدمات الجديدة.',
          responsibilities: ['تصميم التطبيقات', 'اختبار الجودة', 'نشر التحديثات'],
          contact: {
            email: 'dev@sector1.com',
            office: 'مبنى B'
          }
        }
      ],
      services: [
        {
          id: '1',
          name: 'خدمة استخراج شهادة',
          description: 'استخراج شهادة إلكترونية.',
          steps: ['تقديم الطلب', 'التحقق', 'الإصدار'],
          requiredDocuments: ['الهوية', 'الطلب المكتوب'],
          downloadableForms: ['form1.pdf']
        },
        {
          id: '2',
          name: 'خدمة دفع الفواتير',
          description: 'دفع الفواتير الحكومية.',
          steps: ['اختيار الفاتورة', 'إدخال البيانات', 'التأكيد'],
          requiredDocuments: ['رقم الفاتورة']
        }
      ],
      news: [
        {
          id: '1',
          title: 'إطلاق خدمة جديدة',
          summary: 'تم إطلاق خدمة استخراج الشهادات الإلكترونية.',
          date: '2024-01-15',
          image: '/assets/images/news1.jpg',
          category: 'إعلان'
        }
      ],
      media: [
        {
          id: '1',
          title: 'صورة افتتاحية',
          type: 'photo',
          url: '/assets/images/media1.jpg',
          thumbnail: '/assets/images/thumb1.jpg',
          description: 'صورة من الافتتاح',
          date: '2024-01-10'
        }
      ],
      statistics: [
        {
          id: '1',
          label: 'عدد الخدمات',
          value: '50+',
          icon: 'pi pi-cog'
        },
        {
          id: '2',
          label: 'عدد المستخدمين',
          value: '10000+',
          icon: 'pi pi-users'
        }
      ],
      activities: [
        {
          id: '1',
          title: 'ورشة عمل',
          description: 'ورشة عمل حول الخدمات الإلكترونية.',
          date: '2024-02-20',
          image: '/assets/images/activity1.jpg',
          type: 'تدريب'
        }
      ],
      achievements: [
        {
          id: '1',
          title: 'جائزة الابتكار',
          description: 'حصل القطاع على جائزة الابتكار في الخدمات.',
          date: '2023-12-01',
          image: '/assets/images/achievement1.jpg'
        }
      ]
    },
    {
      id: '2',
      name: 'قطاع الشؤون المالية',
      title: 'الشؤون المالية',
      description: 'قطاع مسؤول عن إدارة الشؤون المالية.',
      image: '/assets/images/sector2.jpg',
      viceDean: {
        name: 'د. فاطمة علي',
        title: 'عميدة القطاع',
        photo: '/assets/images/vice-dean2.jpg',
        email: 'fatima@example.com',
        office: 'مكتب 201'
      },
      departments: [
        {
          id: '1',
          name: 'إدارة الحسابات',
          overview: 'إدارة مسؤولة عن الحسابات المالية.',
          responsibilities: ['تسجيل العمليات', 'إعداد التقارير', 'التدقيق'],
          contact: {
            email: 'accounts@sector2.com',
            office: 'مبنى C',
            phone: '789012'
          }
        }
      ],
      services: [
        {
          id: '1',
          name: 'خدمة صرف الرواتب',
          description: 'صرف رواتب الموظفين.',
          steps: ['التحقق من البيانات', 'الموافقة', 'الصرف'],
          requiredDocuments: ['كشف الراتب']
        }
      ],
      news: [
        {
          id: '1',
          title: 'تحديث في نظام الرواتب',
          summary: 'تم تحديث نظام صرف الرواتب.',
          date: '2024-01-20',
          image: '/assets/images/news2.jpg',
          category: 'تحديث'
        }
      ],
      media: [
        {
          id: '1',
          title: 'فيديو توضيحي',
          type: 'video',
          url: '/assets/videos/media2.mp4',
          description: 'فيديو عن الإجراءات المالية.',
          date: '2024-01-05'
        }
      ],
      statistics: [
        {
          id: '1',
          label: 'الميزانية السنوية',
          value: '500 مليون',
          icon: 'pi pi-money-bill'
        }
      ],
      activities: [
        {
          id: '1',
          title: 'ندوة مالية',
          description: 'ندوة حول الإدارة المالية.',
          date: '2024-03-10',
          type: 'ندوة'
        }
      ],
      achievements: [
        {
          id: '1',
          title: 'شهادة الامتثال',
          description: 'حصل القطاع على شهادة الامتثال المالي.',
          date: '2023-11-15'
        }
      ]
    }
  ];

  // Services CRUD
  getServicesBySectorId(sectorId: string): Observable<any[]> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
  return of(sector?.services || []);
  }

  addService(sectorId: string, service: any): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector) {
  if (!sector.services) sector.services = [];
  const newId = ((sector.services.length || 0) + 1).toString();
  const newService = { id: newId, ...service };
  sector.services.push(newService);
  return of(newService);
    }
    return of(null);
  }

  updateService(sectorId: string, service: any): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.services) {
      const idx = sector.services.findIndex((s: any) => s.id === service.id);
      if (idx > -1) {
        sector.services[idx] = service;
        return of(service);
      }
    }
    return of(null);
  }

  deleteService(sectorId: string, serviceId: string): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.services) {
      sector.services = sector.services.filter((s: any) => s.id !== serviceId);
      return of({ success: true });
    }
    return of({ success: false });
  }

  // Departments CRUD
  getDepartmentsBySectorId(sectorId: string): Observable<any[]> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
  return of(sector?.departments || []);
  }

  addDepartment(sectorId: string, department: SectorDepartment): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector) {
  if (!sector.departments) sector.departments = [];
  const newId = ((sector.departments.length || 0) + 1).toString();
  const newDepartment = { ...department, id: newId };
  sector.departments.push(newDepartment);
  return of(newDepartment);
    }
    return of(null);
  }

  updateDepartment(sectorId: string, department: SectorDepartment): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.departments) {
      const idx = sector.departments.findIndex((d: any) => d.id === department.id);
      if (idx > -1) {
  sector.departments[idx] = department;
  return of(sector.departments[idx]);
      }
    }
    return of(null);
  }

  deleteDepartment(sectorId: string, departmentId: string): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.departments) {
      sector.departments = sector.departments.filter((d: any) => d.id !== departmentId);
      return of({ success: true });
    }
    return of({ success: false });
  }

  // News CRUD
  getNewsBySectorId(sectorId: string): Observable<any[]> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
  return of(sector?.news || []);
  }

  addNews(sectorId: string, newsItem: NewsItem): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector) {
  if (!sector.news) sector.news = [];
  const newId = ((sector.news.length || 0) + 1).toString();
  const newNews = { ...newsItem, id: newId };
  sector.news.push(newNews);
  return of(newNews);
    }
    return of(null);
  }

  updateNews(sectorId: string, newsItem: NewsItem): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.news) {
      const idx = sector.news.findIndex((n: any) => n.id === newsItem.id);
      if (idx > -1) {
  sector.news[idx] = newsItem;
  return of(sector.news[idx]);
      }
    }
    return of(null);
  }

  deleteNews(sectorId: string, newsId: string): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.news) {
      sector.news = sector.news.filter((n: any) => n.id !== newsId);
      return of({ success: true });
    }
    return of({ success: false });
  }

  // About CRUD (single text)
  getAboutBySectorId(sectorId: string): Observable<string> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
  return of(sector?.description || '');
  }

  updateAbout(sectorId: string, about: string): Observable<string> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector) {
      sector.description = about;
      return of(about);
    }
    return of('');
  }

  // Image CRUD (single image path)
  getImageBySectorId(sectorId: string): Observable<string> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
  return of(sector?.media?.[0]?.url || '');
  }

  updateImage(sectorId: string, imagePath: string): Observable<string> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.media && sector.media[0]) {
      sector.media[0].url = imagePath;
      return of(imagePath);
    }
    return of('');
  }

  // Statistics CRUD
  getStatisticsBySectorId(sectorId: string): Observable<SectorStatistic[]> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    return of(sector?.statistics || []);
  }

  addStatistic(sectorId: string, statistic: SectorStatistic): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector) {
      if (!sector.statistics) sector.statistics = [];
      const newId = ((sector.statistics.length || 0) + 1).toString();
      const newStatistic = { ...statistic, id: newId };
      sector.statistics.push(newStatistic);
      return of(newStatistic);
    }
    return of(null);
  }

  updateStatistic(sectorId: string, statistic: SectorStatistic): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.statistics) {
      const idx = sector.statistics.findIndex((s: any) => s.id === statistic.id);
      if (idx > -1) {
        sector.statistics[idx] = statistic;
        return of(sector.statistics[idx]);
      }
    }
    return of(null);
  }

  deleteStatistic(sectorId: string, statisticId: string): Observable<any> {
    const sector = this.staticSectors.find(s => s.id === sectorId);
    if (sector && sector.statistics) {
      sector.statistics = sector.statistics.filter((s: any) => s.id !== statisticId);
      return of({ success: true });
    }
    return of({ success: false });
  }

  // Manager Word CRUD (single text)
  getManagerWordBySectorId(sectorId: string): Observable<string> {
    // Not in DTO, return empty
    return of('');
  }

  updateManagerWord(sectorId: string, word: string): Observable<string> {
    // Not in DTO, return empty
    return of('');
  }

  // Message CRUD (single text)
  getMessageBySectorId(sectorId: string): Observable<string> {
    // Not in DTO, return empty
    return of('');
  }

  updateMessage(sectorId: string, message: string): Observable<string> {
    // Not in DTO, return empty
    return of('');
  }

  // Vision CRUD (single text)
  getVisionBySectorId(sectorId: string): Observable<string> {
    // Not in DTO, return empty
    return of('');
  }

  updateVision(sectorId: string, vision: string): Observable<string> {
    // Not in DTO, return empty
    return of('');
  }

  getStaticSectors(): Observable<SectorData[]> {
    return of(this.staticSectors);
  }



  // MOCK ENABLED: استخدم بيانات الموك مؤقتاً
  getAllSectors(): Observable<SectorData[]> {
    return of(this.staticSectors);
  }

  // Example methods (customize as needed)

  getSectorById(id: string): Observable<SectorData | undefined> {
    return of(this.staticSectors.find(s => s.id === id));
  }


  addSector(body: SectorData): Observable<SectorData> {
    this.staticSectors.push({ ...body, id: (this.staticSectors.length + 1).toString() });
    return of(body);
  }


  updateSector(body: SectorData): Observable<SectorData | undefined> {
    const idx = this.staticSectors.findIndex(s => s.id === body.id);
    if (idx > -1) {
      this.staticSectors[idx] = { ...this.staticSectors[idx], ...body };
      return of(this.staticSectors[idx]);
    }
    return of(undefined);
  }

  remove(id: string): Observable<any> {
    return this.delete({ apiName: `delete/`, showAlert: true }, id);
  }
}
