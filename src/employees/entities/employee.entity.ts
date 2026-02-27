import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Employee {
  @Column({primary: true, generated: true})
  id: number;

  @Column({length: 300})
  fullName: string;

  @Column()
  position: string;

  @Column("decimal")
  salary: number;

  @Column({nullable: true})
  phone: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
