import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center">Blogs</h1>
      <div className="blogs mb-5 container mt-5">
        <div className="blog">
          <h3>
            Question 1: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </h3>
          <p>
            Answer: Access Token and Refresh Token are commonly used in
            authentication systems. An access token is a credential that is used
            to access protected resources on behalf of a user or client
            application. It is typically a short-lived token with an expiration
            time. When a user logs in or authenticates, an access token is
            generated and provided to the client. The client includes the access
            token in each subsequent request to access protected API endpoints
            or resources. <br></br> <br></br> 
            A refresh token is a long-lived token that is used to
            obtain a new access token when the current access token expires.
            Unlike access tokens, refresh tokens are not sent with each request.
            Instead, they are securely stored on the client-side and exchanged
            for a new access token when needed. Refresh tokens are typically
            used to extend the users session and avoid repeated authentication.
            Access tokens should be stored securely and are commonly kept in
            memory or within a short-lived storage mechanism (e.g., Redux store
            or state). Refresh tokens, being long-lived and more sensitive,
            require more secure storage. They are typically stored in an
            HTTP-only cookie or a secure local storage mechanism with
            appropriate measures to prevent cross-site scripting (XSS) attacks.
          </p>
        </div>
        <div className="blog">
          <h3>Question 2: Compare SQL and NoSQL databases?</h3>
          <p>
            Answer: SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems that differ in their data models, storage mechanisms, query languages, and use cases. 
            SQL databases follow a structured data model based on tables with predefined schemas. NoSQL databases offer various data models such as key-value, document, columnar, and graph. They provide flexible schemas, allowing for dynamic and unstructured data.
            <br></br> <br></br> 
            SQL databases traditionally scale vertically, meaning they can handle increased workload by upgrading hardware resources (CPU, memory, etc.). They often have limitations on scaling horizontally across multiple servers. NoSQL databases are designed for horizontal scalability. They can easily distribute data across multiple servers, allowing for seamless scaling to handle large amounts of data and high traffic loads.
            <br></br> <br></br> 
            SQL databases use the SQL query language, which is a standardized language for managing and querying relational databases. SQL provides powerful querying capabilities, including joins, aggregations, and complex operations. NoSQL databases have diverse query languages specific to their data models. For example, key-value stores use simple get and put operations, document databases use query languages similar to JSON, and graph databases use graph traversal languages.
            <br></br> <br></br> 
            SQL databases, particularly relational databases, prioritize ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and transactional consistency. NoSQL databases may sacrifice some ACID properties for improved scalability and performance. They often provide eventual consistency, allowing for looser consistency guarantees.
          </p>
        </div>
        <div className="blog">
          <h3>Question 3: What is express js? What is Nest JS?</h3>
          <p>
            Answer: Express.js is a popular and minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is known for its unopinionated approach. <br></br> <br></br> 

            Express.js enables developers to define routes for handling HTTP requests, including GET, POST, PUT, DELETE, etc. It provides an intuitive and flexible routing system to handle different endpoints and HTTP methods. Express.js uses middleware functions to handle various operations in the request-response cycle. Middleware functions can perform tasks such as logging, authentication, data parsing, error handling, and more. Express.js allows for easy integration of third-party middleware or the creation of custom middleware. Express.js supports various template engines, such as EJS, Pug (formerly Jade), Handlebars, and Mustache. These template engines facilitate server-side rendering of dynamic web pages. <br></br> <br></br> 
            
            On the other hand, NestJS promotes a modular and organized approach to building applications. It provides a powerful module system that helps structure the application into reusable and self-contained modules, making it easier to manage dependencies and promote code reusability. NestJS uses decorators extensively to define routes, middleware, services, controllers, and other application components. It also utilizes dependency injection to manage the dependencies between these components, making it easier to write testable and maintainable code. NestJS introduces the concept of controllers to handle incoming requests and produce responses. Controllers are responsible for defining routes and handling HTTP requests. Providers, including services and repositories, handle the business logic and data access within the application.
          </p>
        </div>
        <div className="blog">
          <h3>Question 4: What is MongoDB aggregate and how does it work?</h3>
          <p>
            Answer: In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and analyze data from multiple documents, combining, transforming, and filtering the data to generate meaningful results. The aggregate method takes an array of stages as its parameter. Each stage defines a specific operation or transformation to be applied to the documents in the collection.<br></br> <br></br> 
             
            The $match stage filters the documents based on specified criteria, similar to the find method. It uses MongoDBs query language to match documents that meet the specified conditions. The $group stage groups the documents based on a specified key and applies aggregate functions to calculate aggregated values. It allows you to perform operations like counting, summing, averaging, and finding the maximum or minimum values within each group. The $project stage is used to reshape or transform the documents by specifying which fields to include or exclude, renaming fields, or adding computed fields. It helps in creating a new shape for the output documents. The $sort stage sorts the documents based on one or more fields, either in ascending or descending order. The $limit stage restricts the number of documents returned in the result set to a specified limit. The $skip stage allows you to skip a specified number of documents in the result set. And many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
