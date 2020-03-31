import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    fontSize: number;
    boxe: string;
    background: string;
    text: string;

    constructor() {
        this.fontSize = 25;
        this.background = "bababa";
        this.boxe ="ffffff";
        this.text ="000000";
    }
}