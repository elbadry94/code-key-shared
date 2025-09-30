import { Routes } from '@angular/router';
import { AddEditSectorComponent } from './components/add-edit-sector/add-edit-sector.component';
import { SectorsComponent } from './Pages/sectors/sectors.component';
import { AddSectorFeaturesComponent } from './components/add-sector-features/add-sector-features.component';

export const sectorsRoutes: Routes = [
    {
        path: '',
        component: SectorsComponent
    },
    {
        path: 'add',
    component: AddEditSectorComponent
    },
    {
        path: 'edit/:id',
    component: AddEditSectorComponent
    },
    {
        path: 'features',
        component: AddSectorFeaturesComponent
    }
];
