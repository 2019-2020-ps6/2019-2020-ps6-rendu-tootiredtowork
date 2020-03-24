import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    fontSize: number;

    constructor() {
        this.fontSize = 25;
    }
}