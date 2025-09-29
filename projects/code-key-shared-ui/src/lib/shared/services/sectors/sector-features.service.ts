import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SectorFeaturesService {
  constructor(private http: HttpClient) {}

  // Mock Data for Testing
  private staticServices = [
    { id: '1', name: 'خدمة 1', description: 'وصف الخدمة 1' },
    { id: '2', name: 'خدمة 2', description: 'وصف الخدمة 2' }
  ];
  private staticDepartments = [
    { id: '1', name: 'إدارة الموارد البشرية', manager: 'أحمد علي' },
    { id: '2', name: 'إدارة المالية', manager: 'سارة محمد' }
  ];
  private staticNews = [
    { id: '1', title: 'خبر 1', content: 'تفاصيل الخبر 1', date: '2025-09-27' },
    { id: '2', title: 'خبر 2', content: 'تفاصيل الخبر 2', date: '2025-09-20' }
  ];
  private staticAbout = { id: '1', description: 'عن القطاع: هذا القطاع مسؤول عن ...' };
  private staticImage = { id: '1', url: 'assets/img/sectors/sector1.jpg' };
  private staticStatistics = { id: '1', employees: 120, projects: 15 };
  private staticManagerWord = { id: '1', text: 'كلمة المدير: نعمل من أجل التميز ...' };
  private staticMessage = { id: '1', text: 'رسالة القطاع: تقديم أفضل الخدمات ...' };
  private staticVision = { id: '1', text: 'رؤية القطاع: الريادة في ...' };

  // Static data methods for testing
  getStaticServices(): Observable<any[]> {
    return of(this.staticServices);
  }
  getStaticDepartments(): Observable<any[]> {
    return of(this.staticDepartments);
  }
  getStaticNews(): Observable<any[]> {
    return of(this.staticNews);
  }
  getStaticAbout(): Observable<any> {
    return of(this.staticAbout);
  }
  getStaticImage(): Observable<any> {
    return of(this.staticImage);
  }
  getStaticStatistics(): Observable<any> {
    return of(this.staticStatistics);
  }
  getStaticManagerWord(): Observable<any> {
    return of(this.staticManagerWord);
  }
  getStaticMessage(): Observable<any> {
    return of(this.staticMessage);
  }
  getStaticVision(): Observable<any> {
    return of(this.staticVision);
  }

  // الخدمات
  getServices(sectorId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/sectors/${sectorId}/services`);
  }
  addService(sectorId: string, data: any): Observable<any> {
    return this.http.post(`/api/sectors/${sectorId}/services`, data);
  }
  updateService(sectorId: string, serviceId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/services/${serviceId}`, data);
  }
  deleteService(sectorId: string, serviceId: string): Observable<any> {
    return this.http.delete(`/api/sectors/${sectorId}/services/${serviceId}`);
  }

  // الإدارات
  getDepartments(sectorId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/sectors/${sectorId}/departments`);
  }
  addDepartment(sectorId: string, data: any): Observable<any> {
    return this.http.post(`/api/sectors/${sectorId}/departments`, data);
  }
  updateDepartment(sectorId: string, departmentId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/departments/${departmentId}`, data);
  }
  deleteDepartment(sectorId: string, departmentId: string): Observable<any> {
    return this.http.delete(`/api/sectors/${sectorId}/departments/${departmentId}`);
  }

  // الأخبار
  getNews(sectorId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/sectors/${sectorId}/news`);
  }
  addNews(sectorId: string, data: any): Observable<any> {
    return this.http.post(`/api/sectors/${sectorId}/news`, data);
  }
  updateNews(sectorId: string, newsId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/news/${newsId}`, data);
  }
  deleteNews(sectorId: string, newsId: string): Observable<any> {
    return this.http.delete(`/api/sectors/${sectorId}/news/${newsId}`);
  }

  // عن القطاع
  getAbout(sectorId: string): Observable<any> {
    return this.http.get(`/api/sectors/${sectorId}/about`);
  }
  updateAbout(sectorId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/about`, data);
  }

  // صورة القطاع
  getImage(sectorId: string): Observable<any> {
    return this.http.get(`/api/sectors/${sectorId}/image`);
  }
  updateImage(sectorId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/image`, data);
  }

  // إحصائيات القطاع
  getStatistics(sectorId: string): Observable<any> {
    return this.http.get(`/api/sectors/${sectorId}/statistics`);
  }
  updateStatistics(sectorId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/statistics`, data);
  }

  // كلمة المدير
  getManagerWord(sectorId: string): Observable<any> {
    return this.http.get(`/api/sectors/${sectorId}/manager-word`);
  }
  updateManagerWord(sectorId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/manager-word`, data);
  }

  // رسالة القطاع
  getMessage(sectorId: string): Observable<any> {
    return this.http.get(`/api/sectors/${sectorId}/message`);
  }
  updateMessage(sectorId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/message`, data);
  }

  // رؤية القطاع
  getVision(sectorId: string): Observable<any> {
    return this.http.get(`/api/sectors/${sectorId}/vision`);
  }
  updateVision(sectorId: string, data: any): Observable<any> {
    return this.http.put(`/api/sectors/${sectorId}/vision`, data);
  }
}
