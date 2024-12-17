// Функция для рендера контента
const renderContent = (path) => {
    const app = document.getElementById("app");

    // Простая маршрутизация
    const routes = {
        "/": "<h1>Welcome to the Home Page</h1>",
        "/about": "<h1>About Us</h1><p>This is the about page.</p>",
        "/contact": "<h1>Contact Us</h1><p>Email us at example@example.com</p>"
    };

    // Устанавливаем контент для текущего пути
    app.innerHTML = routes[path] || "<h1>404 Not Found</h1><p>Sorry, the page does not exist.</p>";
};

// Обработчик изменения маршрута
const navigate = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute("href");

    // Меняем URL без перезагрузки
    window.history.pushState({}, "", href);

    // Рендерим новый контент
    renderContent(href);
};

// Устанавливаем обработчик на ссылки
document.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
        navigate(event);
    }
});

// Обработка прямого перехода по URL
window.addEventListener("popstate", () => {
    renderContent(window.location.pathname);
});

// Начальный рендер
renderContent(window.location.pathname);
