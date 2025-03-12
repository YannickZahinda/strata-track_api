import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Shift } from "src/shift/shift.entity";
import { SafetyReport } from "src/safety-report/safety-report.entity";

@Entity('workers')
export class Worker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', length: 100})
    role: string;

    @Column({type: 'varchar', length: 20, unique: true, nullable: true})
    phone: string;

    @Column({type: 'varchar', length: 255, unique: true, nullable: true})
    email: string;

    @Column({type: 'date', default: () => 'CURRENT_DATE'})
    hire_date: Date;

    @Column({type: 'varchar', length: 50, default: 'active'})
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Shift, (shift) => shift.worker)
    shifts: Shift[];

    @OneToMany(() => SafetyReport, (report) => report.worker)
    safetyReports: SafetyReport[];
}