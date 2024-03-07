import { Entity, PrimaryColumn, Column, } from 'typeorm';
import Decimal from 'decimal.js';
import { DecimalTransformer } from '../decimalTransformer';
import { Transform } from 'class-transformer';

@Entity()
export class Check {
  @PrimaryColumn('uuid')  
    id: string;

    @Column()
    monthId: string;


    @Column()
    yearId: string;
 
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
  })
  @Transform(({ value }) => new Decimal(value), { toClassOnly: true })
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  checkSpentDay: Decimal;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
  })
  @Transform(({ value }) => new Decimal(value), { toClassOnly: true })
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  checkSpentNight: Decimal;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
  })
  @Transform(({ value }) => new Decimal(value), { toClassOnly: true })
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  priceDay: Decimal;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
  })
  @Transform(({ value }) => new Decimal(value), { toClassOnly: true })
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  priceNight: Decimal;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
  })
  @Transform(({ value }) => new Decimal(value), { toClassOnly: true })
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  invoiceAmount: Decimal;

  
}
