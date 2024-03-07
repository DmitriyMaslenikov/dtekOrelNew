"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalToString = exports.DecimalTransformer = void 0;
const decimal_js_1 = require("decimal.js");
class DecimalTransformer {
    to(decimal) {
        return decimal?.toString();
    }
    from(decimal) {
        return decimal ? new decimal_js_1.default(decimal) : null;
    }
}
exports.DecimalTransformer = DecimalTransformer;
const DecimalToString = (decimals = 2) => (decimal) => decimal?.toFixed?.(decimals) || decimal;
exports.DecimalToString = DecimalToString;
//# sourceMappingURL=decimalTransformer.js.map