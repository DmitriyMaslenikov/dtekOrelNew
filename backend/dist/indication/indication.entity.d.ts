import Decimal from 'decimal.js';
export declare class Indication {
    id: string;
    monthId: string;
    yearId: string;
    orelDay: Decimal;
    orelNight: Decimal;
    minerDay: Decimal;
    minerNight: Decimal;
    housingWorkerDay: Decimal;
    housingWorkerNight: Decimal;
}
