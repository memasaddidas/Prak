const fs = require('fs');
const path = require('path');

const files = ['index.html', 'catalog.html', 'cats.html', 'dogs.html', 'rodents.html', 'birds.html'];

const headerRegex = /<header class="header">[\s\S]*?<\/header>/;
const footerRegex = /<footer class="footer">[\s\S]*?<\/footer>/;
const backBtnRegex = /<div style="display: flex; margin-bottom: 40px;">[\s\S]*?<\/div>/;

function getHeader(page) {
    const isIndex = page === 'index.html';
    const isCatalog = page === 'catalog.html';
    
    let middleContent = '';
    
    if (isIndex) {
        middleContent = '<a href="catalog.html" class="catalog-btn" style="background-color: #00AEEF; color: #F2853D; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-size: 46px; border: none; border-radius: 30px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">Каталог</a>';
    } else if (isCatalog) {
        middleContent = '<div style="width: 300px;"></div>';
    } else {
        let img = "";
        let title = "";
        if (page === 'cats.html') {
            img = "../Макет сайта Пуховой/Картинки/Кошка для каталога.jpg";
            title = "Товары для кошек";
        } else if (page === 'dogs.html') {
            img = "../Макет сайта Пуховой/Картинки/Собака.jpg";
            title = "Товары для собак";
        } else if (page === 'rodents.html') {
            img = "../Макет сайта Пуховой/Картинки/Морская свинка.jpg";
            title = "Товары для грызунов";
        } else if (page === 'birds.html') {
            img = "../Макет сайта Пуховой/Картинки/Попугай.jpg";
            title = "Товары для птиц";
        }
        
        middleContent = `
                <div class="category-header-info" style="display: flex; align-items: center; justify-content: center; gap: 20px;">
                    <img src="${img}" alt="${title}" class="category-header-img" style="width: 150px; height: 100px; object-fit: cover; border: 4px solid #F2853D; border-radius: 20px;">
                    <h2 style="font-family: 'Times New Roman', Times, serif; font-size: 40px; font-weight: bold; color: #00AEEF; max-width: 250px; text-align: center; line-height: 1.1;">${title}</h2>
                </div>`;
    }

    // Align links EXACTLY under the phone number
    const links = `
                        <a href="#" class="link-company" style="font-family: 'Times New Roman', Times, serif;">О компании</a>
                        <a href="#" class="link-news" style="color: #F2853D; font-family: 'Times New Roman', Times, serif;">Новости</a>`;

    return `        <header class="header">
            <div class="header-container" style="display: flex; justify-content: space-between; align-items: center;">
                <a href="index.html" class="logo-section" style="text-decoration: none; color: inherit;">
                    <img src="../Макет сайта Пуховой/Картинки/лого.png" alt="Рыба Ёж" class="logo-img">
                    <div class="logo-text">
                        <span class="logo-ryba">Рыба</span> <span class="logo-ezh">ЁЖ</span>
                    </div>
                </a>
                
                ${middleContent}
                
                <div class="contacts-section" style="display: flex; flex-direction: column; align-items: flex-start; gap: 5px; margin-top: 30px;">
                    <div class="phone">8 (800) 555-35-35</div>
                    <div class="links">
                        ${links}
                    </div>
                </div>
                
                <div class="auth-section">
                    <div class="auth-item">
                        <img src="../Макет сайта Пуховой/Кнопки/Вход.png" alt="Профиль" class="icon-profile">
                        <a href="#">Войти</a>
                    </div>
                    <div class="auth-item">
                        <a href="#">Регистрация</a>
                    </div>
                </div>
                
                <div class="cart-section">
                    <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="Cart" class="icon-cart">
                    <span class="cart-total">0 руб.</span>
                </div>
            </div>
        </header>`;
}

const footerContent = `        <footer class="footer">
            <div class="footer-container">
                <div class="social-title">Мы в соцсетях:</div>
                <div class="footer-content">
                    <div class="footer-phone">8 (800) 555-35-35</div>
                    <div class="social-icons">
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/Телеграмм.png" alt="Telegram"></a>
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/ВКонтакте.png" alt="VK"></a>
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/Дзен.png" alt="Zen"></a>
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/Одноклассники.png" alt="OK"></a>
                    </div>
                    <div class="footer-credits">
                        Работает на UMI.CMS<br>
                        ИП Шеремет Э.О ИНН 401109946472
                    </div>
                </div>
            </div>
        </footer>`;

const backBtn = `            <div style="display: flex; margin-bottom: 20px;">
                <a href="catalog.html" class="catalog-btn" style="padding: 10px 45px; border-radius: 10px; margin-top: 10px;">Назад</a>
            </div>`;

files.forEach(file => {
    const filePath = path.join('/site', file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    content = content.replace(headerRegex, getHeader(file));
    content = content.replace(footerRegex, footerContent);
    
    // Fix back button on category pages
    if (['cats.html', 'dogs.html', 'rodents.html', 'birds.html'].includes(file)) {
        if (backBtnRegex.test(content)) {
            content = content.replace(backBtnRegex, backBtn);
        } else {
            // insert it right after <main class="main-content">
            content = content.replace(/<main class="main-content">/, '<main class="main-content">\n' + backBtn);
        }
    }
    
    // Replace all icon paths for buy buttons to use the current correct icon
    content = content.replace(/<img src="\.\.\/Макет сайта Пуховой\/Кнопки\/Корзина\.png" alt="Cart" class="icon-buy">/g, '<img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="" class="icon-buy">');
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Site restored to user specifications.");
