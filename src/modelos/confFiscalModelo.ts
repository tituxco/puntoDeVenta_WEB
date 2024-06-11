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
  tableName: "fact_conffiscal",
})
export class ConfFiscal extends Model {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  confnume!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tipoComprobante!: number;//DONFDESC tipo de comprobante segun afip

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  abrev!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tip!: number; //tipo de comprobante interno para el comportamiento y calculos internos
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  leg!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ptovta!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  debcred!: string; //si es de debito o credito o ninguno

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codfiscal!: string; //codigo de comprobante de afip

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  letra!: string; //letras que identifican el comprobante

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  observaciones!: string; //aclaraciones sobre el comprobante
  
  
  


  
  
  
  
  
}
