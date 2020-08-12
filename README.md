```bash
sam local invoke --debug-port 5858 -e src/events/store.json

NODE_ENV=development npm run-script watch
NODE_ENV=production npm run-script build

sam deploy
```

```bash
aws dynamodb list-tables --endpoint-url http://localhost:8000

aws dynamodb create-table --table-name DynamoDBTable --attribute-definitions AttributeName=pkey,AttributeType=S AttributeName=skey,AttributeType=S --key-schema AttributeName=pkey,KeyType=HASH AttributeName=skey,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --endpoint-url http://localhost:8000

aws dynamodb scan --table-name DynamoDBTable --endpoint-url http://localhost:8000

```


