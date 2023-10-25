import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-custom-img',
    templateUrl: './custom-img.component.html',
    styleUrls: ['./custom-img.component.css']
})
export class CustomImgComponent {

    @Input() colorName = 'white';
    @Output() counter = new EventEmitter();
    @Output() limitReach = new EventEmitter();

    counterInterno = 0;

    alertOfColor() {
        alert(this.colorName);
    }

    increase() {
        this.counterInterno += 1;
        this.counter.emit(this.counterInterno);
        if (this.counterInterno > 10) {
            this.limitReach.emit(true);
        }
    }

    decrease() {
        this.counterInterno -= 1;
        this.counter.emit(this.counterInterno);
    }

    calcularClases(counter: number) {
        return {
            green: counter > 0,
            red: counter < 0
        };
    }

    calcularEstilos(size: number, color: string) {
        return {
            fontSize: (11 + size) + 'px',
            backgroundColor: color
        };
    }

    calcularFont(size: number, color: string): string {
        const prop = 'font-size: ' + (11 + size) + 'px; background-color: ' + color;
        return prop;
    }
    
}