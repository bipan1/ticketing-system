# Events and Tickets

Welcome to **Events and Tickets**! 🎉 This project aims to provide a seamless experience for creating events and managing ticket bookings.

## Overview
This application leverages modern web technologies, including **Next.js, Kafka, and AWS services**, to deliver a robust and scalable solution for event management.

## Features
- **Event Creation**: Create and manage events with detailed information such as title, description, date, time, location, and more.
- **Ticket Booking**: Users can easily book tickets for events, with real-time updates and notifications.
- **User Authentication**: Secure user authentication and authorization mechanisms.
- **Data Management**: Efficient data handling using Kafka for event streaming and AWS services for storage and processing.

## Technology Stack
- **Frontend**: Next.js for server-side rendering and React for a dynamic user interface.
- **Backend**: Kafka for event streaming, AWS services (e.g., Lambda, DynamoDB, S3) for scalable backend.
- **Database**: Prisma ORM for database management and interactions.
- **Authentication**: NextAuth.js for user authentication and session management.
- **Styling**: Tailwind CSS for a responsive and modern design.

## Installation
To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bipan1/ticketing-system.git
   cd ticketing-system
    ```
   
2. Intall Dependencies
   ```bash
   npm install
   ```
   
3. Configure Environment Variables: Create a .env.local file in the project root and add the necessary environment variables:
   ```bash
    DATABASE_URL="your-database-url"
    NEXTAUTH_URL="http://localhost:3000"
    GOOGLE_CLIENT_ID=""
    GOOGLE_CLIENT_SECRET=""
    NEXTAUTH_SECRET=""
   ```

4. Run the Application:
   ```bash
   npm run dev
   ```

## Roadmap
This project is in active development 🚀. Here are some of the upcoming features you can expect:

- [ ] **User Profiles**: Users can create and customize their profiles.
- [ ] **Event Search**: Advanced search functionality for finding events.
- [ ] **Notifications**: Real-time notifications for event updates and ticket bookings.
- [ ] **Payment Integration**: Secure payment processing for ticket bookings.
- [ ] **Admin Dashboard**: A comprehensive dashboard for event organizers to manage events and bookings.

## Contributing
   Contributions are welcome! Feel free to open an issue or submit a pull request with improvements or new features.
