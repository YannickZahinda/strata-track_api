import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Worker } from "src/worker/worker.entity";
import { MineSite } from "src/mine-sites/mine-site.entity";

@Entity('shifts')
export class Shift {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Worker, (worker) => worker.shifts, {onDelete: 'CASCADE'})
    worker: Worker;

    @ManyToOne(() => MineSite, (mineSite) => mineSite.shifts, {onDelete: 'CASCADE'})
    mineSite: MineSite;

    @Column({type: 'varchar', length: 50})
    shift_type: string; // 'day or night'

    @Column({type: 'time'})
    start_time: string;

    @Column({type: 'time'})
    end_time: string;

    @Column({type: 'date', default: () => 'CURRENT_DATE'})
    shift_date: Date;

    @CreateDateColumn()
    created_at: Date;
}