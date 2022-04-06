import {MigrationInterface, QueryRunner} from "typeorm";

export class addRbac1649177791332 implements MigrationInterface {
    name = 'addRbac1649177791332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "deleted_at" TIMESTAMP, CONSTRAINT "UQ_98082dbb08817c9801e32dd0155" UNIQUE ("value"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_98082dbb08817c9801e32dd015" ON "role" ("value") `);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "login" character varying, "full_name" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a62473490b3e4578fd683235c5" ON "user" ("login") `);
        await queryRunner.query(`CREATE INDEX "IDX_65e29b09a064487efd3e96c468" ON "user" ("full_name") `);
        await queryRunner.query(`CREATE TABLE "session" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "token" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_232f8e85d7633bd6ddfad421696" UNIQUE ("token"), CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_30e98e8746699fb9af235410af" ON "session" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_232f8e85d7633bd6ddfad42169" ON "session" ("token") `);
        await queryRunner.query(`CREATE TABLE "user_roles_role" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "roleId" integer NOT NULL)`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_2d5544ad7921c473222fd5432e5" PRIMARY KEY ("userId", "id", "roleId")`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "FK_30e98e8746699fb9af235410aff" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`);
        await queryRunner.query(`ALTER TABLE "session" DROP CONSTRAINT "FK_30e98e8746699fb9af235410aff"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_2d5544ad7921c473222fd5432e5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_232f8e85d7633bd6ddfad42169"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_30e98e8746699fb9af235410af"`);
        await queryRunner.query(`DROP TABLE "session"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_65e29b09a064487efd3e96c468"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a62473490b3e4578fd683235c5"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_98082dbb08817c9801e32dd015"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
