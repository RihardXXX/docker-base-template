# Справочник по синтаксису и шаблону
- docker-compose.yml - единая точки входа для сервисов
- dockerfile - создает образы линукса с установленными элементами читая инструкции


## порядок запуска сервисов
- ```sudo docker-compose build``` сборка образов контейнеров
- ```docker compose up``` запуск контейнеров
- ```docker ps --format "ID:({{.ID}}), NAME:({{.Names}}), IMAGE: ({{.Image}})"``` просмотр образов
- ```docker images | grep node``` с фильтрацией

## работа над ошибками
// =====
ошибка при сборке образа
```https://stackoverflow.com/questions/74583214/docker-failed-to-solve-with-frontend-dockerfile-v0-failed-to-create-llb-defin```
```rm ~/.docker/config.json```
// =====