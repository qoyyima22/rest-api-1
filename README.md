# rest-api
rest-api built with Express and Sequelize

# list of routes
Route | HTTP | Header(s) | Body | Description
--- | --- | --- | --- | --- 
/api/signup | POST | none | username: STRING (**required**), password: STRING (**required**), role: STRING (**required**) | register new account
/api/signin | POST | none | username: STRING (**required**), password: STRING (**required**) | get logged in and get token
/api/users | GET | token | none | show All users information
/api/users/:id | GET | token | none | show one user information by id
/api/users | POST | token | username: STRING (**required**), password: STRING (**required**), role: STRING (**required**) | register new account
/api/users/:id | DELETE | token | none | delete a user by id
/api/users/:id | PUT | token | username: STRING (**required**), password: STRING (**required**), role: STRING (**required**) | update account informations

# usage
Make sure you have node.js installed on your computer and then run these commands :
 $ npm install express pg bcryptjs dotenv jsonwebtoken
 $ node app.js

access the API via http://localhost:3000/<*--choose from list routes above--*>
or https://banana-surprise-95013.herokuapp.com/api/users