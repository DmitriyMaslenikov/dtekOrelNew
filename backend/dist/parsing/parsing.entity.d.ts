import Decimal from 'decimal.js';
export declare class Check {
    id: string;
    monthId: string;
    yearId: string;
    checkSpentDay: Decimal;
    checkSpentNight: Decimal;
    priceDay: Decimal;
    priceNight: Decimal;
    invoiceAmount: Decimal;
}
