import { Controller, Get, HttpCode } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { get } from "http";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../service/postagem.service";

@Controller("/postagens")
export class PostagemController{
    constructor(private readonly PostagemService: PostagemService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.PostagemService.findAll();
    }

}