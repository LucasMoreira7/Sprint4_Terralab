import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateCoords1645641665756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "coords",
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
                    {
                        name:"latitude",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name:"longitude",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name:"description",
                        type: "varchar",
                        isNullable: true
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("coords");
    }

}
