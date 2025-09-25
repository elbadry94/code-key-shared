/*
 * Public API Surface of code-key-shared-ui
 */

export * from './lib/code-key-shared-ui';
export * from './lib/base/components/base-component';
export * from './lib/base/components/base-edit-component';
export * from './lib/base/components/base-list-component';

export * from './lib/core';
export * from './lib/layout/component/app.configurator';
export * from './lib/layout/component/app.floatingconfigurator';
export * from './lib/layout/component/app.footer';
export * from './lib/layout/component/app.layout';
export * from './lib/layout/component/app.menu';
export * from './lib/layout/component/app.menuitem';
export * from './lib/layout/component/app.sidebar';
export * from './lib/layout/component/app.topbar';
export * from './lib/layout/service/layout.service';

export * from './lib/pages/auth/access';
export * from './lib/pages/auth/auth.routes';
export * from './lib/pages/auth/error';
export * from './lib/pages/auth/login';


export * from './lib/pages/dashboard/components/bestsellingwidget';
export * from './lib/pages/dashboard/components/revenuestreamwidget';
export * from './lib/pages/dashboard/components/statswidget';
export * from './lib/pages/dashboard/dashboard';

export * from './lib/pages/empty/empty';
export * from './lib/pages/guards/authguard.guard';
export * from './lib/pages/interceptors/auth/auth.interceptor';
export * from './lib/pages/interceptors/error/error-handling.interceptor';
export * from './lib/pages/interceptors/loading/loading.interceptor';
export * from './lib/pages/landing/landing';
export * from './lib/pages/notfound/notfound';
export * from './lib/pages/service/auth.service';
export * from './lib/pages/service/icon.service';
export * from './lib/pages/service/node.service';
export * from './lib/pages/service/photo.service';

// Export Shared Components
export * from './lib/shared';


// Department Components
export * from './lib/pages/settings/Departments/Components/add-edit-department/add-edit-department.component';
export * from './lib/pages/settings/Departments/Components/add-department-features/add-department-features.component';
export * from './lib/pages/settings/Departments/Components/program-list/program-list.component';
export * from './lib/pages/settings/Departments/Components/add-edit-program/add-edit-program.component';
export * from './lib/pages/settings/Departments/Components/faculty-list/faculty-list.component';
export * from './lib/pages/settings/Departments/Components/add-edit-faculty/add-edit-faculty.component';
export * from './lib/pages/settings/Departments/Components/activity-list/activity-list.component';
export * from './lib/pages/settings/Departments/Components/add-edit-activity/add-edit-activity.component';
export * from './lib/pages/settings/Departments/Departments.routes';


export * from './lib/pages/models/department-dto';

export * from './lib/shared/services/settings/departments/departments.service';
