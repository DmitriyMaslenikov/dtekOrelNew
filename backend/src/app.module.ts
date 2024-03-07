import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YearsModule } from './years/years.module';
import { Year } from './years/year.entity';
import { MonthsModule } from './months/months.module';
import { Month } from './months/month.entity';
import { IndicationsModule } from './indication/indications.module';
import { Indication } from './indication/indication.entity';
import { ChecksModule } from './check/checks.module';
import { Check } from './check/check.entity';
import { ParsingsModule } from './parsing/parsings.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    YearsModule,
    MonthsModule,
    IndicationsModule,
    ChecksModule,
    ParsingsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER_NAME,
      password: process.env.DB_USER_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Year, Month, Indication, Check],
      synchronize: true,
      logging: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
