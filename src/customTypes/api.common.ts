export type GetResponseWithData<T> = {
  count: number;
  next: string;
  previous: unknown | null;
  results: T[];
};
