import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_postagens" })
export class Postagem {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    titulo: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    texto: string

    @UpdateDateColumn()
    @ApiProperty()
    data: Date

    @ApiProperty({ type: () => Tema})
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema


    @ApiProperty({type: () => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario






}

function MaxLenght() {
    throw new Error("Function not implemented.");
}
