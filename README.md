```bash
sam local invoke --debug-port 5858 -e src/events/store.json

NODE_ENV=development npm run-script watch
NODE_ENV=production npm run-script build

sam deploy
```
