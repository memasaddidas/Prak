const fs = require('fs');

const cssChanges = `
/* Стили для кнопки назад (точь-в-точь как на фото 2) */
.back-btn-wrap {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding-left: 20px;
}

.back-to-catalog-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    border: 3px solid #F2853D;
    border-radius: 10px; /* ЗАКРУГЛЕННАЯ рамка */
    padding: 5px 15px 10px 15px; 
    background-color: #ffffff;
    margin-top: 20px;
}

.back-to-catalog-text {
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #00AEEF;
    margin-bottom: 5px;
    text-align: center;
}

/* Настоящая стрелочка влево, а не просто линия */
.back-to-catalog-arrow {
    width: 100%;
    height: 6px;
    background-color: #F2853D;
    position: relative;
    border-radius: 3px;
}

.back-to-catalog-arrow::before {
    content: "";
    position: absolute;
    left: -2px; /* Стрелка торчит слева */
    top: -6px;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-right: 15px solid #F2853D; /* Направление влево */
}

/* --- КАРТОЧКИ ТОВАРОВ В КАТЕГОРИЯХ (Кошки, Собаки и т.д.) --- */
.cat-product-card {
    border: 6px solid #00AEEF;
    border-radius: 40px;
    /* УБИРАЕМ overflow: hidden, чтобы не обрезать внутренние блоки об рамку! */
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    flex-shrink: 0;
    height: 520px;
    padding: 20px; /* Отступы от краев рамки до контента */
}

.cat-product-img-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.cat-product-img {
    height: 250px;
    object-fit: contain;
}

.cat-product-text {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    color: #F2853D;
    text-align: center;
    flex-grow: 1; /* Опускает блоки цены вниз */
    display: flex;
    align-items: center; 
    justify-content: center;
    padding: 0 10px;
}

/* Отдельные прямоугольники внутри карточки (не слитые с рамкой) */
.cat-product-bottom {
    display: flex;
    height: 50px;
    width: 100%;
    margin-top: 15px; /* Зазор между текстом и кнопками */
}

.cat-price {
    background-color: #00AEEF;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    font-weight: bold;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Прямоугольный угол */
}

.cat-buy {
    background-color: #F2853D;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    font-weight: bold;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    /* Прямоугольный угол */
}

.cat-buy-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
}
`;

let style = fs.readFileSync('site/style.css', 'utf8');

// Replace the back button and category cards sections
const backBtnIndex = style.indexOf('.back-btn-wrap {');
if (backBtnIndex !== -1) {
    style = style.substring(0, backBtnIndex) + cssChanges;
} else {
    // If exact string not found, we'll try another anchor
    const altIndex = style.indexOf('.back-to-catalog-btn');
    if (altIndex !== -1) {
        // find previous blank line or something to replace from
        style = style.substring(0, style.lastIndexOf('\\n', altIndex) - 100) + '\\n' + cssChanges;
    }
}
// Try to clean up duplicates if any
style = style.replace(/\.back-to-catalog-btn[\s\S]*?(?=\.back-to-catalog-btn)/, '');

fs.writeFileSync('site/style.css', style);
console.log('Fixed button and split bottom panels');
