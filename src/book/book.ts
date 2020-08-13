import 'reflect-metadata';

import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import Container from 'typedi';

import Logger from '../utils/logger';
import { ResponseBuilder } from '../utils/response_buider';
import BookService from './book.service';

class BookHandler {
  constructor() {
    Container.set('Logger', Logger);
  }

  public async createBook(
    event: APIGatewayEvent,
    context: Context,
  ): Promise<APIGatewayProxyResult> {
    const logger: any = Container.get('Logger');
    const bookService = Container.get(BookService);
    const responseBuilder = Container.get(ResponseBuilder);

    logger.info(`Example Log`);

    const response = await bookService.create({
      item: {
        field1: 'field1',
        field2: 'field2',
        field3: 'field3',
        field4: 'field4',
      },
    });

    return responseBuilder.getResponse(response);
  }
}

const handler = new BookHandler();

export const createBook = handler.createBook;
