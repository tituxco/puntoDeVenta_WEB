import {
  Table,
  Column,
  Model,
  DataType,
  IsEmail,
  Sequelize,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "fact_ivatipo",
})
export class TipoContribuyente extends Model {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tipo!: string;
}
