import {
  Table,
  Column,
  Model,
  DataType,
  IsEmail,
  Sequelize,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "cm_localidad",
})
export class Localidades extends Model {
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
  nombre!: string;
}
