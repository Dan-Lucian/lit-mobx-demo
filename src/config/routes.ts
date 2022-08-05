import { TemplateResult, html } from 'lit';

import { IRoute } from '../Interfaces/IRoute.js';
import { EnumRoleUser } from '../enums/EnumRoleUser.js';
import '../components/router-app.js';
import '../pages/page-index.js';
import '../pages/page-login.js';
import '../pages/page-about.js';
import '../pages/page-404.js';
import '../pages/page-mobx.js';

const PageIndex: TemplateResult<1> = html`<page-index></page-index>`;
const PageLogin: TemplateResult<1> = html`<page-login></page-login>`;
const PageAbout: TemplateResult<1> = html`<page-about></page-about>`;
const Page404: TemplateResult<1> = html`<page-404></page-404>`;
const PageMobx: TemplateResult<1> = html`<page-mobx></page-mobx>`;

const routes: IRoute[] = [
  {
    path: '/',
    component: PageIndex,
    roles: [EnumRoleUser.Employee, EnumRoleUser.Manager],
  },
  {
    path: '/login',
    component: PageLogin,
    roles: [EnumRoleUser.Stranger],
  },
  {
    path: '/about',
    component: PageAbout,
    roles: [EnumRoleUser.Employee, EnumRoleUser.Manager],
  },
  {
    path: '/mobx',
    component: PageMobx,
    roles: [EnumRoleUser.Employee, EnumRoleUser.Manager],
  },
  {
    path: '*',
    component: Page404,
    roles: [EnumRoleUser.Stranger, EnumRoleUser.Employee, EnumRoleUser.Manager],
  },
];

export default routes;
