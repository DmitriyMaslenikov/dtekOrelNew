"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingsService = void 0;
const common_1 = require("@nestjs/common");
const getDataDtek_1 = require("../fuctions/getDataDtek");
const getDataYasno_1 = require("../fuctions/getDataYasno");
let ParsingsService = class ParsingsService {
    constructor() {
        this.getData = (dataSupplier, company) => {
            if (dataSupplier === 'Dtek') {
                return (0, getDataDtek_1.getDataDtek)(company);
            }
            else if (dataSupplier === 'Yasno') {
                return (0, getDataYasno_1.getDataYasno)(company);
            }
            return '';
        };
    }
};
ParsingsService = __decorate([
    (0, common_1.Injectable)()
], ParsingsService);
exports.ParsingsService = ParsingsService;
//# sourceMappingURL=parsings.service.js.map