const fs = require('fs');

const cssChanges = `
/* --- КАРТОЧКИ ТОВАРОВ В КАТЕГОРИЯХ (Кошки, Собаки и т.д.) МАГАЗИН --- */
.cat-product-card {
    border: 5px solid #00AEEF;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    flex-shrink: 0;
    height: 580px; /* Увеличил высоту как вы просили (доходят почти до подвала) */
}

.cat-product-img-wrap {
    padding: 30px 20px 0 20px;
    display: flex;
    justify-content: center;
}

.cat-product-img {
    height: 320px; /* Увеличил размер картинки */
    object-fit: contain;
}

.cat-product-text {
    padding: 10px 20px 20px 20px;
    font-family: "Times New Roman", Times, serif;
    font-size: 22px; /* Увеличил шрифт как на макете */
    line-height: 1.2;
    color: #F2853D;
    text-align: center;
    flex-grow: 1; 
    display: flex;
    align-items: center; 
    justify-content: center;
}

.cat-product-bottom {
    display: flex;
    height: 60px; /* Увеличил толщину нижней планки */
    width: 100%;
}

.cat-price {
    background-color: #00AEEF;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    font-size: 28px; /* Выровнял размер цены */
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
    font-size: 28px; /* Выровнял размер купить */
    font-weight: bold;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
}

.cat-buy-icon {
    width: 35px; /* Корзинка в кнопке чуть больше */
    height: 35px;
    object-fit: contain;
}

/* Стили для кнопки назад (строго без закруглений, как на фото) */
.back-to-catalog-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    border: 3px solid #F2853D;
    padding: 2px 18px 8px 12px;
    background-color: #ffffff;
    margin-top: 20px;
    margin-bottom: 20px;
    min-width: 180px;
}
`;

let style = fs.readFileSync('site/style.css', 'utf8');

// Replace everything from .back-to-catalog-btn to the end
const backBtnIndex = style.indexOf('.back-to-catalog-btn {');
if (backBtnIndex !== -1) {
    style = style.substring(0, backBtnIndex) + cssChanges;
    fs.writeFileSync('site/style.css', style);
}

// Ensure the HTML grid gaps match the photo (tighter gaps for larger cards)
const files = fs.readdirSync('site').filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'catalog.html');

files.forEach(file => {
    let content = fs.readFileSync('site/' + file, 'utf8');
    
    // Decrease gap to make cards appear visually wider together
    content = content.replace(/gap: 40px;/g, 'gap: 30px;');
    
    fs.writeFileSync('site/' + file, content);
});

console.log('Done');
