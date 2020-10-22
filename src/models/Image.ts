import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Ong from './Ong';
  
  @Entity('images')
  export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    path: string;
  
    @ManyToOne(() => Ong, (ong) => ong.images)
    @JoinColumn({ name: 'ong_id' })
    ong: Ong;
  }