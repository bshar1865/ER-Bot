# Emulation Revival Bot

A Discord bot designed for the Emulation Revival server, built with Discord.js and TypeScript.

## Features

- **Command Support**:
  - Slash Commands support
  - Prefix Commands support
- **Event Handling** system
- **Database Integration** using better-sqlite3
- **TypeScript** for better code reliability and maintainability

## Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- A Discord Bot Token
- A Discord Application with proper intents enabled

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ER-Bot.git
   cd ER-Bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `example.env` to `.env`
   ```bash
   cp example.env .env
   ```
   - Fill in the required values:
     - `LoginID`: Your Discord bot token
     - `CLIENT_ID`: Your Discord application client ID
     - `MAIN_SERVER_ID`: Your main Discord server ID

4. **Build and Run**
   ```bash
   # Run in development mode
   npx ts-node index.ts
   ```

## Bot Configuration

The bot requires the following Discord intents:
- Guilds
- Guild Messages
- Direct Messages
- Message Content
- Guild Members

Make sure these are enabled in your Discord Developer Portal.

## Project Structure

```
ER-Bot/
├── events/           # Discord event handlers
├── prefix-commands/  # Traditional prefix-based commands
├── slash-commands/   # Discord slash commands
├── utils/           # Utility functions and helpers
├── index.ts         # Main bot file
├── types.ts         # TypeScript type definitions
└── idclass.ts       # ID management system
```

## Contributing

1. Fork the repository
2. Commit your changes
3. Push to the branch 
4. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Join the Emulation Revival Discord server
3. Create a new issue with detailed information about your problem

## Acknowledgments

- Discord.js team for the amazing library
- All contributors who help improve this bot
- The Emulation Revival community

---
Made with ❤️ for the Emulation Revival Discord server