import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { BaseComponent } from '../../../../../base/components/base-component';
import { ServicesComponent } from '../services/services.component';
import { SectorDepartmentsComponent } from '../departments/departments.component';
import { SectorNewsComponent } from '../news/news.component';
import { SectorAboutComponent } from '../about/about.component';
import { SectorImageComponent } from '../image/image.component';
import { SectorStatisticsComponent } from '../statistics/statistics.component';
import { SectorManagerWordComponent } from '../manager-word/manager-word.component';
import { SectorMessageComponent } from '../message/message.component';
import { SectorVisionComponent } from '../vision/vision.component';
import { Observable } from 'rxjs';
import { SectorData } from '../../../../interfaces/sector-dto';
import { SectorsService } from '../../../../services/sectors/sectors.service';

@Component({
    selector: 'app-add-sector-features',
    standalone: true,
    imports: [RouterModule, CardModule, TabsModule, SelectModule, FormsModule, AsyncPipe, ServicesComponent, SectorDepartmentsComponent, SectorNewsComponent, SectorAboutComponent, SectorImageComponent, SectorStatisticsComponent, SectorManagerWordComponent, SectorMessageComponent, SectorVisionComponent],
    templateUrl: './add-sector-features.component.html',
    styleUrl: './add-sector-features.component.css'
})
export class AddSectorFeaturesComponent extends BaseComponent implements OnInit {
    sectorsService = inject(SectorsService);
    selectedSector: string | null = null;
    sectors$!: Observable<SectorData[]>;

    constructor(activatedRoute: ActivatedRoute) {
        super(activatedRoute);
    }

    override ngOnInit(): void {
        super.ngOnInit();
        this.sectors$ = this.sectorsService.getAllSectors();
    }
}
