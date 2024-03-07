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
exports.IndicationsController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const indication_entity_1 = require("./indication.entity");
const indications_service_1 = require("./indications.service");
let IndicationsController = class IndicationsController {
    constructor(service) {
        this.service = service;
    }
};
IndicationsController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: indication_entity_1.Indication,
        },
        params: {
            id: {
                field: 'id',
                type: 'uuid',
                primary: true,
            },
        },
    }),
    (0, common_1.Controller)('indications'),
    __metadata("design:paramtypes", [indications_service_1.IndicationsService])
], IndicationsController);
exports.IndicationsController = IndicationsController;
//# sourceMappingURL=indications.controller.js.map