import {MigrationInterface, QueryRunner} from "typeorm";

export class addCommentAutor1649787579003 implements MigrationInterface {
    name = 'addCommentAutor1649787579003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ADD "autor" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "autor"`);
    }

}
