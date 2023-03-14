# Preview

Project is hosted on [Vercel](https://randomuser-table-mu.vercel.app)


# Task

## Описание

Нужно сделать веб приложение, которое состоит из одной страницы с пользователями.
Пользователи отображаются в таблице. Пользователей можно фильтровать по полу и национальности, а также осуществлять поиск.

Дизайн: https://www.figma.com/file/HCt8WCz48OINVooLGuUwxe/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-front?node-id=0%3A1&t=tfRwiCkVi6DaEanZ-0

Апи: https://randomuser.me/ 

### Обязательно:ц

 - На странице есть 2 фильтра. 1 - по полу (всего два варианта). 2 - по национальности, список доступных национальностей взять из доки апихи.
 - При загрузке данных должен крутиться какой-нибудь лоадер внутри таблицы (хедер в таблице должен остаться). Можно сделать любой, например, в https://loading.io/
 - Ограничить пагинацию в 10 страниц (вне зависимости от количества элементов)
 - Верстка должна быть адаптивной, минимальный экран 600px, скролл появляется внутри таблицы
 - Реализовать поиск на стороне фронта по текущим загруженным данным

### Будет плюсом
 - Виртуализация таблицы (react-window/react virtualized)
 - Анимация на появление тултипа 


---

## Стек:

### Обязательно

- Фреймворк: [React](https://reactjs.org/)
- Язык: [TypeScript](https://www.typescriptlang.org)
- css modules

### Желательно 🙂

- препроцессор: [SASS/SCSS](https://sass-lang.com/)
- сетап через create-react-app

---

## Критерии оценки

- Архитектура
- Читаемость кода
- Верстка css


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

then

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
