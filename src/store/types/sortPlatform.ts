import { Platform } from 'mocks';

export interface PlatformsState {
  platforms: Platform[];
  sortKey: string;
  sortDirection: 'asc' | 'desc';
}
