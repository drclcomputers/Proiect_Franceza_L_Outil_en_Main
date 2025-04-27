function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const button = document.querySelector('.theme-toggle');
    button.textContent = `Mode ${newTheme === 'dark' ? 'clair' : 'sombre'}`;
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const button = document.querySelector('.theme-toggle');
    button.textContent = `Mode ${savedTheme === 'dark' ? 'clair' : 'sombre'}`;
}

document.addEventListener('DOMContentLoaded', initTheme);