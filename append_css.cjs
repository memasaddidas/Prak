const fs = require('fs');

const appendCss = `
/* --- СТРАНИЦА ОДНОГО ТОВАРА (product.html) --- */
.product-detail-flex {
    display: flex;
    gap: 60px;
    padding: 0 20px 40px 20px;
    margin-bottom: auto;
}

.product-detail-img-col {
    flex: 0 0 auto;
    border: 5px solid #00AEEF;
    border-radius: 40px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    height: fit-content;
    width: 400px;
}

.product-detail-img-col img {
    width: 100%;
    height: auto;
    max-height: 450px;
    object-fit: contain;
}

.product-detail-info-col {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.product-detail-title {
    font-family: "Times New Roman", Times, serif;
    font-size: 32px;
    font-weight: bold;
    color: #F2853D;
    margin-bottom: 20px;
    line-height: 1.2;
}

.product-detail-desc {
    font-family: "Calibri", Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
    font-size: 22px;
    color: #00AEEF;
    margin-bottom: 40px;
    line-height: 1.4;
}

.product-detail-buy-block {
    display: flex;
    align-items: center;
    width: fit-content;
    border: 4px solid #F2853D;
    /* Не сливаем с рамкой, прямоугольно/как выберете */
}

.product-detail-price {
    font-family: "Times New Roman", Times, serif;
    font-size: 28px;
    font-weight: bold;
    color: #000000;
    padding: 15px 30px;
}

.product-detail-stock {
    font-family: "Calibri", Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
    font-size: 18px;
    color: #666;
    margin-top: 10px;
}

.product-detail-buy {
    background-color: #F2853D;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    font-size: 28px;
    font-weight: bold;
    padding: 15px 40px;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    border: none;
}

.product-detail-buy-icon {
    width: 35px;
    height: 35px;
}
`;

fs.appendFileSync('site/style.css', appendCss);
