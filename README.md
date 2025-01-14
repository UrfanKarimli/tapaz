# React + Vite  ilə Tap.az saytının kopyası

#### Bu layihə muasir texnologiyaları öyrənmə məqsədi daşıyır. Burada Vite, Shadcn Uİ,  Tailwind CSS kimi müasir texnologiyalar istifadə olunub.

#### This project aims to learn modern technologies. It uses modern tools such as Vite, Shadcn UI, and Tailwind CSS.


## Layihə Quraşdırılması | Project Setup

### 1. Layihə Fayllarını Klonlayın | Clone the Project Files

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Lazım Olan Asılılıqları Yükləyin | Install the Required Dependencies

```bash
npm install
```

> **Qeyd:** Əgər `pnpm` istifadə edirsinizsə, müvafiq olaraq `pnpm install` əmri ilə əvəz edin.

> **Note**  If you are using `pnpm`, replace the command with `pnpm install`.

### 3.  Layihəni İşə Salın | Start the Project

```bash
npm run dev
```

 Serverin işlədiyi URL avtomatik olaraq terminalda göstəriləcəkdir (adətən `http://localhost:5173`).

 The URL where the server is running will automatically appear in the terminal `(typically http://localhost:5173)`.


## Layihəni Işə Salmaq  | Build for Production

```bash
npm run build
```

 Bu əmrdən sonra `dist` qovluğunda istehsalata uyğun fayllar yaranacaq.

 After running this command, production-ready files will be created in the `dist` folder.


## Koda Nəzarət | Code Linting

Kodunuzu yoxlamaq və standartlara uyğunlaşdırmaq üçün aşağıdakı əmrdən istifadə edin:

Use the following command to check and align your code with standards:

```bash
npm run lint
```

---

## Texnologiyalar və İstifadə Edilənlər  | Technologies and Tools

### AZ

- **Vite**: Sürətli və modern layihə yaratma aləti.
- **ShadcnUİ**:  React üçün optimallaşdırılmış, dizayn sistemi ilə inteqrasiya oluna bilən komponent kitabxanası.
- **Zustand**:  React üçün yüngül və asan istifadə edilə bilən state management kitabxanası.
- **Tailwind CSS**: UI tərtibatını sadələşdirmək üçün bir utility-first CSS framework.

### EN

- **Vite**: A fast and modern build tool.
- **ShadcnUİ**: An optimized component library for React, integrated with a design system.
- **Zustand**: A lightweight and easy-to-use state management library for React.
- **Tailwind CSS**: A utility-first CSS framework for simplifying UI design.
---

## Layihə Strukturu | Project Structure

```plaintext
src/
  assets/        # Şəkillər və digər statik fayllar | Images and other static files
  components/    # Yenidən istifadə olunan komponentlər | Reusable components
  page/          # Səhifələr | Pages
  services/
        api/     # Data fetcing 
        stores/  # Global state manegment 
  App.jsx        # Əsas fayl | Main file
  cilent.js      # Supabase konfirurasiyası | Supabase configuration
  layout.jsx     # Global Outlet layout 
  main.jsx       # Layihənin giriş nöqtəsi | Entry point of the project
  route.jsx      # Səhifələrin rotasiyası | Routing of pages

```

---

## Tailwind CSS-in Konfiqurasiyası | Tailwind CSS Configuration

Tailwind CSS konfiqurasiya faylı `tailwind.config.js` faylında yerləşir:

The Tailwind CSS configuration file is located in `tailwind.config.js`:

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
## Shadcn UI ilə İş | Using Shadcn UI

### Shadcn UI istifadə etmək üçün əvvəlcə main.jsx faylında konfiqurasiya etməlisiniz:

### To use Shadcn UI, first configure it in the main.jsx file:

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

### Shadcn UI Komponentlərindən Nümunə | Example of Shadcn UI Components

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

Tailwind CSS ilə uyğun şəkildə işləmək üçün Global `index.css` faylında Shadcn UI üçün lazımi Tailwind inteqrasiyasını təmin edin. 

To ensure compatibility with Tailwind CSS, provide the necessary Tailwind integration for Shadcn UI in the global `index.css` file.  

---


## :::XÜSUSİ QEYD | SPECIAL NOTE:::

 **Bu layihədə backend istifadə edilmədiyi üçün, Vercel mühitində düzgün işləməsi məqsədilə statik məlumatlar JavaScript fayllarında saxlanılmışdır. Bu məlumatların saxlanıldığı qovluğun URL-i aşağıdakı kimidir:** 

**Since no backend is used in this project, static data is stored in JavaScript files to ensure proper functionality in the Vercel environment. The URL of the folder where these files are located is as follows:** 

src/
  components/ 
              mockData/
                        index.js


## Data istifadəsi | Data use

***Dataları istifadə etmək üçün aşağıdakı xüsusi funksiyanı yazmışam. Funksiya ilk baxışda qarmaqarışıq görünə bilər, amma yazmaqda əsas məqsədim dataları uyğun kateqoriyalara görə problemsiz olaraq çağırmaq və filtirləmə prosesində səhv almamaqdır.***

***I have written the following custom function to use the data. At first glance, the function may seem complex, but the main purpose of writing it is to fetch the data seamlessly according to the relevant categories and avoid errors during the filtering process.***

```javascript
import { Ads } from '@/components/mockData';

/**
 * Filters data based on the provided category, subcategory, and item parameters.
 * 
 * @param {Object} params - Filter parameters
 * @param {string} params.cate - Category name
 * @param {string} [params.subcate] - Subcategory name (optional)
 * @param {string} [params.items] - Item name (optional)
 * @returns {Array} - Filtered data
 */
const getFilteredData = ({ cate, subcate, items }) => {
  let filteredData = [];

  if (cate) {
    // Filter by category
    const categoryData = Object.values(Ads[cate]);
    filteredData = categoryData.flatMap(subObj => Object.values(subObj)).flat();

    if (subcate) {
      // Filter by subcategory
      filteredData = Object.values(Ads[cate][subcate]).flat();

      if (items) {
        // Filter by specific items
        filteredData = Ads[cate][subcate][items] || [];
      }
    }
  } else {
    // Filter all data if no category is provided
    filteredData = Object.values(Ads)
      .flatMap(category => Object.values(category))
      .flatMap(subcategory => Object.values(subcategory))
      .flat();
  }

  return filteredData;
};

export default getFilteredData;
```

## Suallar və Cavablar | Questions and Answers  
Əgər hər hansı problem yaşayırsınızsa, [Issues](<repository_url>/issues) bölməsinə daxil olun və problemi bildirin.  

If you encounter any issues, navigate to the [Issues](<repository_url>/issues) section and report the problem.  

---

## Layihə Məqsədi | Project Objective  
Bu layihənin əsas məqsədi React.js texnologiyaları ilə praktiki təcrübə qazanmaq və müasir frontend alətləri ilə tanış olmaqdır.  

The main objective of this project is to gain practical experience with React.js technologies and become familiar with modern frontend tools.  

