### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON WEB TOKEN. A very compact, digitally signed token. Made up of Header (JSON object, wwith which algorithm it is encoded). payload - JSON object that contains the "claims" of the token, or the actual data.
  and Finally the signature: which I will answer in the next question

- What is the signature portion of the JWT?  What does it do?
  The signature contains the "secret" used to encode the data to base64. since the payload is encoded
  referencing the verify signature, the payload cannot be changed, as then the signature will respond invalid

- If a JWT is intercepted, can the attacker see what's inside the payload?
  not unless they have your secret key, which should be stored securely on your server. 


- How can you implement authentication with a JWT?  Describe how it works at a high level.



- Compare and contrast unit, integration and end-to-end tests.
  unit: tests individual functions
  integration: tests multiple function and that while interacting, they return the expected results
  end-to-end: Tests the whole app, checking something like user inputs, and that the results are the same as expected

- What is a mock? What are some things you would mock?
  A mock is used to simplify testing, especially when an object may be dependent on other parts of your application
  A mock replaces the original object in your function, allowing you to make less calls to an API, or to isolate functionality of your tests, making them more diagnostically useful. 

- What is continuous integration?
  When coding using the practice of CI, you frequently merge small code changes, and check your tests (perhaps add new tests). 

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development is the process of writing a test with an expectation BEFORE writing your function.
  It's main drawback is initial speed, especially on a simpler application. However, it is immensely useful on more complex applications, and even on simple ones, TDD will allow for simpler debugging, and will speed up the process overall. 

- What is the value of using JSONSchema for validation?
  using JSONSchema allows you to validate JSON data before sending it. If the data is invalid, it can be caught before the request is made. 


- What are some ways to decide which code to test?
    if it's:
      - a helper function that is being used many places through out the code
      - if it's a model, especially test methods within that model
    

- What does `RETURNING` do in SQL? When would you use it?
      - "RETURNING" cuts down on the amount of queries you need to make, especially when editing a databse
      - It can be added to the end of a query, and specify the values you want returned (usually the ones you just edited)

- What are some differences between Web Sockets and HTTP?
    - websockets allow for the SERVER to initiate a request. A user can establish connection to the server, then the server can do something like send data whenever the server is updated, as opposed to using http and a timer, to have a user consistently check for updates, which can strain the server as there are more users. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  Flask was a little simpler and more fluid for me UNTIL using the ORM SQLalchemy. I vastly prefer to be able to write SQL queries, or even build a simple lightweight ORM for node and express. While there's more lines to write, its much more readable code with the SQL queries integrated, and I found documentation to be easier to navigate, and more rescources from the community online when researching SQL or PSQL over sqlalchemy.


