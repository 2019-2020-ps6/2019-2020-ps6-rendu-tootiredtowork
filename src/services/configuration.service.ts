import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    fontSize: number;
    boxe: number;
    background: number;
    text: number;

    constructor() {
        this.fontSize = 25;
        this.background = 0xbababa;
        this.boxe =0xffffff;
        this.text =0x000000;
    }
}