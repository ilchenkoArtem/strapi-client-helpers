export const enum StrapiPublicationState {
  /** returns only published entries (default) */
  Live = 'live',
  /** returns both draft entries & published entries */
  Preview = 'preview',
}

export const enum StrapiSortType {
  Ascending = 'asc',
  Descending = 'desc',
}

export const enum StrapiComplexFilterOperator {
  Or = '$or',
  And = '$and',
}

export const enum StrapiBaseFilterOperator {
  Equal = '$eq',
  NotEqual = '$ne',
  LessThan = '$lt',
  GreaterThan = '$gt',
  LessThanOrEqualTo = '$lte',
  GreaterThanOrEqualTo = '$gte',
  IncludedInAnArray = '$in',
  NotIncludedInAnArray = '$notIn',
  ContainsCaseSensitive = '$contains',
  NotContainsCaseSensitive = '$notContains',
  Containsi = '$containsi',
  NotContainsi = '$notContainsi',
  IsNull = '$null',
  NotNull = '$notNull',
  Between = '$between',
  StartsWith = '$startsWith',
  EndsWith = '$endsWith',
}
