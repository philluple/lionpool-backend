# LionPool Backend

This repository contains the backend code for **LionPool**, an app designed to help Columbia University students coordinate shared rides to the airport. The backend handles user data, flight details, and travel coordination, ensuring smooth communication between the app and its data source.

### Features

- **User Management**: Create and store user profiles.
- **Flight Coordination**: Log upcoming flights and match users traveling to the airport at the same time.
- **Performance Optimizations**: Caching and database indexing to optimize performance and minimize reads/writes.

### Architecture

The backend follows a three-tier architecture:
- **Frontend**: Interacts with users via the LionPool app.
- **Backend Server**: Processes HTTP POST/GET requests and handles app logic.
- **Data Source**: Stores user and flight data using **Google's Firebase** and **Firestore**.

### Technologies Used

- **Node.js**: The backend is built using Node.js with the Express.js framework.
- **Google Cloud Platform (GCP)**: Hosted on a GCP Compute Engine (VM), where an instance of the backend is running.
- **Firebase/Firestore**: For data storage and real-time syncing.
- **Nginx**: Used for reverse proxy and routing requests.
- **SSL/TLS**: Secured with HTTPS using SSL/TLS certificates.

### Development

The backend was developed solely by **Phillip Le**. He designed and implemented the architecture, ensuring efficient communication between the app and data source.

### Setup

To run the backend locally:
1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Set up your environment variables (e.g., Firebase credentials, GCP settings).
4. Run the server using `npm start`.
