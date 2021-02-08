import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EducationLevel {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}