/* eslint indent: 0 */

import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
})
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'image_url',
  })
  imageUrl!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  count!: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  width!: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  height!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  weight!: string;
}
