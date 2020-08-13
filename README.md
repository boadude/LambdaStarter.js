<p align="center">
    <img src="https://codingandfitness.s3.amazonaws.com/images/lambdastarter-v2.png" /><br>
    A Starter Project for AWS Lambdas.
</p>

<p align="center">
    <a href="#"><img src="https://img.shields.io/github/v/release/codingandfitness/LambdaStarter.js" alt="GitHub release"></a>
    <a href="#"><img src="https://img.shields.io/github/license/codingandfitness/LambdaStarter.js" alt="Stack Share"></a>
    <a href="#"><img src="https://img.shields.io/github/last-commit/codingandfitness/LambdaStarter.js" alt="GitHub last commit"></a>
    <a href="#"><img src="https://img.shields.io/github/languages/code-size/codingandfitness/LambdaStarter.js" alt="GitHub code size in bytes"></a>
</p>

---

- AWS SAM
- AWS Lambda (with TypeScript)
- AWS DynamoDB
- AWS Parameter Store
- Prettier and Eslint
- Semantic Release

# Table of Content

- [Requirements](#requirements)
- [Installation](#installation)
- [Useful commands](#useful-commands)
- [Configuration](#configuration)
  - [VSCode extensions](#vscode-extensions)
- [Folder Structure](#folder-structure)
- [Roadmap](#roadmap)
- [License](#license)

# How to use this Starter

- [Commit Standard and Semantic Versioning for any project](https://dev.to/codingandfitness/commit-standard-and-semantic-versioning-for-any-project-1ihc)

# Requirements

- Node 10+
- Docker
- AWS SAM

# Installation

## Install project and dependencies

    # Clone repository
    git clone git@github.com:codingandfitness/LambdaStarter.js.git --depth=1

    # Go to graphql-starter folder
    cd LambdaStarter

    # Install dependencies
    npm i

## Configure DynamoDB and create Table

    # Start DynamoDB in any network you want
    docker run -d -p 8000:8000 --network lambdastarter_default --name dynamodb amazon/dynamodb-local

    # Create the table Book in DynamoDB
    aws dynamodb create-table --table-name Book --attribute-definitions AttributeName=pkey,AttributeType=S AttributeName=skey,AttributeType=S --key-schema AttributeName=pkey,KeyType=HASH AttributeName=skey,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --endpoint-url http://localhost:8000

## Start project

    # Execute de Lambda "CreateBook" in the specific network
    sam local invoke "CreateBook" --docker-network lambdastarter_default

    # If you want to simulate an incoming data event
    sam local invoke "CreateBook" --debug-port 5858 --docker-network lambdastarter_default -e src/book/book.event.json

# Useful commands

    # Start the project with hotreload
    npm run watch

    # Deploy lambda to AWS
    sam deploy

    # DynamoDB list of local Tables
    aws dynamodb list-tables --endpoint-url http://localhost:8000

    # Scan items in specific Table
    aws dynamodb scan --table-name Book --endpoint-url http://localhost:8000

# Configuration

To ensure our work, we use Visual Studio Code and a few addons that will make our work much cleaner and professional.

- [VSCode](https://code.visualstudio.com/)

## VSCode extensions

To install the add-ons necessary to work faster and cleaner we must go to the extension icon on the left panel and search all the add-on and installed.

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Folder Structure

The repository use the Domain-Driven File Structure.

    lambdastarter/
     ├──.github/workflows                 * configuration for github actions
     │   └──settings.json                 * configurations for semantic release
     ├──.vscode/                          * configuration for vscode ide
     │   └──settings.json                 * configurations for vscode
     ├──src/                              * source files
     │   ├──book/                         * book domain
     │   │   ├──book.ts                   * lambdas for book domain
     │   │   ├──book.event.json           * input to simulate incoming data
     │   │   ├──book.schema.ts            * book schema
     │   │   └──book.service.ts           * book service
     │   │
     │   └──utils/                        * utils
     │       ├──dynamodb/                 * dynamodb client
     │       │  ├──dynamodb.interface.ts  * dynamodb interface
     │       │  ├──dynamodb.service.ts    * dynamodb service
     │       │
     │       ├──logger.ts                 * winstomn for logging
     │       └──responses_builder.ts      * response builder
     │
     ├──.editorconfig                     * configuration for vscode
     ├──.eslintrc                         * configuration for eslint
     ├──.gitignore                        * git ignore
     ├──.prettierignore                   * prettier ignore
     ├──.prettierrc                       * configuration for prettier
     └──template.yaml                     * aws sam template

# Roadmap

- [ ] How use this starter with AWS AppSync
- [ ] Event validator for events
- [ ] Query and Resolvers implementations
- [ ] CI/CD with AWS CodePipeline

# License

The MIT License (MIT)

Copyright (c) 2020 Miguel Meza,

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcodingandfitness%2FLambdaStarter.js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcodingandfitness%2FLambdaStarter.js?ref=badge_large)
