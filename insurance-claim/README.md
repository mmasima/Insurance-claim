# Insurance-Claim Mobile App

An Ionic Angular application for managing insurance claims. This app allows users to log in, sign up, and manage houses with features to add, view, and delete houses. The backend is powered by PHP and requires Docker to run.

## Features

### Authentication
- **Login:** Securely log in to access the app
- **Signup:** Create a new account with email and password

### House Management
- Add new houses with details:
  - Address
  - Description
  - Geolocation coordinates
- Upload and manage damage images for each house
- View list of all registered houses
- Delete houses from your inventory

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)
- Docker and Docker Compose
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/mmasima/Insurance-claim.git
cd insurance-claim
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
# For web development
ionic serve
# OR
npm start
```

### Mobile Development Setup

1. Add mobile platforms:
```bash
# Add Android platform
ionic cap add android

# Add iOS platform (macOS only)
ionic cap add ios
```

2. Build the project:
```bash
ionic build
```

3. Sync the build with mobile platforms:
```bash
ionic cap sync
```

4. Open in native IDEs:
```bash
# Open in Android Studio
ionic cap open android

# Open in Xcode (macOS only)
ionic cap open ios
```

### Running on Physical Devices

1. Connect your device via USB

2. Enable USB debugging (Android) or trust your computer (iOS)

3. Run the app:
```bash
# For Android
ionic cap run android -l --external

# For iOS
ionic cap run ios -l --external
```

## Backend Setup

The backend is a separate PHP project that needs to be running before making API calls.

1. Clone the backend repository (if separate):
```bash
git clone [https://github.com/mmasima/insurance_claim_backend.git]
```

2. Start the Docker containers:
```bash
docker-compose up -d
```

The API will be available at `http://localhost:8080`

## Environment Configuration

Create a `.env` file in the root directory:
```env
API_URL=http://localhost:8080/api
```

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run lint` - Run linting
- `ionic cap sync` - Sync the build with mobile platforms



1. **API Connection Issues**
   - Ensure the backend Docker containers are running
   - Check if the API URL in the environment file is correct
   - Verify network connectivity




## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact


Project Link: [https://github.com/mmasima/Insurance-claim](https://github.com/mmasima/Insurance-claim)
