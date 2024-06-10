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
  createdAt:"f_alta",
  updatedAt:"f_mod",
  tableName: "fact_clientes",
})
export class Clientes extends Model {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  idclientes!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nomapell_razon!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  dir_domicilio!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  dir_localidad!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 4,
  })
  iva_tipo!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  cuit!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  telefono!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  contacto!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  celular!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  //@IsEmail
  email!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  observaciones!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  lista_precios!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "0",
  })
  codClie!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  vendedor!: number;
}
