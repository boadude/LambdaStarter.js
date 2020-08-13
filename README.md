```bash
sam local invoke "CreateBook" --docker-network boilerplate-lambdas_default
sam local invoke "CreateBook" --debug-port 5858 -e src/book/book.event.json

npm run watch
npm run build

sam deploy
```

```bash
docker network ls

docker run -d -p 8000:8000 --network boilerplate-lambdas_default --name dynamodb amazon/dynamodb-local

aws dynamodb list-tables --endpoint-url http://localhost:8000

aws dynamodb create-table --table-name Book --attribute-definitions AttributeName=pkey,AttributeType=S AttributeName=skey,AttributeType=S --key-schema AttributeName=pkey,KeyType=HASH AttributeName=skey,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --endpoint-url http://localhost:8000

aws dynamodb scan --table-name Book --endpoint-url http://localhost:8000

```
