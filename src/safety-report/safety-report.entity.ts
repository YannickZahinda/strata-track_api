import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Worker } from "src/worker/worker.entity";
import { MineSite } from "src/mine-sites/mine-site.entity";

@Entity('safety_reports')
export class SafetyReport {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => MineSite, (mineSite) => mineSite.safetyReports, {onDelete: 'CASCADE'})
    mineSite: MineSite;

    @ManyToOne(() => Worker, (worker) => worker.safetyReports, {nullable: true, onDelete: 'CASCADE'})
    worker = Worker;

    @Column({type: 'varchar', length: 255})
    incident_type: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    reported_at: Date;

    @Column({type: 'varchar', length: 50, default: 'open'})
    status: string;
}