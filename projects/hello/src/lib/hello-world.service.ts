import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  constructor() {}

  hello(): string {
    return 'Hello World!';
  }
}