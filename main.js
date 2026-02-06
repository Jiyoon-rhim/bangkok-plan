document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to set the theme
  const setTheme = (isDarkMode) => {
    if (isDarkMode) {
      body.classList.add('dark-mode');
      themeToggle.textContent = '☀️'; // Sun icon for light mode
      themeToggle.setAttribute('aria-label', 'Toggle light mode');
    } else {
      body.classList.remove('dark-mode');
      themeToggle.textContent = '🌙'; // Moon icon for dark mode
      themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    }
  };

  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    // Check system preference
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode);
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    setTheme(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  });
});
