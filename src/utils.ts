import {StrapiDataResponse} from './response';
import {Primitive, Simplify} from 'type-fest';

type ExcludePrimitive<T> = Exclude<T, Primitive>
type IsPopulateKey<T> = ExcludePrimitive<T> extends never ? false : true

export type StrapiFlattenData<Data extends StrapiDataResponse | StrapiDataResponse[]> = Simplify<{
  id: number;
} & {
  [key in keyof Data]:
    Data[key] extends Primitive
      ? Data[key]
      : Data[key]
}
