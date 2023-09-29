export interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}
