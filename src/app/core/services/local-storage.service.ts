import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T = unknown>(key: string, parseItem = true): T | string | null {
    const item = localStorage.getItem(key);
    if (parseItem && item) {
      return JSON.parse(item) as T;
    }
    return item as string;
  }
}
