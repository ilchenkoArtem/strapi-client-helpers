import {StrapiDataResponse} from './response';

export interface StrapiRestApiParameters<StrapiData extends StrapiDataResponse> {
  sort?: unknown;
  filters?: unknown;
  pupulate?: unknown;
  fields?: unknown;
}
