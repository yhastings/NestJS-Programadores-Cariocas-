import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá Programadores cariocas';
  }
  getInstrutores(): string {
    return 'Eltin e Liza';
  }
  getCidade(): string {
    return 'Rio de Janeiro';
  }
}
