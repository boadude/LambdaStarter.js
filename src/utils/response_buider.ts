import { Service } from 'typedi';

@Service()
export class ResponseBuilder {
  public getResponse(json: any) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(json),
    };
  }
}
