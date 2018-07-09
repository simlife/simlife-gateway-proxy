import { Route } from '@angular/router';

import { JhiConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'sim-configuration',
    component: JhiConfigurationComponent,
    data: {
        pageTitle: 'Cloud configuration'
    }
};
