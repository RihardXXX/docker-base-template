# Справочник по синтаксису и шаблону
- docker-compose.yml - единая точки входа для сервисов
- dockerfile - создает образы линукса с установленными элементами читая инструкции
- docker hub - сеть готовых образов готовых для скачивания
- volumes - промежуточное хранение состояния, которая не стирается при пересборке контейнера, полезно для БД
- nginx - проксирует все запросы с айпи адреса 80 порта по сервисам 
- docker network - внутри композ мы можем создавать докер сети и с каждой из низ цеплять опред сервисы(прозрачность и изолированность)



## локальный запуск и отключение монги Mongo BD server start
```brew services start mongodb-community@6.0```
## Mongo BD server stop
```brew services stop mongodb-community@6.0```
```kill <mongod process ID>```
```kill -2 <mongod process ID>```


## порядок запуска сервисов
- ```sudo docker-compose build``` сборка образов контейнеров
- ```docker compose up``` запуск контейнеров
- ```sudo docker compose up --build``` одновременно билдим и запускаем контейнеры (для прода команда)
- ```sudo docker compose up --build --remove-orphans``` билд и запуск контейнеров удаляя переименованные
- ```sudo docker compose -f docker-compose.yml -f docker-compose.develop.yml up --build``` запускаем в дев режиме переписывая с прод режима поля (для дев режима команда)
- ```docker ps --format "ID:({{.ID}}), NAME:({{.Names}}), IMAGE: ({{.Image}})"``` просмотр образов
- ```docker images | grep node``` с фильтрацией
- ```docker logs <name service>``` чтобы посмотреть логи конкретного сервиса
- ```docker volume ls``` просмотр volumes
- ```docker exec -it <идентификатор контейнера> sh``` - войти в запущенный контейнер
- ```docker exec -it <идентификатор контейнера> bash``` - войти в запущенный контейнер
- ```https://tproger.ru/translations/top-10-docker-commands/``` - основные докер команды
- ```docker network -ls``` - смотрим на наши докер сети

## работа над ошибками
// =====
ошибка при сборке образа
- ```https://stackoverflow.com/questions/74583214/docker-failed-to-solve-with-frontend-dockerfile-v0-failed-to-create-llb-defin```
- ```rm ~/.docker/config.json```
// =====