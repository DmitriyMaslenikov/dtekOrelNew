import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Month {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
