import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Year {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
