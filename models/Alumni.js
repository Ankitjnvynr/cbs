import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Alumni {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  studentName;

  @Column()
  nationality;

  @Column({ nullable: true })
  occupation;

  @Column({ nullable: true })
  city;

  @Column({ unique: true })
  email;

  @Column()
  mobile;

  @Column({ nullable: true })
  course;

  @Column({ nullable: true })
  branch;

  @Column({ nullable: true })
  rollNo;

  @Column({ nullable: true })
  session;

  @Column({ nullable: true })
  currentOrgDesignation;

  @Column({ nullable: true })
  pastOrgDesignation;
}
