import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'cm_Asientos',
})
export class AsientoContable extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    codigoAsiento!: number | null;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    cuentaDebeId!: number | null;

    @Column({
        type: DataType.DOUBLE,
        allowNull: true,
    })
    importeDebe!: number | null;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    cuentaHaberId!: number | null;

    @Column({
        type: DataType.DOUBLE,
        allowNull: true,
    })
    importeHaber!: number | null;
}