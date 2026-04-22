import os
import re

files = ['index.html', 'catalog.html', 'cats.html', 'dogs.html', 'rodents.html']

header_pattern = re.compile(r'<header class="header">.*?</header>', re.DOTALL)
footer_pattern = re.compile(r'<footer class="footer">.*?</footer>', re.DOTALL)

def get_header(page):
    is_index = page == 'index.html'
    
    middle_content = ''
    if is_index:
        middle_content = '<a href="catalog.html" class="catalog-btn">Каталог</a>'
    else:
        # Placeholder or specific category info
        # For simplicity, I'll keep the existing one if it exists or use a default one
        # Let's try to detect if it's a category page
        if page in ['cats.html', 'dogs.html', 'rodents.html']:
            img = ""
            title = ""
            if page == 'cats.html':
                img = "../Макет сайта Пуховой/Картинки/Кошка для каталога.jpg"
                title = "Товары для кошек"
            elif page == 'dogs.html':
                img = "../Макет сайта Пуховой/Картинки/Собака для каталога.jpg"
                title = "Товары для собак"
            elif page == 'rodents.html':
                img = "../Макет сайта Пуховой/Картинки/Грызун для каталога.jpg"
                title = "Товары для грызунов"
            
            middle_content = f'''
                <div class="category-header-info">
                    <img src="{img}" alt="{title}" class="category-header-img">
                    <h2 class="category-header-title">{title}</h2>
                </div>
            '''
    
    links = '''
                        <a href="index.html" class="link-main">Главная</a>
                        <a href="#" class="link-company">О компании</a>
                        <a href="#" class="link-news" style="color: #F2853D;">Новости</a>
    '''
    
    return f'''        <header class="header">
            <div class="header-container">
                <a href="index.html" class="logo-section" style="text-decoration: none; color: inherit;">
                    <img src="../Макет сайта Пуховой/Картинки/лого.png" alt="Рыба Ёж" class="logo-img">
                    <div class="logo-text">
                        <span class="logo-ryba">Рыба</span> <span class="logo-ezh">ЁЖ</span>
                    </div>
                </a>
                
                {middle_content}
                
                <div class="contacts-section">
                    <div class="phone">8 (800) 555-35-35</div>
                    <div class="links">
                        {links}
                    </div>
                </div>
                
                <div class="auth-section">
                    <div class="auth-item">
                        <img src="../Макет сайта Пуховой/Кнопки/Вход.png" alt="" class="icon-profile">
                        <a href="#">Войти</a>
                    </div>
                    <div class="auth-item">
                        <a href="#" style="padding-left: 48px;">Регистрация</a>
                    </div>
                </div>
                
                <div class="cart-section">
                    <img src="../Макет сайта Пуховой/Кнопки/Корзина.png" alt="Cart" class="icon-cart">
                    <span class="cart-total">0 руб.</span>
                </div>
            </div>
        </header>'''

footer_content = '''        <footer class="footer">
            <div class="footer-container">
                <div class="footer-phone">8 (800) 555-35-35</div>
                
                <div class="social-icons-wrapper">
                    <div class="social-title">Мы в соцсетях:</div>
                    <div class="social-icons">
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/Телеграмм.png" alt="Telegram"></a>
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/ВКонтакте.png" alt="VK"></a>
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/Дзен.png" alt="Zen"></a>
                        <a href="#" class="social-icon"><img src="../Макет сайта Пуховой/Кнопки/Одноклассники.png" alt="OK"></a>
                    </div>
                </div>
                
                <div class="footer-credits">
                    Работает на UMI.CMS<br>
                    ИП Шеремет Э.О ИНН 401109946472
                </div>
            </div>
        </footer>'''

for page in files:
    path = os.path.join('/site', page)
    if not os.path.exists(path): continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = header_pattern.sub(get_header(page), content)
    content = footer_pattern.sub(footer_content, content)
    
    # Fix page title color to orange on indices
    if page == 'index.html':
        # Reorder products on index as requested
        # We need to find the products grid
        grid_pattern = re.compile(r'<div class="products-grid">.*?</div>\s*<div class="price-list-container">', re.DOTALL)
        new_grid = '''<div class="products-grid">
                <!-- Товар 1 -->
                <div class="product-card">
                    <h3 class="product-title">Monge Cat Indoor</h3>
                    <p class="product-desc">Корм для взрослых кошек живущих в помещении, с курицей 1,5кг</p>
                    <div class="product-image-container">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для кошек.jpg" alt="Monge Cat Indoor" class="product-img">
                        <img src="../Макет сайта Пуховой/Картинки/Новинка.png" alt="" class="badge-new-img">
                    </div>
                    <div class="product-actions">
                        <div class="price">2095,00 руб.</div>
                        <div class="buy-btn">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="" class="icon-buy">
                            Купить
                        </div>
                    </div>
                </div>

                <!-- Товар 2 -->
                <div class="product-card">
                    <h3 class="product-title">Monge Cat Indoor</h3>
                    <p class="product-desc">Корм для взрослых кошек живущих в помещении, с курицей 1,5кг</p>
                    <div class="product-image-container">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для кошек.jpg" alt="Monge Cat Indoor" class="product-img">
                        <img src="../Макет сайта Пуховой/Картинки/Новинка.png" alt="" class="badge-new-img">
                    </div>
                    <div class="product-actions">
                        <div class="price">2095,00 руб.</div>
                        <div class="buy-btn">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="" class="icon-buy">
                            Купить
                        </div>
                    </div>
                </div>

                <!-- Товар 3 -->
                <div class="product-card">
                    <h3 class="product-title">Triol</h3>
                    <p class="product-desc">Брелок светодиодный Лапка</p>
                    <div class="product-image-container">
                        <img src="../Макет сайта Пуховой/Картинки/Брелок.jpg" alt="Triol" class="product-img">
                        <img src="../Макет сайта Пуховой/Картинки/Новинка.png" alt="" class="badge-new-img">
                    </div>
                    <div class="product-actions">
                        <div class="price">265,00 руб.</div>
                        <div class="buy-btn">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="" class="icon-buy">
                            Купить
                        </div>
                    </div>
                </div>

                <!-- Товар 4 -->
                <div class="product-card">
                    <h3 class="product-title">Darsi Adult</h3>
                    <p class="product-desc">Корм сухой для собак крупных пород,<br>Мясное ассорти 10кг</p>
                    <div class="product-image-container">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для собак красный.jpg" alt="Darsi Adult" class="product-img">
                    </div>
                    <div class="product-actions">
                        <div class="price">2299,00 руб.</div>
                        <div class="buy-btn">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="" class="icon-buy">
                            Купить
                        </div>
                    </div>
                </div>

                <!-- Товар 5 -->
                <div class="product-card">
                    <h3 class="product-title">Darsi Active</h3>
                    <p class="product-desc">Корм сухой для собак всех пород, Телятина<br>10кг</p>
                    <div class="product-image-container">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для собак зелёный.jpg" alt="Darsi Active" class="product-img">
                    </div>
                    <div class="product-actions">
                        <div class="price">2299,00 руб.</div>
                        <div class="buy-btn">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="" class="icon-buy">
                            Купить
                        </div>
                    </div>
                </div>

                <!-- Товар 6 -->
                <div class="product-card">
                    <h3 class="product-title">Little One</h3>
                    <p class="product-desc">Палочки для хомяков,крыс,мышей и<br>песчанок с ягодами 2х60г</p>
                    <div class="product-image-container">
                        <img src="../Макет сайта Пуховой/Картинки/Лакомство для грызцнов.png" alt="Little One" class="product-img">
                    </div>
                    <div class="product-actions">
                        <div class="price">299,00 руб.</div>
                        <div class="buy-btn">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="" class="icon-buy">
                            Купить
                        </div>
                    </div>
                </div>
            </div>
            <div class="price-list-container">'''
        content = grid_pattern.sub(new_grid, content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Site updated successfully.")
