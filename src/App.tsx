import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WeatherSearchPage from './components/WeatherSearchPage'; // Твой бывший App.tsx
import WeatherDisplayPage from './components/WeatherDisplayPage'; // Для параметризованного роута
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-100"> {/* Используем твой фон */}
        <Header /> {/* Навигационная панель */}
        <main className="container mx-auto p-4"> {/* Контейнер для содержимого страниц */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search-weather" element={<WeatherSearchPage />} />
            <Route path="/weather/:city" element={<WeatherDisplayPage />} />
            <Route path="/about" element={<About />} />
            {/* Если у тебя есть другие компоненты, добавь для них роуты */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;