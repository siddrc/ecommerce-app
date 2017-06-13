This project is a MEAN stack based ecommerce application and 
demonstrates policy based access control with MongoDB as a backend.
<pre>
The Flow is as follows (as per the code present in the repository): 
1. To start using the site and perform all neccessary data entry operations, one user and one policy is already entered in the database...ie Superuser and Superuser policy.
2.Since only superuser is allowed to use superuser policy .
  it is not wise to share superuser policy with other users.
3.So we need to make more users, with relevant access.
4.So to make more users, we first need to start making Policy
5.Once policy is made we can use Add Admin User screen to create more admin users, and select a relevant Policy for them
6.If a relevant policy exist we simply select it and create an admin user.

Pre-requisites:
1. Knowledge of javascript is required
2. The system on which this application will be running needs to have Node.js and MongoDB installed and running.

Take the data dump
$: .... ...\ecommerce-pbac\data\backup\01042017>mongodump --db ecommercedb 
Restore the data
$:..>mongorestore ".... ...\ecommerce-pbac\data\backup\01042017\dump"

The front end of this project uses Bootstrap for UI and angularjs for communicating with the web-server via the http module.

Basic Data JSON data flow in the application is as follows:
 1. In places where there is a form (add,edit etc) we encapsulate the data in a JSON object and
 2. send this JSON object to the server side via the AngularJS http module.
 3. Here our server is NodeJS, NodeJS is just a runtime platform and needs to be told to behave as a express application.
 4. We need Express Framework because we need a framework on the server side to provide us with handles or implementations of objects like request(coming from the http module of AngularJS in this case), response for sending data back the browser.
 5. MongoDB is our data store, it is where we keep our data, once the JSON data is extracted from the request object it is then injected into mongodb as JSON itself using controllers which under the hood talk to database.

 All in all the data comes from browser in json and goes into the database as a JSON document, there is no need to translate the JSON object to any other serverside language, one language , one object format: be it client side or server side.

 AngularJS on the front end also helps bind data with html input elements there by reducing dom based access.

 The project also makes use of underscore library on the server side espcially during creation of policy.
</pre>