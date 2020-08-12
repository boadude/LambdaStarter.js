import { Service } from 'typedi';

@Service()
export default class DynamoDBTableService {
  printMessage() {
    console.log('I am alive!');
  }
}
