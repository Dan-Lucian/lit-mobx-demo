import { TemplateResult } from 'lit';
import { EnumRoleUser } from '../enums/EnumRoleUser.js';

export interface IRoute {
  path: string;
  component: TemplateResult<1>;
  roles: Array<EnumRoleUser>;
}
