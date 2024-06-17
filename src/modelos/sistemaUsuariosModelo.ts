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
  tableName: "cm_usuarios",
})
export class SistemaUsuarios extends Model {
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
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 0,
  })
  usuario!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      validator: function (value: string) {
        return estructuraContrasena(value);
      },
    },
  })
  contrasena!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  privilegios!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  idAlmacen!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  activo!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  idvendedor!:string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  idtecnico!: number;

  ///encriptamos la contraseña antes de crearla y antes de actualizarla
  @BeforeCreate
  static hashPasswordBeforeCreate(user: SistemaUsuarios) {
    if (user.contrasena) {
      var salt = bcrypt.genSaltSync(saltRounds);
      user.contrasena = bcrypt.hashSync(user.contrasena, salt);
    }
  }
  @BeforeUpdate
  static hashPasswordBeforeUpdate(user: SistemaUsuarios) {
    if (user.contrasena) {
      var salt = bcrypt.genSaltSync(saltRounds);
      user.contrasena = bcrypt.hashSync(user.contrasena, salt);
    }
  }
}
