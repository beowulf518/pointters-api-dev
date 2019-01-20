# Pointers API REST
To start the api:
```bash
make start
```
To restart the api:
```bash
make restart
```

To stop the api:
```bash
make stop
```
you need to be installed pm2, nyc and mocha globally to start the server and run test.
# Enviroments Variables

| Variable        | Mean           | 
| ------------- |:-------------:|
| NODE_ENV      | enviroment to run, default is test. Set 
|SENDGRID_API_KEY|  the key to sengrid|
to PROD to run in production mode|
|AWS_ACCESS_KEY_ID| aws keys|
|AWS_SECRET_ACCESS_KEY|aws keys|

# Test

You need to be isntalled nyc and mocha to run the tests.
```bash
make test
```

Run the small test

```bash
make test_small
```

We are using the istanbul to get the coverage, the ideal coverage is 100% please is hard to get this coverage try to do you better work.
# Unit Test 

The test are based of paradigm [The test size pyramid][1] [Other][other] please be consistent and add UT for every module added, integration flow and service created.
Use nock and proxyquire to mock the dependencies and http requests. The agent, user and authorizationHeader variables are defined globally what is a instance of supertest to do request to API and a object:

```js
{
    Authorization: `Bearer <token>`
};
```

of user with data:

```js
{
    email: "test@test.com",
    password: "test",
}
```

The user object is:

```js
{
    email: "test@test.com",
    password: "test",
    _id: "ObjectId returned by client"
}
```


what is logued in before mocha middleware and removed in after mocha middleware.

. We are using [fakerjs](https://github.com/marak/Faker.js/) to generate fake data in your tests.

# API project structure

## Stores

Every interaction is here, wrape the database client used and export the functionality required like a function.

## Services

The interation with third party service is here, please wrape the service client used and export the functionality like a function.

## routes 

The routes to every endpoint or service are here, validate the params in every request there and auth session. We are using Joi to validate params.

## lib

utilities are here.

## database

The database object connection is here, please export a singleton and connected object, is this layer manage the database errors and exceptions.

## controllers

The controllers for every endpoint and services exposed is here. Respect and be consistent with the structure.

## domain

The business rules are here, the important decision are taken here and the intelligence too.

## config

All config is here, create a file for every enviroment to run the project. And add to index file in config the enviroment returned.

# Guideline Code 

We are eslint like linter and a eslintrc is added. Install eslint linter in your IDE to get a code consistent with project.

In general is prefered promises over callback, co-routines are wellcome, evite the if-else hell. The async function are wellcome too :). Arrow function is prefered over others and functional paragidm development is used here, evite the OOP paradigm.

Someone say the best documentation is what is not written. The code has to be as explicit as possible.

## Authentication
The next lists of endpoints are not protected and you can get the token to log to other endpoints:

```js
 [
    '/user/login',
    '/user/signup',
    '/user/facebook/token',
    '/user/otp',
    '/user/reset/password'
 ]
```

In others endpoints are protected and you need pass the Authorization and Cookie header to get be
authenticated.


# Documentation

Documentation is may be the part more important in a API, then for every module, every service, every functionality please add the corresponding documentation.
## '/user/signup' --> POST
request: 
```js
body = {
    email: string().email().required(),
    password: string().required()
}
```
response:
```js
body = {
    success: string().boolean().required(),
    token: string(),
    msg: string().required(),
    id: string()
}
```

## '/user/login' --> POST
request:
```js
body = {
    email: string().email().required(),
    password: string().required()
}
```
response:
```js
body = {
    success: string().boolean().required(),
    token: string(),
    msg: string()
}
```

## '/user/logout' --> POST

request:
```js
body = {
    
}
```
response:
```js
body = {
    
}
```

## '/user' --> GET
request:
```js
body = {
    idUser: string(),
}
```

If idUser is given the user returned is the idUser sent.

response: 

```js
body = UserObjectInDB
```

## '/user' --> PUT
request:
```js
body = {
    awards: string(),
    companyName: string(),
    description: string(),
    education: string(),
    email: string(),
    password: string(),
    firstName: string(),
    insurance: string(),
    lastName: string(),
    license: string(),
    location: object().default({}),
    phone: string(),
    profilePic: string(),
    profileBackgroundImages: object().default({})awards: string(),
    companyName: string(),
    description: string(),
    education: string(),
    email: string(),
    password: string(),
    firstName: string(),
    insurance: string(),
    lastName: string(),
    license: string(),
    location: object().default({}),
    phone: string(),
    profilePic: string(),
    profileBackgroundImages: object().default({})
}
```

response: 

```js
body = UserObjectUpdatedInDB
```

## '/user/facebook/token' --> POST
request:
```js
body = {
    email: string().email().required(),
    token: string().required()
}
```

response: 

```js
body = {
    success: string().boolean().required(),
    token: string(),
    msg: string().required(),
    id: string()
}
```

## /user/otp -> POST

request:
```js
body = {
    email: string().email().required()
}
```

response: 

```js
body = {
    password: string().required()
}

```

## /user/reset/password -> PUT

request:
```js
body = {
    email: string().email().required(),
    oldPassword: string().required(),
    newPassword: string().required(),
}
```

response: 

```js
body = {
    tempPassword: string().required(),
    resetPasswordExpires: string().required()
}

```

## /user/:followedId/follow -> GET

request:
```js
body = {}
```

response: 

```js
body = {
    following: boolean()
}

```

## /user/:followedId/follow -> DELETE

request:
```js
body = {}
```

response: 

```js
body = {
    success: boolean()
}

```

## /user/:followedId/follow -> POST

request:
```js
body = {}
```

response: 

```js
body = {
    success: boolean()
}

```

## /user/settings -> POST

request:


```js

const generalNotifications = [ 'pushNotification', 'email' ];
const orderNotifications = [ 'pushNotification', 'email' ];
const offerNotifications = [ 'pushNotification', 'email' ];
const summaryEmail = [ 'daily', 'weekly' ];
   
body = {
    generalNotifications: string().valid(generalNotifications),
    orderNotifications: string().valid(orderNotifications),
    offerNotifications: string().valid(offerNotifications),
    summaryEmail: string().valid(summaryEmail)
}
```

response: 

```js
body = {
    success: boolean()
}

```

## /user/settings -> PUT

request:


```js

const generalNotifications = [ 'pushNotification', 'email' ];
const orderNotifications = [ 'pushNotification', 'email' ];
const offerNotifications = [ 'pushNotification', 'email' ];
const summaryEmail = [ 'daily', 'weekly' ];
   
body = {
    generalNotifications: string().valid(generalNotifications),
    orderNotifications: string().valid(orderNotifications),
    offerNotifications: string().valid(offerNotifications),
    summaryEmail: string().valid(summaryEmail)
}
```

response: 

```js
body = {
    success: boolean()
}

```

## /user/settings -> DELETE

request:


```js
 validSettingsToDelete = [
     'generalNotifications',
     'orderNotifications',
     'offerNotifications',
     'summaryEmail'
     ]
body = {
    fields: array().items(validSettingsToDelete)
}
```

response: 

```js
body = {
    success: boolean()
}

```

## /user/settings -> GET

request:


```js
 validSettingsToDelete = [
     'generalNotifications',
     'orderNotifications',
     'offerNotifications',
     'summaryEmail'
     ]
body = {
}
```

response: 

```js
body = {
    success: boolean()
}

```

[1]: https://github.com/18F/automated-testing-playbook/blob/master/pages/principles-practices-idioms.md#small-medium-and-large-test-sizes-the-test-size-pyramid
[other]:https://testing.googleblog.com/2010/12/test-sizes.html
