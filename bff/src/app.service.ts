import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../mock/chatbot/get-data.json');
@Injectable()
export class AppService {
  getHello(): any {
    return { response: data };
  }
}
