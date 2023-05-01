# Справочник по синтаксису и шаблону
- docker-compose.yml - единая точки входа для сервисов
- dockerfile - создает образы линукса с установленными элементами читая инструкции
- docker hub - сеть готовых образов готовых для скачивания


## локальный запуск и отключение монги Mongo BD server start
```brew services start mongodb-community@6.0```
# Mongo BD server stop
```brew services stop mongodb-community@6.0```
```kill <mongod process ID>```
```kill -2 <mongod process ID>```


## порядок запуска сервисов
- ```sudo docker-compose build``` сборка образов контейнеров
- ```docker compose up``` запуск контейнеров
- ```sudo docker compose up --build``` одновременно билдим и запускаем контейнеры
- ```docker ps --format "ID:({{.ID}}), NAME:({{.Names}}), IMAGE: ({{.Image}})"``` просмотр образов
- ```docker images | grep node``` с фильтрацией
- ```docker logs <name service>``` чтобы посмотреть логи конкретного сервиса

## работа над ошибками
// =====
ошибка при сборке образа
- ```https://stackoverflow.com/questions/74583214/docker-failed-to-solve-with-frontend-dockerfile-v0-failed-to-create-llb-defin```
- ```rm ~/.docker/config.json```
// =====