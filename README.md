# Backend API for Price and Volume Data

This is a Node.js/Express.js backend API for fetching price and volume data from a MongoDB database. It provides endpoints to retrieve price and volume from the database, with proper validation and error handling.

## Endpoints

### Data Operations

- **POST /data**: Creates a new data record.
- **GET /data**: Retrieves all data records.
- **GET /data/:id**: Retrieves a specific data record by ID.
- **PATCH /data/:id**: Updates a specific data record by ID.
- **DELETE /data/:id**: Deletes a specific data record by ID.

### Price Data

- **GET /data/:id/price**: Retrieves price data for a specific data record by ID.

### Volume Data

- **GET /data/:id/volume**: Retrieves volume data for a specific data record by ID.

### Price and Volume Data

- **GET /data/:id/price-volume**: Retrieves both price and volume data for a specific data record by ID.
