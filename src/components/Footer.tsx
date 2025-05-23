import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Фон"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Heart" className="text-[#9b87f5] h-6 w-6" />
              <span className="text-xl font-semibold">МойПсихолог</span>
            </div>
            <p className="text-gray-400">
              Платформа психологической поддержки с использованием
              искусственного интеллекта
            </p>
            <div className="mt-4">
              <img
                src="https://images.unsplash.com/photo-1591084728795-1149f32d5545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Психологическая поддержка"
                className="rounded-lg w-32 opacity-75"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#techniques"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Техники
                </a>
              </li>
              <li>
                <a
                  href="#assistant"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ИИ-ассистент
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Статьи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Видео
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Книги
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Связаться</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                <a
                  href="mailto:info@mojpsiholog.ru"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@mojpsiholog.ru
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                <a
                  href="tel:+74951234567"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} МойПсихолог. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
