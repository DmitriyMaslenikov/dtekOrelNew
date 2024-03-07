import Decimal from 'decimal.js';
import { ValueTransformer } from 'typeorm';
export declare class DecimalTransformer implements ValueTransformer {
    to(decimal?: Decimal): string | null;
    from(decimal?: string): Decimal | null;
}
export declare const DecimalToString: (decimals?: number) => (decimal?: Decimal) => string | Decimal;
