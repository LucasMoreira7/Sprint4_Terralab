import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1645560727600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name:"id",
                        type: "uuid",
                        isPrimary: true,
                        isNullable: true
                    },
                    {
                        name:"email",
                        type: "varchar",
                        isNullable: true
                    },
                ],
            })
        )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
