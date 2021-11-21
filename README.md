# Retrievers

## Installation:
On MacOS
1. `npm init`
2. Copy the server/sample.env files and follow the instructions within them

## How to run:
On MacOS
1. `npm dev` - starts server, client, and local db
    - To run on production server, set env variable MONGODB_URI and use `npm prod`
2. use the "Flow Language Support" VSCode extension or run `npm run flow` to run type checking.

## Testing:
- Type check all: `npm run flow`
- Type-check 1 file: `npm run flow:check`

## Useful Tools: 
- MongoDB Compass - visualize the DB and manage with a GUI instead of CLI
- Postman - run queries against the API even if the client isn't working, manage the official schema config

## Infrastructure:
'*' = not added yet
Client:
- React - UI creation
- ReactRouter - routing
- Recoil - global state management
- StyledComponents - css / styling
Server:
- Node w/ Express - core server
- MongoDB - database
- Mongoose - mongodb object modeling for js
- Mongod - local mongodb for testing rather than production
- Bcrypt* - encryption library for node
Shared:
- Flow - type checking
- Jest - testing
- ESLint - linter
- Heroku - deployment
