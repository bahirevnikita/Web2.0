const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const restAPI = require("./router/rest");
const dbAPI = require("./controllers/controller");

const swaggerSpec = require("./swagger");

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://127.0.0.1:3000",
        },
      ],
    },
    apis: ["./controllers/controller.js"],
  };
  
  const specs = swaggerJsdoc(options);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );
  
app.get('/fetch', (req,res) => {
  res.sendFile(__dirname + '/public/fetch.html')
})

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.static('public'));
app.use('/v1', restAPI);
app.use('/db', dbAPI);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use(function (err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({ message: message });
})

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
})