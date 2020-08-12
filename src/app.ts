import { APIGatewayProxyResult } from 'aws-lambda';
import logger from './utils/logger';

export const lambdaHandler = async (): Promise<APIGatewayProxyResult> => {
  logger.info(`time to say 'hello'`);

  logger.info(`Testomg pme more time`);

  return { body: JSON.stringify({ message: 'hello' }), statusCode: 200 };
}