# React Serverless Authentication

![Current Issues](https://img.shields.io/github/issues/mirsahib/React-Serverless-Authentication)
![GitHub Forks](https://img.shields.io/github/forks/mirsahib/React-Serverless-Authentication)
![GitHub stars](https://img.shields.io/github/stars/mirsahib/React-Serverless-Authentication)
![GitHub license](https://img.shields.io/github/license/mirsahib/React-Serverless-Authentication)

## Description

A serverless and stateless JWT authentication system for react app build using netlify function

## Instructions

First clone this repository.

```bash
$ git clone https://github.com/mirsahib/React-Serverless-Authentication.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
$ yarn install
```

After successfull installation run

```bash
$ netlify dev
```

## Database and Local environment setting

Rename `.env.example` to `.env` and add your mongo db password and jwt token secret.Generate a strong password from [here](https://passwordsgenerator.net/)

```
REACT_APP_DB_PASSWORD = <Your mongodb atlas cluster password>
REACT_APP_JWT_TOKEN = <Your randomly generated password>
```
