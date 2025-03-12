import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { MineSite } from 'src/mine-sites/mine-site.entity';

@Entity('production_status')
export class ProductionStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MineSite, (mineSite) => mineSite.productionStatus, { onDelete: 'CASCADE' })
  mineSite: MineSite;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  extracted_today: number;

  @Column({ type: 'int', default: 0 })
  operational_machines: number;

  @Column({ type: 'int', default: 0 })
  worker_count: number;

  @CreateDateColumn()
  last_updated: Date;
}
