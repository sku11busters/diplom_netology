FROM node:18

# Установка зависимостей
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Копирование исходного кода
COPY . .

# Сборка проекта
RUN yarn build