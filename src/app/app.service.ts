import { Injectable } from '@angular/core';
import { Color } from './app.types';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    parseColors(arreglo: string[]): Color[] {
        return arreglo.map((name, index) => ({
            name,
            index,
            counter: 0
        }));
    }

    parseCounters(arreglo: Color[]): number[] {
        return arreglo.map(a => a.counter);
    }

    getTotal(arreglo?: number[]): number {
        if (!arreglo) {
            return 0;
        }
        return arreglo.reduce((a, b) => a + b, 0);
    }

    getCounterTotal(arreglo: Color[]): number {
        const counters = this.parseCounters(arreglo);
        const total = this.getTotal(counters);
        return total;
    }

}