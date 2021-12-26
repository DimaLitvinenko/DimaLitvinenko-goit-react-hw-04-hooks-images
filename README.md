# goit-react-hw-04-hooks-images

<!-- scroll.scrollToBottom({ duration: 500,
            delay: 1000,
            isDynamic: true,
            ignoreCancelEvents: false,
            smooth: true, }); -->

# Поиск изображений

Создан репозиторий goit-react-hw-04-hooks-images. Проведи рефакторинг кода
задания Поиск изображений используя React-хуки.

## Инструкция Pixabay API

Для HTTP-запросов используй публичный сервис поиска изображений
[Pixabay](https://pixabay.com/api/docs/). Зарегистрируйся и получи приватный
ключ доступа.

URL-строка HTTP-запроса.

```bash
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API поддерживает пагинацию, по умолчанию параметр `page` равен `1`.
Пусть в ответе приходит по 12 объектов, установлено в параметре `per_page`. Не
забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение
`page` в `1`.

В ответе от апи приходит массив объектов, в которых тебе интересны только
следущие свойства.

-  `id` - уникальный идентификатор
-  `webformatURL` - ссылка на маленькое изображение для списка карточек
-  `largeImageURL` - ссылка на большое изображение для модального окна

## Описание компонента `<Searchbar>`

Компонент принимает один проп `onSubmit` - функцию для передачи значения инпута
при сабмите формы. Создает DOM-элемент следующей структуры.

```html
<header class="searchbar">
   <form class="form">
      <button type="submit" class="button">
         <span class="button-label">Search</span>
      </button>

      <input
         class="input"
         type="text"
         autocomplete="off"
         autofocus
         placeholder="Search images and photos"
      />
   </form>
</header>
```

## Описание компонента `<ImageGallery>`

Список карточек изображений. Создает DOM-элемент следующей структуры.

```html
<ul class="gallery">
   <!-- Набор <li> с изображениями -->
</ul>
```

## Описание компонента `<ImageGalleryItem>`

Компонент элемента списка с изображением. Создает DOM-элемент следующей
структуры.

```html
<li class="gallery-item">
   <img src="" alt="" />
</li>
```

## Описание компонента `<Button>`

При нажатии на кнопку `Load more` должна догружаться следующая порция
изображений и рендериться вместе с предыдущими. Кнопка должна рендерится только
тогда, когда есть какие-то загруженные изобаржения. Если массив изображений
пуст, кнопка не рендерится.

## Описание компонента `<Loader>`

Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой
готовый компонент, например
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) или любой
другой.

## Описание компонента `<Modal>`

При клике по элементу галереи должно открываться модальное окно с темным
оверлеем и отображаться большая версия изображения. Модальное окно должно
закрываться по нажатию клавиши `ESC` или по клику на оверлее.

Внешний вид похож на функционал этого
[VanillaJS-плагина](https://basiclightbox.electerious.com/), только вместо
белого модального окна рендерится изображение (в примере нажми `Run`). Анимацию
делать не нужно!

```html
<div class="overlay">
   <div class="modal">
      <img src="" alt="" />
   </div>
</div>
```

# React App.

_Создает React приложение в текущей папке:_

```bash
npx create-react-app .
```

_Создает React приложение в папке my-app:_

```bash
npx create-react-app my-app
```

# Настройка pre-commit хуков

## 1 - Установка зависимостей

Установить в проект следующие пакеты.

```bash
npm i -D prettier eslint
```

**В случае ошибки установить явно указать 7-ую версию: eslintv7.11.0 --->>**

```bash
npm i -D prettier eslint@7.11.0
```

## 2 - Инициализация lint-staged и husky

Пользователям **MacOS** и **Linux** систем необходимо выполнить в терминале
следующую команду. Она установит и настроит `husky` и `lint-staged` в
зависимости от инструментов качества кода из зависимостей проекта в
`package.json`.

```bash
npx mrm lint-staged
```

_Пользователям **Windows** необходимо выполнить следующую команду. Она делает
тоже самое:_

```bash
npx mrm@2 lint-staged
```

## 3 - Установка дополнительных зависимостей (npm-пакетов):

### -ESLint

**eslint-config-react** Набор самоуверенных правил ESLint (http://eslint.org)
(включая все правила), адаптированных для проектов React.

```bash
npm i -S eslint-config-react babel-eslint eslint-plugin-react
```

**eslint-config-react-app** Этот пакет включает общую конфигурацию ESLint,
используемую приложением Create React.

```bash
npm i -S eslint-config-react-app
```

### -Prop-types

Проверка типа во время выполнения для свойств React и подобных объектов.

```bash
npm i -D prop-types
```

### -Nano ID

Крошечный, безопасный, удобный для URL генератор уникальных строковых
идентификаторов для JavaScript.

```bash
npm i -D nanoid
```

### -Sass

Чтобы использовать Sass, установите **node-sass**:

```bash
npm i -S node-sass@6.0.0
```

### -Postcss-loader

Инструмент для преобразования стилей с помощью плагинов JS и PostCSS-loader для
webpack.

```bash
npm i -S postcss-loader postcss
```

### -Modern-normalize

Сброс стилей.

```bash
npm i -S modern-normalize
```

```js
import 'node_modules/modern-normalize/modern-normalize.css';
```

### -React Icons

Включайте популярные значки в свои React проекты, используя импорт ES6, который
позволяет вам включать только значки, которые использует ваш проект.

```bash
npm i -S react-icons
```

```jsx
import { IconName } from 'react-icons/im';
```

### -React Loader-Spinner

Спиннеры.

```bash
npm i -S react-loader-spinner
```

```jsx
import Loader from 'react-loader-spinner';
```

### -React Toastify

React-Toastify позволяет с легкостью добавлять уведомления в ваше приложение 🎉.

```bash
npm i -S react-toastify
```

```jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```

### -React Scroll

Компонент React для анимации вертикальной прокрутки.

```bash
npm i -S react-scroll
```

### -React Scrollable Feed

Умная прокрутка интерфейсов и каналов чата.

```bash
npm i -S react-scrollable-feed
```

### -AXIOS

HTTP-клиент на основе обещаний (Promise) для браузера и node.js.

```bash
npm i -S axios
```

## 4 - Добавить npm скрипты в файл package.json:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "clean": "gh-pages-clean",
    "prepare": "husky install",
    "predeploy": "yarn build",
    ...
    "predeploy": "npm run build",
  },
```

## 5 - Интерграция плагинов

Ссылки на документацию по интеграции плагинов в популярные редакторы.

-  [Prettier editor integration](https://prettier.io/docs/en/editors.html)
-  [ESLint editor integration](https://eslint.org/docs/user-guide/integrations)

## 6 - Настройки VSCode

Для комфортной работы, после установки плагинов, нужно добавить несколько
настроек редактора для автосохранения и форматирования файлов.

```json
{
   "files.autoSave": "onFocusChange",
   "editor.formatOnSave": true,
   "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
   }
}
```

## 7 - Deployment на GitHub Pages

```bash
npm i -S gh-pages
```

**package.json**

```json
"homepage": "https://имя-профиля.github.io/имя-репозитория",
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
},
```

_"homepage": "https://DimaLitvinenko.github.io/goit-react-hw-02-phonebook",_

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- =======================================================
componentDidUpdate(prevProps, prevState) {
      if (prevState.searchQuery !== this.state.searchQuery) {
         this.setState({ status: 'pending', page: 1, images: [] });
         this.fetchImages();
         scroll.scrollToBottom({ smooth: true });
      }

      if (prevState.page !== this.state.page) {
         this.setState({ status: 'pending' });
         this.fetchImages();
         scroll.scrollToBottom({ smooth: true });
      }
   }

   fetchImages = async () => {
   const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.state.searchQuery,
      page: this.state.page,
      per_page: 12,
      key: API_KEY,
   });
      try {
         const response = await fetch(`${BASE_URL}?${searchParams}`);
         if (response.ok) {
            const articles = await response.json();
            this.setState(prevState => ({
               images: [...prevState.images, ...articles.hits],
               status: 'resolved',
            }));
         } else {
            return Promise.reject(
               new Error(`No matches found for ${this.props.searchQuery}`),
            );
         }
      } catch (error) {
         this.setState({ error, status: 'rejected' });
         toast.error(`The input field must not be empty! 🦄`, {
            position: 'top-left',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
      }
   };

   ================================================ -->

<!-- =================================
import { Events, animateScroll as scroll } from 'react-scroll';
const Events = Scroll.Events;

Events.scrollEvent.register('begin', function(to, element) {
console.log('begin', to, element); }); end - end of the scrolling/animation

Events.scrollEvent.register('end', function(to, element) { console.log('end',
to, element); });
====================================== -->
