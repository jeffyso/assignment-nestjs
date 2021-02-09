import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class EducationLevel {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
  }
