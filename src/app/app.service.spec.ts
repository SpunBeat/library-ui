import { TestBed } from "@angular/core/testing";

import {AppService} from './app.service';

describe('AppService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should create the service', () => {
        const service = TestBed.inject(AppService);
        expect(service).toBeTruthy();
    });

    it('should get total equal to 23', () => {
        const service = TestBed.inject(AppService);
        expect(service.getTotal([1, 1, 1, 20])).toEqual(23);
    });

    it('should get total if empty must equal to 0', () => {
        const service = TestBed.inject(AppService);
        expect(service.getTotal()).toEqual(0);
    });

    it('should get total if we send an array of negative numbers', () => {
        const service = TestBed.inject(AppService);
        expect(service.getTotal([-1,-3,-20,-9])).toEqual(-33);
    });
});