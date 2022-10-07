import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/nomeCurso') // endpoint
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/instrutores')
  getInstrutores(): string {
    return this.appService.getInstrutores();
  }
  @Get('/nomeCidade')
  Cidade(): string {
    return this.appService.getCidade();
  }
}
