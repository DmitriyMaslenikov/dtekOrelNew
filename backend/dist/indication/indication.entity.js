"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indication = void 0;
const typeorm_1 = require("typeorm");
const decimal_js_1 = require("decimal.js");
const decimalTransformer_1 = require("../decimalTransformer");
const class_transformer_1 = require("class-transformer");
let Indication = class Indication {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Indication.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Indication.prototype, "monthId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Indication.prototype, "yearId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        transformer: new decimalTransformer_1.DecimalTransformer(),
    }),
    (0, class_transformer_1.Transform)(({ value }) => new decimal_js_1.default(value), { toClassOnly: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString(), { toPlainOnly: true }),
    __metadata("design:type", decimal_js_1.default)
], Indication.prototype, "orelDay", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        transformer: new decimalTransformer_1.DecimalTransformer(),
    }),
    (0, class_transformer_1.Transform)(({ value }) => new decimal_js_1.default(value), { toClassOnly: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString(), { toPlainOnly: true }),
    __metadata("design:type", decimal_js_1.default)
], Indication.prototype, "orelNight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        transformer: new decimalTransformer_1.DecimalTransformer(),
    }),
    (0, class_transformer_1.Transform)(({ value }) => new decimal_js_1.default(value), { toClassOnly: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString(), { toPlainOnly: true }),
    __metadata("design:type", decimal_js_1.default)
], Indication.prototype, "minerDay", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        transformer: new decimalTransformer_1.DecimalTransformer(),
    }),
    (0, class_transformer_1.Transform)(({ value }) => new decimal_js_1.default(value), { toClassOnly: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString(), { toPlainOnly: true }),
    __metadata("design:type", decimal_js_1.default)
], Indication.prototype, "minerNight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        transformer: new decimalTransformer_1.DecimalTransformer(),
    }),
    (0, class_transformer_1.Transform)(({ value }) => new decimal_js_1.default(value), { toClassOnly: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString(), { toPlainOnly: true }),
    __metadata("design:type", decimal_js_1.default)
], Indication.prototype, "housingWorkerDay", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        transformer: new decimalTransformer_1.DecimalTransformer(),
    }),
    (0, class_transformer_1.Transform)(({ value }) => new decimal_js_1.default(value), { toClassOnly: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString(), { toPlainOnly: true }),
    __metadata("design:type", decimal_js_1.default)
], Indication.prototype, "housingWorkerNight", void 0);
Indication = __decorate([
    (0, typeorm_1.Entity)()
], Indication);
exports.Indication = Indication;
//# sourceMappingURL=indication.entity.js.map