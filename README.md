# React + Vite  ilə Tap.az saytının kopyası

Bu layihə muasir texnologiyaları öyrənmə məqsədi daşıyır. Burada Vite, Shadcn Uİ,  Tailwind CSS kimi müasir texnologiyalar istifadə olunub.

---

## Layihə Quraşdırılması

### 1. Layihə Fayllarını Klonlayın

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Lazım Olan Asılılıqları Yükləyin

```bash
npm install
```

> **Qeyd:** Əgər `pnpm` istifadə edirsinizsə, müvafiq olaraq `pnpm install` əmri ilə əvəz edin.

### 3. Layihəni İşə Salın

```bash
npm run dev
```

Serverin işlədiyi URL avtomatik olaraq terminalda göstəriləcəkdir (adətən `http://localhost:5173`).

---

## Layihəni Hazır Məhsula Çevirmək

```bash
npm run build
```

Bu əmrdən sonra `dist` qovluğunda istehsalata uyğun fayllar yaranacaq.

---

## Koda Nəzarət (Linting)

Kodunuzu yoxlamaq və standartlara uyğunlaşdırmaq üçün aşağıdakı əmrdən istifadə edin:

```bash
npm run lint
```

---

## Texnologiyalar və İstifadə Edilənlər

- **Vite**: Sürətli və modern layihə yaratma aləti.
- **ShadcnUİ**:  React üçün optimallaşdırılmış, dizayn sistemi ilə inteqrasiya oluna bilən komponent kitabxanası.
- **Zustand**:  React üçün yüngül və asan istifadə edilə bilən state management kitabxanası.
- **Tailwind CSS**: UI tərtibatını sadələşdirmək üçün bir utility-first CSS framework.
---

## Layihə Strukturu

```plaintext
src/
  assets/        # Şəkillər və digər statik fayllar
  components/    # Yenidən istifadə olunan komponentlər
  page/          # Səhifələr
  services/
        api/     # Data fetcing
        stores/  # Global state manegment
  App.jsx        # Əsas fayl
  cilent.js      # Supabase konfirurasiyası
  layout.jsx     # Global Outlet layout
  main.jsx       # Layihənin giriş nöqtəsi
  route.jsx      # Səhifələrin rotasiyası
```

---

## Tailwind CSS-in Konfiqurasiyası

Tailwind CSS konfiqurasiya faylı `tailwind.config.js` faylında yerləşir:

```javascript
/** @type {import('tailwindcss').Config} */
export default{
  darkMode: 'class',
    content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
## Shadcn UI ilə İş

## Shadcn UI istifadə etmək üçün əvvəlcə main.jsx faylında konfiqurasiya etməlisiniz:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Shadcn UI CSS-ləri
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Shadcn UI Komponentlərindən Nümunə
```javascript
import { Button } from "@shadcn/ui";

function App() {
  return (
    <div>
      <Button variant="primary">Salam Dünyam</Button>
    </div>
  );
}

export default App;
```
# Qeyd: Tailwind CSS ilə uyğun şəkildə işləmək üçün Global index.css faylında Shadcn UI üçün lazımi Tailwind inteqrasiyasını təmin edin.

## Sual və Cavablar

Əgər hər hansı problem yaşayırsınızsa, [Issues](<repository_url>/issues) bölməsinə daxil olun və problemi bildirin.

---


## Layihə Məqsədi

Bu layihənin əsas məqsədi React.js texnologiyaları ilə praktiki təcrübə qazanmaq və müasir frontend alətləri ilə tanış olmaqdır.
