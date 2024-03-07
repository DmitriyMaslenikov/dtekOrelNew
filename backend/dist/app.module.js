"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const years_module_1 = require("./years/years.module");
const year_entity_1 = require("./years/year.entity");
const months_module_1 = require("./months/months.module");
const month_entity_1 = require("./months/month.entity");
const indications_module_1 = require("./indication/indications.module");
const indication_entity_1 = require("./indication/indication.entity");
const checks_module_1 = require("./check/checks.module");
const check_entity_1 = require("./check/check.entity");
const parsings_module_1 = require("./parsing/parsings.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            years_module_1.YearsModule,
            months_module_1.MonthsModule,
            indications_module_1.IndicationsModule,
            checks_module_1.ChecksModule,
            parsings_module_1.ParsingsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER_NAME,
                password: process.env.DB_USER_PASSWORD,
                database: process.env.DB_NAME,
                entities: [year_entity_1.Year, month_entity_1.Month, indication_entity_1.Indication, check_entity_1.Check],
                synchronize: true,
                logging: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map