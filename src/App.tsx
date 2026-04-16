import { ShoppingCart, User, LogIn, Send, Globe } from 'lucide-react';

const ProductCard = ({ title, description, price, image, isNew = true }: { title: string, description: string, price: string, image: string, isNew?: boolean }) => (
  <div className="relative flex flex-col items-center p-6 border-[6px] border-brand-blue rounded-[60px] w-full max-w-[380px] bg-white h-full">
    <h3 className="text-brand-blue font-times text-[20px] font-bold text-center mb-2">{title}</h3>
    <p className="text-brand-orange-dark font-times text-[16px] text-center mb-4 leading-tight h-12 overflow-hidden">{description}</p>
    
    <div className="relative w-full flex-grow flex items-center justify-center mb-6 min-h-[200px]">
      <img 
        src={image} 
        alt={title} 
        className="max-h-[250px] object-contain"
        referrerPolicy="no-referrer"
      />
      {isNew && (
        <div className="absolute top-4 -right-4 bg-[#FFEC00] px-2 py-1 transform rotate-[-5deg] shadow-sm z-10">
          <span className="font-calibri font-bold text-[12px] text-black">НОВИНКА!</span>
          <div className="absolute -bottom-1.5 right-0 w-0 h-0 border-t-[6px] border-t-[#FFEC00] border-r-[6px] border-r-transparent"></div>
        </div>
      )}
    </div>

    <div className="flex w-full mt-auto">
      <div className="bg-brand-blue text-white font-times text-[24px] px-4 py-2 flex-1 flex items-center justify-center">
        {price} руб.
      </div>
      <button className="bg-brand-orange-light text-white font-times text-[20px] px-4 py-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity flex-1">
        <ShoppingCart size={20} />
        Купить
      </button>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://picsum.photos/seed/pufferfish-logo/100/100" 
            alt="Рыба Ёж Logo" 
            className="w-24 h-24 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <h1 className="font-segoe text-[32px] font-bold leading-none">
              <span className="text-brand-orange-dark">Рыба</span> <span className="text-brand-blue">ЁЖ</span>
            </h1>
            <div className="flex gap-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        <button className="bg-brand-blue text-white font-segoe text-[32px] px-10 py-1 rounded-none hover:opacity-90 transition-opacity">
          Каталог
        </button>

        <div className="flex flex-col items-center gap-1">
          <div className="font-times text-[18px] font-bold">8 (800) 555-35-35</div>
          <div className="flex gap-4">
            <a href="#" className="font-calibri text-[18px] text-brand-blue hover:underline">О компании</a>
            <a href="#" className="font-calibri text-[18px] text-brand-orange-light hover:underline">Новости</a>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-times text-[12px]">
              <LogIn size={14} className="text-gray-600" />
              <a href="#" className="hover:underline">Войти</a>
            </div>
            <div className="flex items-center gap-2 font-times text-[12px]">
              <User size={14} className="text-gray-600" />
              <a href="#" className="hover:underline">Регистрация</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart size={36} strokeWidth={1.5} />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</div>
            </div>
            <span className="font-times text-[12px] whitespace-nowrap">0 руб.</span>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-center font-calibri font-bold text-[40px] text-brand-orange-light mb-12 text-shadow-bold">
          Главная страница
        </h2>

        <section className="mb-16">
          <h3 className="font-times font-bold text-[24px] text-brand-green mb-8 text-shadow-custom uppercase tracking-wide">
            НОВИНКИ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
            <ProductCard 
              title="Monge Cat Indoor"
              description="Корм для взрослых кошек живущих в помещении, с курицей 1,5кг"
              price="2095,00"
              image="https://picsum.photos/seed/catfood1/300/400"
            />
            <ProductCard 
              title="Monge Cat Indoor"
              description="Корм для котят до 1 года, с форелью 1,5кг"
              price="2195,00"
              image="https://picsum.photos/seed/catfood2/300/400"
            />
            <ProductCard 
              title="Triol"
              description='Брелок светодиодный "Лапка"'
              price="265,00"
              image="https://picsum.photos/seed/keychain/300/400"
            />
            <ProductCard 
              title="Darsi Adult"
              description="Корм сухой для собак крупных пород, Мясное ассорти 10кг"
              price="2299,00"
              image="https://picsum.photos/seed/dogfood1/300/400"
            />
            <ProductCard 
              title="Darsi Active"
              description="Корм сухой для собак всех пород, Телятина 10кг"
              price="2299,00"
              image="https://picsum.photos/seed/dogfood2/300/400"
            />
            <ProductCard 
              title="Little One"
              description="Палочки для хомяков,крыс,мышей и песчанок с ягодами 2х60г"
              price="299,00"
              image="https://picsum.photos/seed/hamster/300/400"
            />
          </div>
        </section>

        <div className="flex justify-end mt-4">
          <a href="#" className="text-brand-blue font-times text-[18px] font-bold hover:underline">Прайс-лист</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h4 className="font-times text-[24px]">Мы в соцсетях:</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-brand-blue w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Send size={24} />
              </a>
              <a href="#" className="bg-[#4C75A3] w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="font-bold text-xl">VK</span>
              </a>
              <a href="#" className="bg-black w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Globe size={24} />
              </a>
              <a href="#" className="bg-brand-orange-light w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="font-bold text-xl">OK</span>
              </a>
            </div>
          </div>

          <div className="flex justify-between items-end flex-wrap gap-4">
            <div className="font-times text-[32px] font-bold">8 (800) 555-35-35</div>
            <div className="text-right font-times text-[12px] leading-tight opacity-90">
              Работает на UMI.CMS<br />
              ИП Шеремет Э.О ИНН 401109946472
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
