# React Serverless Authentication

[![Netlify Status](https://api.netlify.com/api/v1/badges/948d5dfa-3acf-4340-b96e-30f3f8e243b6/deploy-status)](https://app.netlify.com/sites/react-serverless-authentication-103/deploys)
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

## API

Base url : http://localhost:8888/

| URL                         | Body                                        | Response                               | Description                |
| --------------------------- | ------------------------------------------- | -------------------------------------- | -------------------------- |
| `.netlify/functions/signup` | <ul><li>username</li><li>password</li></ul> | <ul><li>UserID</li><li>email</li></ul> | return userid id and email |
| `.netlify/functions/login`  | <ul><li>username</li><li>password</li></ul> | <ul><li>UserID</li><li>email</li></ul> | return userid and email    |
| `.netlify/functions/user`   | **none**                                    | <ul><li>UserID</li><li>email</li></ul> | return userid and email    |
| `.netlify/functions/auth`   | **none**                                    | `{auth:status}`                        | return auth true or false  |

NB: Use [Postman](https://www.postman.com/) to test the api


## Medium Article
[Part 1](https://medium.com/swlh/react-serverless-authentication-system-part-1-netlify-function-112289f6d96e)
[Part 2](https://mirsahib24.medium.com/react-serverless-authentication-system-part-2-frontend-build-419103b6e9c6)