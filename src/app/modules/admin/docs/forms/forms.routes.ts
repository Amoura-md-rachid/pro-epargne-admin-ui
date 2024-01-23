import { Routes } from '@angular/router';
import { FormsFieldsComponent } from 'app/modules/admin/docs/forms/fields/fields.component';
import { FormsLayoutsComponent } from 'app/modules/admin/docs/forms/layouts/layouts.component';
import { FormsWizardsComponent } from 'app/modules/admin/docs/forms/wizards/wizards.component';

export default [
    {
        path     : 'fields',
        component: FormsFieldsComponent,
    },
    {
        path     : 'layouts',
        component: FormsLayoutsComponent,
    },
    {
        path     : 'wizards',
        component: FormsWizardsComponent,
    },
] as Routes;
