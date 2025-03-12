import { Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { MineSites } from "src/mine-sites/mine-site.entity";

@Entity('extractions')
export class Extraction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => MineSites, (mineSite) => mineSite.extractions, {onDelete: 'CASCADE'})
    mineSite: MineSites;

    @Column({type: 'varchar', length: 100})
    mineral_type: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    quantity: number;

    @Column({type: 'varchar', length: 100, nullable: true})
    quality: string;

    @Column({type: 'date', default: ()=> 'CURRENT_DATE'})
    extracted_at: Date;

    @CreateDateColumn()
    created_at: Date;
}