import {Primitive} from 'type-fest';

type StrapiAttributes = Record<string, Primitive | StrapiResponse>

export const enum StrapiErrorResponseName {
  ApplicationError = 'ApplicationError',
  ValidationError = 'ValidationError'
}

export interface StrapiErrorResponse {
  status: string;
  name: StrapiErrorResponseName;
  message: string;
  details: {}
}

export interface StrapiMetaPaginationResponse {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMetaResponse {
  pagination: StrapiMetaPaginationResponse
}

export interface StrapiDataResponse<Attributes extends StrapiAttributes = StrapiAttributes> {
  id: number;
  attributes: Attributes;
}

export interface StrapiBaseResponse<Data = any, Meta extends {} = StrapiMetaResponse> {
  data: Data,
  meta: Meta
  error?: StrapiErrorResponse
}

export type StrapiSingleResponse = StrapiBaseResponse<StrapiDataResponse, {}>
export type StrapiListResponse = StrapiBaseResponse<StrapiDataResponse[]>
export type StrapiResponse = StrapiSingleResponse | StrapiListResponse
