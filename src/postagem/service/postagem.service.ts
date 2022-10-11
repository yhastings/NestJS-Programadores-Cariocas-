import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private PostagemRepository: Repository<Postagem>
    )  {}

    async findAll(): Promise<Postagem[]> {
        return await this.PostagemRepository.find()
    }
}