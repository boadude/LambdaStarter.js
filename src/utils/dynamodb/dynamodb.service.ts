import { Service } from 'typedi';
import * as AWS from 'aws-sdk';

import {
  IDynamoDBKeysQuery,
  IDynamoDBCompositeQuery,
} from './dynamodb.interface';
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';

@Service()
export default class DynamoDBService {
  constructor() {
    if (process.env.ENV !== 'production') {
      const serviceConfigOptions: ServiceConfigurationOptions = {
        region: 'us-east-1',
        endpoint: 'http://dynamodb:8000',
      };

      AWS.config.update(serviceConfigOptions);
    }
  }

  async create(info: IDynamoDBKeysQuery) {
    try {
      await new AWS.DynamoDB.DocumentClient()
        .put({
          TableName: info.table,
          Item: info.item,
        })
        .promise();

      return info.item;
    } catch (error) {
      throw error;
    }
  }

  async findOne(info: IDynamoDBKeysQuery) {
    let response;

    try {
      const result = await new AWS.DynamoDB.DocumentClient()
        .get({
          TableName: info.table,
          Key: info.item,
        })
        .promise();

      response = result.Item;

      return response;
    } catch (error) {
      throw error;
    }
  }

  async findMany(info: IDynamoDBCompositeQuery) {
    let response;

    const expressionAttributeNames = {};
    expressionAttributeNames[info.attributeName.pkey.key] =
      info.attributeName.pkey.value;
    expressionAttributeNames[info.attributeName.skey.key] =
      info.attributeName.skey.value;

    const expressionAttributeValues = {};
    expressionAttributeValues[info.attributeValue.pkey.key] =
      info.attributeValue.pkey.value;
    expressionAttributeValues[info.attributeValue.skey.key] =
      info.attributeValue.skey.value;

    try {
      const params = {
        TableName: info.table,
        KeyConditionExpression: info.query,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
      };

      const result = await new AWS.DynamoDB.DocumentClient()
        .query(params)
        .promise();

      response = result.Items;

      return response;
    } catch (error) {
      throw error;
    }
  }
}
