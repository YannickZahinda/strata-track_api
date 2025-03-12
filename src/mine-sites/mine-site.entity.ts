import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import {Extraction} from '../extraction',
import { Shift } from './shift.entity';
import { SafetyReport } from './safety-report.entity';
import { ProductionStatus } from './production-status.entity';

@Entity('mine_sites')
export class MineSite {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'text'})
    location: string;

    @Column({type: 'varchar', length: 50, default: 'active'})
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Extraction, (extraction) => extraction.mineSite)
    extractions: Extraction[];

    @OneToMany(() => Shift, (shift) => shift.mineSite)
    shifts: Shift[];

    @OneToMany(() => SafetyReport, (report) => report.mineSite)
    safetyReports: SafetyReport[];

    @OneToMany(() => ProductionStatus, (status) => status.mineSite)
    productionStatus: ProductionStatus[];
}