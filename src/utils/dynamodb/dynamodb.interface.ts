export interface IDynamoDBKeysQuery {
  table: string;
  item: any;
}

export interface IDynamoDBCompositeQuery {
  table: string;
  query: string;
  attributeName: {
    pkey: {
      key: string;
      value: string;
    };
    skey: {
      key: string;
      value: string;
    };
  };
  attributeValue: {
    pkey: {
      key: string;
      value: string;
    };
    skey: {
      key: string;
      value: string;
    };
  };
}
