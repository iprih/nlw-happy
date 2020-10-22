import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602962249787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'path',
                type: 'varchar',
              },
              {
                name: 'ong_id',
                type: 'integer',
              },
            ],
            foreignKeys: [
              {
                name: 'ImageOng',
                columnNames: ['ong_id'],
                referencedTableName: 'ongs',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
              }
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
