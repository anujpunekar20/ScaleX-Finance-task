# Backend API for Price and Volume Data

This is a Node.js/Express.js backend API for fetching price and volume data from a MongoDB database. It provides endpoints to retrieve price and volume from the database, with proper validation and error handling.

## Endpoints

### Data Operations

- **POST - localhost:port/api/data**: Creates a new data record.
- **GET - localhost:port/api/data**: Retrieves all data records.
- **GET - localhost:port/api/data/:id**: Retrieves a specific data record by ID.
- **PATCH - localhost:port/api/data/:id**: Updates a specific data record by ID.
- **DELETE - localhost:port/api/data/:id**: Deletes a specific data record by ID.

### Price Data

- **GET - localhost:port/api/data/:id/price**: Retrieves price data for a specific data record by ID.

### Volume Data

- **GET - localhost:port/api/data/:id/volume**: Retrieves volume data for a specific data record by ID.

### Price and Volume Data

- **GET - localhost:port/api/data/:id/price-volume**: Retrieves both price and volume data for a specific data record by ID.

### Containerization (using docker)
- To run the app using a container:
&nbsp;&nbsp;<br>- Use ***docker-compose build*** to build the docker image.
&nbsp;&nbsp;<br>- ***docker-compose up*** command to start the container
&nbsp;&nbsp;<br>- You will have to add the connection string to the environment variables

### Note 

- The `.env` file containing sensitive information such as API keys, passwords, and connection strings is not included in this repository. Before running the application, ensure that you create your own `.env` file locally with the required environment variables.
