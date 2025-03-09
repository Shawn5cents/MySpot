# MySpot - Your Digital Hub

MySpot is a modern web application that serves as your personal digital hub. It provides a clean, intuitive interface for managing your digital life in one place.

## Features

- **Apps Section**: Integration with various web applications
    - Cloudy Weather App
    - Filic Express
    - Popz Place
    - Google Search
    - Navy Federal Bank
- **AI Tools Section**: Access to AI Assistants
    - Claude
    - Gemini
    - ChatGPT AI Assistants
- **Command Center**: Interact with AI and get responses
- **Settings**: Theme customization (Dark/Light Mode)
- **Search**: Basic search functionality
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript
- Font Awesome for icons

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/Shawn5cents/MySpot.git
   cd MySpot
   ```

2. Configure the application:
   - Copy `config.template.js` to `config.js`
   - Update the API keys in `config.js` with your own:
     - GEMINI_API_KEY for AI features
     - OPENWEATHER_API_KEY for weather functionality

3. Start the application:
   - For development:
     ```bash
     npx http-server . --port 8080
     ```
   - Or simply open `index.html` in your browser

4. Access MySpot at http://localhost:8080 (if using http-server)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request

### Development Guidelines

- Follow the existing code style and conventions
- Test your changes thoroughly
- Update documentation as needed
- Keep pull requests focused on a single feature or fix

## Project Structure

- `index.html` - Main HTML structure and styling
- `app.js` - JavaScript functionality for the application

## Future Enhancements

- Enhanced AI Command Center features
- More app integrations
- User-specific settings and customization
- Improved search functionality
- Advanced UI components and interactions

## License

MIT License

## Contact

For questions or feedback, please open an issue in this repository.