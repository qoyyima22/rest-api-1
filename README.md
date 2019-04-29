# rest-api
rest-api built with Express and Sequelize

# list of routes
Route | HTTP | Header(s) | Body | Description | Success Response | Failed Response
--- | --- | --- | --- | --- | --- | ---
/api/signup | POST | none | username: STRING (**required**), password: STRING (**required**), role: STRING (**required**) | register new account | JSON of newly created user account and status code of 201 (created) | Error report and status code of 400 (bad request)
/api/signin | POST | none | username: STRING (**required**), password: STRING (**required**) | get logged in and get token | JSON of jsonwebtoken and status code 200 | Error report and status code of 400 (bad request)
/api/todos | GET | JSON webtoken created while logging in | none | show All user's todos | JSON of user's  todo list and status code of 200 | Error report and status code of 400 (bad request) or 401 (not authorized)
/api/todos/:id | GET | JSON webtoken created while logging in | none | show one todo information by id | JSON of todo information and status code of 200 | Error report and status code of 400 (bad request) or 500 (internal server error) or 401 (not authorized)
/api/todos | POST | JSON webtoken created while logging in | title: STRING  (**required**), description: STRING (**required**) | add new todo | JSON of newly created todo and status code of 201 | JSON of error report and status code of 400 (bad request) or 401 (not authorized)
/api/todos/:id | DELETE | JSON webtoken created while logging in | none | delete a todo by id | status code 200 and delete report | status code 400 (bad request) or 401 (not authorized) and error report 
/api/todos/:id | PUT | JSON webtoken created while logging in | title: STRING (**required**), description: STRING (**required**) | update todo information | status code 201 (created) and update report | status code 400 (bad request) or 401 (not authorized) and error report 
/api/todos/:id | PATCH | JSON webtoken created while logging in | field: STRING (**required**), value (**required**) | update todo by specific field | status code 201 (created) and update report | status code 400 (bad request) or 401 (not authorized) and error report
# usage
Make sure you have node.js installed on your computer and then run these commands :
 $ npm install express pg bcryptjs dotenv jsonwebtoken
 $ node app.js

access the API via http://localhost:3000/<*--choose from list routes above--*>
or https://secure-sierra-24262.herokuapp.com