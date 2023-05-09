# указываем версию ноды сервисе
FROM node:18.16-alpine

# указываем рабочую папку она может быть любая
WORKDIR /usr/src/app

# копируем файлы для package.json and package-lock.json  в корневую папку
COPY package*.json ./

# устанавливаем зависимости
RUN npm install

# копируем все содержимое папки api (src and ...)  в корневую папку
COPY . .

# билдим для прода проект
RUN npm run build