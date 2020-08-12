import 'reflect-metadata';

import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import Container from 'typedi';

import DynamoDBTableService from './dynamodb_table/dynamodb_table.service';
import { ResponseBuilder } from './utils/response_buider';
import logger from './utils/logger';

class LambdaHandler {
  public async handler(
    event: APIGatewayEvent,
    context: Context,
  ): Promise<APIGatewayProxyResult> {
    logger.info(`time to say 'hello'`);
    logger.info(`Testomg pme more time`);

    const dynamoDBTableService = Container.get(DynamoDBTableService);
    const responseBuilder = Container.get(ResponseBuilder);

    dynamoDBTableService.printMessage();

    return responseBuilder.getResponse({ message: 'hello' });
  }
}

const handler = new LambdaHandler();

export const lambdaHandler = handler.handler;
