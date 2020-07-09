/** @public */
export interface StorageValue<T> {
  value?: T;
  version?: string;
  maxAge?: number;
  time?: number;
}

/** @public */
export interface setOptions {
  /**
   * Effective duration (millisecond)，and must be a non-negative number
   */
  maxAge?: number;
  /**
   * Whether to update the creation time
   */
  update?: boolean;
}
