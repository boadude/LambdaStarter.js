import Container, { Service } from 'typedi';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './book.schema';
import DynamoDBService from '../utils/dynamodb/dynamodb.service';

@Service()
export default class BookService {
  async create(params: { item: Book }): Promise<Book> {
    const dynamoDBService = Container.get(DynamoDBService);

    const { item } = params;
    const id = uuidv4();

    item['pkey'] = `USER`;
    item['skey'] = `${id}`;

    return dynamoDBService.create({
      table: process.env.TABLE_NAME,
      item: item,
    });
  }
}
