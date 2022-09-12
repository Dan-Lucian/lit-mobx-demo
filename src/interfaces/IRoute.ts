import { TemplateResult } from 'lit';
import EnumRoleUser from '../Enums/EnumRoleUser.js';

export default interface IRoute {
  path: string;
  component: TemplateResult<1>;
  roles: Array<EnumRoleUser>;
  redirect: {
    [EnumRoleUser.Stranger]?: string;
    [EnumRoleUser.Employee]?: string;
    [EnumRoleUser.Manager]?: string;
  };
}
