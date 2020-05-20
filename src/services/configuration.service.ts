import { Injectable } from '@angular/core';

/**
 * Service stcokant la configuration courante
 */
@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    fontSize: number;
    boxe: string;
    background: string;
    text: string;
    marginSize: number;
    previouspage: string;

    constructor() {
        this.fontSize = 25;
        this.background = "bababa";
        this.boxe = "ffffff";
        this.text = "000000";
        this.marginSize = 5;
        this.previouspage = "/themelist";
    }
}