import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    fontSize: number;
    boxe: string;
    background: string;
    text: string;
    marginSize: number;

    constructor() {
        this.fontSize = 25;
        this.background = "bababa";
        this.boxe ="ffffff";
        this.text ="000000";
        this.marginSize= 40;
    }
}