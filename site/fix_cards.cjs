const fs = require('fs');

const cssAdd = `
/* --- КАРТОЧКИ ТОВАРОВ В КАТЕГОРИЯХ (Кошки, Собаки и т.д.) МАГАЗИН --- */
.cat-product-card {
    border: 5px solid #00AEEF;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    flex-shrink: 0;
    height: 480px;
}

.cat-product-img-wrap {
    padding: 30px 20px 0 20px;
    display: flex;
    justify-content: center;
}

.cat-product-img {
    height: 250px;
    object-fit: contain;
}

.cat-product-text {
    padding: 10px 20px 20px 20px;
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    line-height: 1.2;
    color: #F2853D;
    text-align: center;
    flex-grow: 1; /* Опускает низ */
    display: flex;
    align-items: center; /* Центрируем текст по вертикали */
    justify-content: center;
}

.cat-product-bottom {
    display: flex;
    height: 50px;
    width: 100%;
}

.cat-price {
    background-color: #00AEEF;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    font-weight: bold;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cat-buy {
    background-color: #F2853D;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    font-weight: bold;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
}

.cat-buy-icon {
    width: 30px;
    height: 30px;
    object-fit: contain;
}
`;

const gridHtml = `            <div class="products-grid-4" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-bottom: 40px; max-width: 1800px; margin-left: auto; margin-right: auto;">
                <!-- Товар 1 -->
                <div class="cat-product-card">
                    <div class="cat-product-img-wrap">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для кошек.jpg" alt="Корм" class="cat-product-img">
                    </div>
                    <div class="cat-product-text">Monge Cat Indoor<br>Корм для взрослых кошек живущих в помещении, с курицей 1,5кг</div>
                    <div class="cat-product-bottom">
                        <div class="cat-price">2095,00 руб.</div>
                        <div class="cat-buy">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="Купить" class="cat-buy-icon">
                            Купить
                        </div>
                    </div>
                </div>
                <!-- Товар 2 -->
                <div class="cat-product-card">
                    <div class="cat-product-img-wrap">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для кошек.jpg" alt="Корм" class="cat-product-img">
                    </div>
                    <div class="cat-product-text">Monge Cat Indoor<br>Корм для взрослых кошек живущих в помещении, с курицей 1,5кг</div>
                    <div class="cat-product-bottom">
                        <div class="cat-price">2095,00 руб.</div>
                        <div class="cat-buy">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="Купить" class="cat-buy-icon">
                            Купить
                        </div>
                    </div>
                </div>
                <!-- Товар 3 -->
                <div class="cat-product-card">
                    <div class="cat-product-img-wrap">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для котят.jpg" alt="Корм" class="cat-product-img">
                    </div>
                    <div class="cat-product-text">Monge Cat Indoor<br>Корм для котят до 1 года, с форелью 1,5кг</div>
                    <div class="cat-product-bottom">
                        <div class="cat-price">2195,00 руб.</div>
                        <div class="cat-buy">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="Купить" class="cat-buy-icon">
                            Купить
                        </div>
                    </div>
                </div>
                <!-- Товар 4 -->
                <div class="cat-product-card">
                    <div class="cat-product-img-wrap">
                        <img src="../Макет сайта Пуховой/Картинки/Корм для котят.jpg" alt="Корм" class="cat-product-img">
                    </div>
                    <div class="cat-product-text">Monge Cat Indoor<br>Корм для котят до 1 года, с форелью 1,5кг</div>
                    <div class="cat-product-bottom">
                        <div class="cat-price">2195,00 руб.</div>
                        <div class="cat-buy">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="Купить" class="cat-buy-icon">
                            Купить
                        </div>
                    </div>
                </div>
            </div>`;


const files = fs.readdirSync('site').filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'catalog.html');

let style = fs.readFileSync('site/style.css', 'utf8');
if (!style.includes('.cat-product-card')) {
    fs.writeFileSync('site/style.css', style + cssAdd);
}

files.forEach(file => {
    let content = fs.readFileSync('site/' + file, 'utf8');
    
    // Completely replace the existing grid
    content = content.replace(/<div class="products-grid-4"[\s\S]*?<\/div>\s*<\/main>/, gridHtml + '\n        </main>');
    content = content.replace(/<div class="products-grid"[\s\S]*?<\/div>\s*<\/main>/, gridHtml + '\n        </main>');
    
    fs.writeFileSync('site/' + file, content);
});

console.log('Update Complete');
