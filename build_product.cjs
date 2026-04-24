const fs = require('fs');

const catsHtml = fs.readFileSync('site/cats.html', 'utf8');

const mainStart = catsHtml.indexOf('<main class="main-content">');
const mainEnd = catsHtml.indexOf('</main>');

if (mainStart !== -1 && mainEnd !== -1) {
    const beforeMain = catsHtml.substring(0, mainStart + '<main class="main-content">'.length);
    const afterMain = catsHtml.substring(mainEnd);

    const productMainContent = `
            <div class="back-btn-wrap" style="display: flex; justify-content: flex-start; margin-bottom: 20px; padding-left: 20px;">
                <a href="catalog.html" class="back-to-catalog-btn">
                    <span class="back-to-catalog-text">Назад в каталог</span>
                    <div class="back-to-catalog-arrow"></div>
                </a>
            </div>

            <div class="product-detail-flex">
                <div class="product-detail-img-col">
                    <img src="../Макет сайта Пуховой/Картинки/Корм для кошек.jpg" alt="Monge Cat Monoprotein Sterilised Trout">
                </div>
                <div class="product-detail-info-col">
                    <h1 class="product-detail-title">Monge Cat Monoprotein Sterilised Trout корм для стерилизованных кошек, с форелью 1,5кг</h1>
                    <div class="product-detail-desc">
                        Полнорационный сбалансированный корм для стерилизованных кошек, который разработан на основе одного источника белка животного происхождения - форели. Идеально подходит для питомцев, которые обладают повышенной чувствительностью или нуждаются в исключающей диете. Без ГМО, искусственных красителей и ароматизаторов. Сделано в Италии.
                    </div>
                    
                    <div class="product-detail-buy-block">
                        <div class="product-detail-price">2095,00 руб.</div>
                        <div class="product-detail-buy">
                            <img src="../Макет сайта Пуховой/Кнопки/Корзина2.png" alt="Купить" class="product-detail-buy-icon">
                            Купить
                        </div>
                    </div>
                    <div class="product-detail-stock">Осталось: 58</div>
                </div>
            </div>
    `;

    fs.writeFileSync('site/product.html', beforeMain + '\\n' + productMainContent + '\\n' + afterMain);
    console.log('product.html created');
} else {
    console.log('Error finding main content in cats.html');
}
