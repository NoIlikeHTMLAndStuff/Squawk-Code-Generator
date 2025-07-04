# Aviation Squawk Code Generator

A professional web application for generating valid aviation squawk codes (transponder codes) for training and educational purposes.

## Features

- 🛩️ **Valid Code Generation**: Creates 4-digit octal codes (0-7 digits only)
- 🚨 **Emergency Code Protection**: Automatically excludes emergency codes (7500, 7600, 7700)
- ⏰ **Automatic Expiry**: Codes expire after 10 minutes to prevent conflicts
- 📋 **Copy to Clipboard**: One-click copying with visual confirmation
- 🌙 **Dark/Light Mode**: Smooth theme switching with enhanced transitions
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 📊 **Real-time History**: Live tracking of active codes with countdown timers

## Technology Stack

- **Frontend**: React with TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js with Express, PostgreSQL database
- **UI Components**: Radix UI with shadcn/ui styling
- **Database**: Neon Database (serverless PostgreSQL)

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - `DATABASE_URL`: PostgreSQL connection string

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to `http://localhost:5000`

## Usage

1. **Generate Codes**: Click "Generate New Code" to create a valid squawk code
2. **View History**: Check the "Active Codes" tab to see all current codes with timers
3. **Copy Codes**: Click the copy button to copy codes to your clipboard
4. **Clear All**: Use "Clear All" to remove all active codes at once

## Safety & Compliance

- All generated codes comply with aviation standards
- Emergency codes (7500, 7600, 7700) are never generated
- Codes use only valid octal digits (0-7)
- Automatic expiry prevents code conflicts

## Credits & Attribution

**Created by isandstuff** © 2025

This project is designed for aviation training, simulation, and educational purposes. The attribution and credits are protected components that must remain intact in all versions and distributions.

## License

This project is open source but requires attribution to be preserved. When using or modifying this code:

1. Keep all credit attributions intact
2. Maintain the "Made by isandstuff" attribution in the application
3. Include this README with proper attribution

## Contributing

Contributions are welcome! Please ensure that:
- All attribution remains intact
- Code follows the established patterns
- New features maintain aviation safety standards
- Tests are included for new functionality

## Support

For questions about aviation squawk codes or this application, please refer to official aviation documentation and training materials.

---

**Important**: This tool is for educational and training purposes only. Always follow official aviation procedures and regulations in real-world scenarios.