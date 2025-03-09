// MySpot Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Initialize new components
    initWebApps();
    initAIAssistants();
    initCommandCenter();
});

function initApp() {
    // Initialize navigation
    initNavigation();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize card interactions
    initCardInteractions();
    
    // Initialize list item interactions
    initListItems();
    
    // Initialize theme toggle
    initThemeToggle();
    
    console.log('MySpot application initialized');
}

// Initialize navigation with smooth scrolling
function initNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                showNotification(`Navigating to ${this.textContent}`, 'info');
            }
        });
    });
}

function showEmailPreview() {
    // Create email preview container
    const previewContainer = document.createElement('div');
    previewContainer.className = 'email-preview';
    previewContainer.innerHTML = `
        <div style="
            background: var(--bg-secondary);
            border-radius: 8px;
            padding: 1.5rem;
            margin-top: 1rem;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            ">
                <h3>Email Preview</h3>
                <button onclick="window.open('https://gmail.com', '_blank')" 
                        style="
                            background: var(--gmail-color);
                            color: white;
                            border: none;
                            padding: 0.5rem 1rem;
                            border-radius: 4px;
                            cursor: pointer;
                        ">
                    Open Gmail
                </button>
            </div>
            <div style="
                display: grid;
                gap: 1rem;
            ">
                <div style="
                    background: var(--bg-tertiary);
                    padding: 1rem;
                    border-radius: 4px;
                    border-left: 4px solid var(--gmail-color);
                ">
                    <div style="font-weight: bold;">Project Update</div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">From: Sarah Johnson</div>
                    <div style="color: var(--text-secondary); margin-top: 0.5rem;">Latest changes to the dashboard design...</div>
                </div>
                <div style="
                    background: var(--bg-tertiary);
                    padding: 1rem;
                    border-radius: 4px;
                    border-left: 4px solid var(--warning);
                ">
                    <div style="font-weight: bold;">Budget Review Meeting</div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">From: Finance Team</div>
                    <div style="color: var(--text-secondary); margin-top: 0.5rem;">Quarterly budget review scheduled for...</div>
                </div>
                <div style="
                    background: var(--bg-tertiary);
                    padding: 1rem;
                    border-radius: 4px;
                    border-left: 4px solid var(--info);
                ">
                    <div style="font-weight: bold;">Weekly Newsletter</div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">From: Company Updates</div>
                    <div style="color: var(--text-secondary); margin-top: 0.5rem;">This week's highlights and announcements...</div>
                </div>
            </div>
        </div>
    `;

    // Add preview to the command response
    const responseContainer = document.querySelector('.command-response');
    responseContainer.appendChild(previewContainer);
}

// Initialize Web Applications
function initWebApps() {
    const webAppCards = document.querySelectorAll('.web-app-card');
    
    webAppCards.forEach(card => {
        const launchBtn = card.querySelector('.launch-btn');
        const appTitle = card.querySelector('.card-title').textContent;
        
        // Handle card click
        card.addEventListener('click', function(e) {
            // Don't trigger if the launch button was clicked
            if (e.target.closest('.launch-btn')) return;
            
            if (appTitle === 'Cloudy') {
                window.open('https://cloudy-2cj.pages.dev/', '_blank');
            } else if (appTitle === 'Filic Express') {
                window.open('https://www.filicexpress.com/drivers/index.php', '_blank');
            } else if (appTitle === 'RocketMoney') {
                window.open('https://www.rocketmoney.com/', '_blank');
            }
            showNotification(`Opening ${appTitle}`, 'success');
        });
        
        // Handle launch button click
        if (launchBtn) {
            launchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification(`Launching ${appTitle}`, 'success');
            });
        }
    });
}

// Initialize AI Assistants
function initAIAssistants() {
    const aiCards = document.querySelectorAll('.ai-assistant-card');
    
    aiCards.forEach(card => {
        const launchBtn = card.querySelector('.launch-btn');
        const aiTitle = card.querySelector('.card-title').textContent;

        const appURL = {
            'Claude': '#', // Replace with actual Claude URL if available
            'Gemini': '#', // Replace with actual Gemini URL if available
            'ChatGPT': '#'  // Replace with actual ChatGPT URL if available
        };

        // Handle launch button click
        launchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`Launching ${aiTitle}`);
            
            if (appURL[aiTitle]) {
                window.open(appURL[aiTitle], '_blank');
                showNotification(`Launching ${aiTitle}`, 'success');
            } else if (aiTitle === 'Gemini') {
                // Show the command center for Gemini
                const commandCenter = document.querySelector('.command-center');
                commandCenter.style.display = 'block';
                commandCenter.scrollIntoView({ behavior: 'smooth' });
                showNotification('Gemini AI ready to help', 'success');
            }
             else {
                showNotification(`${aiTitle} integration coming soon`, 'info');
            }
        });

        // Handle card click
        card.addEventListener('click', function(e) {
            // Don't trigger if the launch button was clicked
            if (e.target.closest('.launch-btn')) return;
            
            console.log(`AI assistant clicked: ${aiTitle}`);
            showNotification(`Opening ${aiTitle}`, 'info');
        });
    });
}

// Initialize Command Center
function initCommandCenter() {
    const commandInput = document.querySelector('.command-input input');
    const commandButton = document.querySelector('.command-input button');
    
    commandButton.addEventListener('click', function() {
        processCommand(commandInput.value);
    });
    
    commandInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processCommand(commandInput.value);
        }
    });
}

// API keys and configuration are loaded from config.js
const GEMINI_API_KEY = window.config.GEMINI_API_KEY;
const MODEL_NAME = window.config.MODEL_NAME;
const OPENWEATHER_API_KEY = window.config.OPENWEATHER_API_KEY;

async function processCommand(command) {
    if (!command.trim()) {
        showNotification('Please enter a command', 'warning');
        return;
    }
    
    console.log('Processing command:', command);
    showNotification(`Processing: "${command}"`, 'info');
    
    const responseContainer = document.querySelector('.command-response');
    responseContainer.innerHTML = `
        <div class="loading">
            <h3>Processing your request...</h3>
        </div>
    `;

    try {
        if (command.toLowerCase().includes('weather')) {
            await getWeather(responseContainer);
        } else if (command.toLowerCase().includes('calendar')) {
            updateCommandResponse('calendar');
        } else if (command.toLowerCase().includes('email')) {
            updateCommandResponse('email');
        } else if (command.toLowerCase().includes('drive') || command.toLowerCase().includes('files')) {
            updateCommandResponse('drive');
        } else {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: command
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 1024,
                        topK: 40,
                        topP: 0.95
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid response format from API');
            }

            const generatedText = data.candidates[0].content.parts[0].text;
            responseContainer.innerHTML = `
                <h3>Response:</h3>
                <div class="ai-response">${formatResponse(generatedText)}</div>
            `;
        }
        showNotification('Response received', 'success');
    } catch (error) {
        console.error('Error:', error);
        responseContainer.innerHTML = `
            <h3>Error</h3>
            <p>Sorry, I couldn't process your request: ${error.message}</p>
        `;
        showNotification('Error processing request', 'warning');
    }
}

function updateCommandResponse(type) {
    const responseContainer = document.querySelector('.command-response');
    
    // Get today's date for calendar events
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);
    
    switch(type) {
        case 'calendar':
            responseContainer.innerHTML = `
                <h3>Your Calendar for ${dateString}:</h3>
                <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <div style="border-left: 4px solid var(--calendar-color); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">10:00 AM - Project Horizon Kickoff</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Virtual Meeting - Zoom</div>
                    </div>
                    <div style="border-left: 4px solid var(--info); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">1:30 PM - Lunch with Alex</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Fusion Bistro</div>
                    </div>
                    <div style="border-left: 4px solid var(--success); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">4:00 PM - Quarterly Review</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Conference Room A</div>
                    </div>
                </div>
                <div style="margin-top: 1rem;">
                    <button onclick="window.open('https://calendar.google.com/calendar/u/0/r?pli=1', '_blank')"
                            style="background: var(--calendar-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
                        Open in Google Calendar
                    </button>
                </div>
            `;
            break;
        case 'email':
            responseContainer.innerHTML = `
                <h3>Recent Emails:</h3>
                <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <div style="border-left: 4px solid var(--gmail-color); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">Project Update from Sarah</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">10 minutes ago</div>
                    </div>
                    <div style="border-left: 4px solid var(--warning); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">Meeting Invitation: Budget Review</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">1 hour ago</div>
                    </div>
                    <div style="border-left: 4px solid var(--info); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">Weekly Newsletter</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">3 hours ago</div>
                    </div>
                </div>
                <div style="margin-top: 1rem;">
                    <button onclick="window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox', '_blank')"
                            style="background: var(--gmail-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
                        Open Gmail
                    </button>
                </div>
            `;
            break;
        case 'drive':
            responseContainer.innerHTML = `
                <h3>Recent Files:</h3>
                <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <div style="border-left: 4px solid var(--drive-color); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">Project Proposal.docx</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Modified 2 hours ago</div>
                    </div>
                    <div style="border-left: 4px solid var(--drive-color); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">Q1 Results.xlsx</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Modified yesterday</div>
                    </div>
                    <div style="border-left: 4px solid var(--drive-color); padding: 0.5rem 1rem; margin: 0.5rem 0;">
                        <div style="font-weight: bold;">Team Meeting Notes.pdf</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Modified 2 days ago</div>
                    </div>
                </div>
                <div style="margin-top: 1rem;">
                    <button onclick="window.open('https://drive.google.com', '_blank')" 
                            style="background: var(--drive-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
                        Open Google Drive
                    </button>
                </div>
            `;
            break;
        default:
            responseContainer.innerHTML = `
                <h3>I'm not sure how to help with that.</h3>
                <p>Try asking about your calendar, emails, or the weather.</p>
            `;
    }
    
    showNotification('Information retrieved successfully', 'success');
}

// Get background color based on temperature
function getTempColor(tempC) {
    if (tempC <= 0) return '#3498db';  // Cold blue
    if (tempC <= 10) return '#5faee3';  // Cool blue
    if (tempC <= 20) return '#87ceeb';  // Sky blue
    if (tempC <= 25) return '#98fb98';  // Light green
    if (tempC <= 30) return '#ffa07a';  // Light salmon
    return '#ff6b6b';  // Warm red
}

async function getWeather(responseContainer) {
    try {
        // Get user's location using browser geolocation
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error(`Weather API request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Convert temperature to both Celsius and Fahrenheit
        const tempC = Math.round(data.main.temp);
        const tempF = Math.round((tempC * 9/5) + 32);
        
        // Get weather icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
        
        // Get background color based on temperature
        const bgColor = getTempColor(tempC);
        
        // Format weather data with Cloudy app styling
        responseContainer.innerHTML = `
            <div style="
                background: ${bgColor};
                padding: 2rem;
                border-radius: 15px;
                text-align: center;
                color: white;
                transition: background 0.3s ease;
            ">
                <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">${data.name}</h2>
                <img src="${iconUrl}" alt="${data.weather[0].description}" style="width: 100px; height: 100px;">
                <div style="font-size: 3rem; font-weight: bold; margin: 1rem 0;">
                    ${tempF}°F
                </div>
                <div style="font-size: 1.2rem; margin: 0.5rem 0; text-transform: capitalize;">
                    ${data.weather[0].description}
                </div>
                <div style="
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    margin-top: 2rem;
                    font-size: 0.9rem;
                ">
                    <div>
                        <i class="fas fa-thermometer-half"></i>
                        <div>Feels like</div>
                        <div>${Math.round((data.main.feels_like * 9/5) + 32)}°F</div>
                    </div>
                    <div>
                        <i class="fas fa-tint"></i>
                        <div>Humidity</div>
                        <div>${data.main.humidity}%</div>
                    </div>
                    <div>
                        <i class="fas fa-wind"></i>
                        <div>Wind</div>
                        <div>${Math.round(data.wind.speed * 2.237)} mph</div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        if (error.code === 1) { // GeolocationPositionError.PERMISSION_DENIED
            responseContainer.innerHTML = `
                <h3>Location Access Required</h3>
                <p>Please allow access to your location to get weather information.</p>
            `;
        } else {
            responseContainer.innerHTML = `
                <h3>Error</h3>
                <p>Sorry, I couldn't fetch the weather data: ${error.message}</p>
            `;
        }
        throw error; // Re-throw to be caught by the calling function
    }
}

function formatResponse(text) {
    // Handle code blocks first
    text = text.replace(/```([^`]*?)```/g, (match, code) => {
        return `<pre><code>${escapeHtml(code.trim())}</code></pre>`;
    });

    // Handle inline code
    text = text.replace(/`([^`]+)`/g, (match, code) => {
        return `<code>${escapeHtml(code)}</code>`;
    });

    // Handle other markdown formatting
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^- (.+)$/gm, '• $1'); // Convert markdown lists to bullets
}

function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    // Search button click event
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    // Enter key press in search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

function performSearch(query) {
    if (!query.trim()) {
        // If search query is empty, show a notification
        showNotification('Please enter a search term', 'warning');
        return;
    }
    
    console.log('Searching for:', query);
    // Here you would typically make an API call or search through local data
    // For now, we'll just show a notification
    showNotification(`Searching for "${query}"`, 'info');
    
    // Simulate search results after a delay
    setTimeout(() => {
        showNotification('Search completed!', 'success');
    }, 1500);
}

function initCardInteractions() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Add click event to cards
        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('.card-title').textContent;
            console.log(`Card clicked: ${cardTitle}`);
            
            // Here you would typically navigate to a detailed view or perform an action
            // For now, we'll just show a notification
            showNotification(`Opening ${cardTitle}`, 'info');
        });
    });
}

function initListItems() {
    const listItems = document.querySelectorAll('.list-item');
    
    listItems.forEach(item => {
        // Add click event to list items
        item.addEventListener('click', function() {
            const itemTitle = this.querySelector('.list-item-title').textContent;
            console.log(`List item clicked: ${itemTitle}`);
            
            // Here you would typically navigate to a detailed view or perform an action
            // For now, we'll just show a notification
            showNotification(`Opening ${itemTitle}`, 'info');
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="close-btn">&times;</button>
        </div>
    `;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: 'var(--card-shadow)',
        zIndex: '1000',
        maxWidth: '300px',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'opacity 0.3s, transform 0.3s',
        borderLeft: type === 'success' ? '4px solid var(--success)' :
                   type === 'warning' ? '4px solid var(--warning)' :
                   '4px solid var(--info)'
    });
    
    // Style the notification content
    const notificationContent = notification.querySelector('.notification-content');
    Object.assign(notificationContent.style, {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    });
    
    // Style the close button
    const closeBtn = notification.querySelector('.close-btn');
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        color: 'var(--text-secondary)',
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginLeft: '10px'
    });
    
    // Add close button event
    closeBtn.addEventListener('click', function() {
        closeNotification(notification);
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

function closeNotification(notification) {
    // Animate out
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    
    // Remove from DOM after animation
    setTimeout(() => {
        if (notification.parentElement) {
            notification.parentElement.removeChild(notification);
        }
    }, 300);
}

// Add theme toggle functionality
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    // Save preference to localStorage
    const isDarkMode = !body.classList.contains('light-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    showNotification(`${isDarkMode ? 'Dark' : 'Light'} mode enabled`, 'info');
}

// Check for saved theme preference
function checkThemePreference() {
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === 'false') {
        document.body.classList.add('light-mode');
    }
}

// Call theme check on load
checkThemePreference();

// Initialize theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDarkMode();
            
            // Update icon based on theme
            const icon = this.querySelector('i');
            if (document.body.classList.contains('light-mode')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });
        
        // Set initial icon based on current theme
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.className = 'fas fa-sun';
        }
    }
}