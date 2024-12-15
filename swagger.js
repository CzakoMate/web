import swaggerAutogen from "swagger-autogen";
const doc = {
  info: {
    title: "Flowers API",
    version: "1.0.0",
    description: "Flowers API",
  },
  host: "localhost:3000",
  basePath: "/api/flowers",
};
const routes = ["./routes/flowers.js"];
const outputFile = "./swagger-output.json";
swaggerAutogen(outputFile, routes, doc);
