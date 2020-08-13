import { Service } from 'typedi';

@Service()
export class ResponseBuilder {
  public getResponse(json: any) {
    return json;
  }
}
