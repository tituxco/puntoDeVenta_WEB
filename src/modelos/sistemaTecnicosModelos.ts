import {
  Table,
  Column,
  Model,
  DataType,
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
} from "sequelize-typescript";
import bcrypt from "bcrypt";
import { estructuraContrasena } from "../utilidades/validadores";
const saltRounds = 12;

@Table({
  timestamps: true,
  createdAt: "f_alta",
  updatedAt: "f_mod",
  tableName: "tecni_tecnicos",
})
export class SistemaTecnicos extends Model {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellido!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,  
  })
  activo!: number;
}
