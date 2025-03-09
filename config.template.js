// Configuration settings template
// Copy this file to config.js and replace the placeholder values with your actual API keys
// In production, these will be overridden by environment variables set in Cloudflare Pages
const config = {
    GEMINI_API_KEY: window.GEMINI_API_KEY || 'your_gemini_api_key_here',
    MODEL_NAME: 'gemini-2.0-flash',
    OPENWEATHER_API_KEY: window.OPENWEATHER_API_KEY || 'your_openweather_api_key_here'
};