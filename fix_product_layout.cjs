const fs = require('fs');

let style = fs.readFileSync('site/style.css', 'utf8');

// Fix buy block frame being too large and making price col layout
style = style.replace(/\.product-detail-buy-block\s*{[^}]*}/, `.product-detail-buy-block {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 480px;
    border: 4px solid #F2853D;
    height: 75px; 
    margin-top: 20px;
    overflow: hidden;
}`);

if (!style.includes('.product-detail-price-col')) {
    style += `
.product-detail-price-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 25px;
}
`;
}

// Ensure the flex layout aligns to left properly without huge gaps
style = style.replace(/\.product-detail-flex\s*{[^}]*}/, `.product-detail-flex {
    display: flex;
    justify-content: flex-start; /* У края выравнивание */
    gap: 60px;
    padding: 0 0 40px 0; /* Убрали лишние отступы чтобы прижалось к краю */
    margin-bottom: auto;
}`);

// Fix image col alignment 
style = style.replace(/\.product-detail-img-col\s*{[^}]*}/, `.product-detail-img-col {
    flex: 0 0 auto;
    border: 5px solid #00AEEF;
    border-radius: 40px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    height: fit-content;
    width: 500px; /* Немного уменьшили для баланса */
    margin-left: 0;
}`);

style = style.replace(/\.product-detail-buy\s*{[^}]*}/, `.product-detail-buy {
    background-color: #F2853D;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    font-size: 28px;
    font-weight: bold;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    cursor: pointer;
    border: none;
    height: 100%;
}`);

style = style.replace(/\.product-detail-stock\s*{[^}]*}/, `.product-detail-stock {
    font-family: Arial, sans-serif; /* Чутка другой шрифт */
    font-size: 16px;
    color: #666;
    margin-top: 5px; /* Сдвигаем под цену */
}`);

// Force title to be bolder
style = style.replace(/\.product-detail-title\s*{[^}]*}/, `.product-detail-title {
    font-family: "Times New Roman", Times, serif;
    font-size: 32px;
    font-weight: 900;
    -webkit-text-stroke: 1px #F2853D; /* Дополнительная жирность */
    color: #F2853D;
    margin-bottom: 20px;
    line-height: 1.2;
}`);

style = style.replace(/\.product-detail-price\s*{[^}]*}/, `.product-detail-price {
    font-family: "Times New Roman", Times, serif;
    font-size: 28px;
    font-weight: 900;
    color: #000000;
    padding: 0; /* Обнулили чтобы колонка центрировала */
}`);

fs.writeFileSync('site/style.css', style);


let productHtml = fs.readFileSync('site/product.html', 'utf8');

productHtml = productHtml.replace(/<div class="product-detail-buy-block">[\s\S]*?(?=<\/main>)/, `
                    <div class="product-detail-buy-block">
                        <div class="product-detail-price-col">
                            <div class="product-detail-price">2095,00 руб.</div>
                            <div class="product-detail-stock">Осталось: 58</div>
                        </div>
                        <div class="product-detail-buy">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="Купить" class="product-detail-buy-icon">
                            Купить
                        </div>
                    </div>
                </div>
            </div>
    `);

fs.writeFileSync('site/product.html', productHtml);
console.log('Layout patched');
