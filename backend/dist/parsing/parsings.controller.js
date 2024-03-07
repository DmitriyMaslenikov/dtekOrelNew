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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingsController = void 0;
const common_1 = require("@nestjs/common");
const parsings_service_1 = require("./parsings.service");
let ParsingsController = class ParsingsController {
    constructor(parsingsService) {
        this.parsingsService = parsingsService;
    }
    async getData(request) {
        const company = typeof request.query.company === 'string' ? request.query.company : '';
        const dataSupplier = typeof request.query.dataSupplier === 'string'
            ? request.query.dataSupplier
            : '';
        return this.parsingsService.getData(dataSupplier, company);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParsingsController.prototype, "getData", null);
ParsingsController = __decorate([
    (0, common_1.Controller)('parsings'),
    __metadata("design:paramtypes", [parsings_service_1.ParsingsService])
], ParsingsController);
exports.ParsingsController = ParsingsController;
//# sourceMappingURL=parsings.controller.js.map