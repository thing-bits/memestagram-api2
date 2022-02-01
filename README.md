# memestagram-api

## API Endpoints

All API Request must be prepended with /api            


### Authentication Endpoints

The Authentication flow for the application is:


METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|-----------------------------
POST   | /auth/signup     | -     | User Signup              | name, username, email, password                 | token
POST   | /auth/login      | -     | User Login               | username, password                              | token
POST   | /auth/check      | YES   | Auth Token check         | -                                               |



### Profile Endpoints

METHOD | ENDPOINT   | TOKEN | DESCRIPTION                   | POST PARAMS                                     | RETURNS
-------|------------|-------|-------------------------------|-------------------------------------------------|--------------------------------
GET    | /profile   | YES   | Shows registered user profile |  -                                              | name, username, email, posts
PUT    | /profile   | YES   | Update user profile           | email, name, password                           | updated user data
DELETE | /profile   | YES   | Deletes user profile          | -                                               | confirmation of deleted user


### User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                   | PARAMS                                          | RETURNS
-------|------------------|-------|-------------------------------|-------------------------------------------------|----------------------------
GET    | /users           | YES   | Finds users by username       | query: search string                            | list of matching usernames and ids
GET    | /users/:userid   | YES   | Get user profile              | userid                                          | user profile


