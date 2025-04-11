# BookSwap

Это приложение для публичного чтения / добавления книг
Сейчас это реализовано через txt главы




## Что сейчас готово

- Авторизация и работа с пользователем
- Добавление новых книг
- Добавление новых глав для своих книг
- Чтение книг
- Настройка пользовательских тем для читалки
- Каталог с фильтрами и поиском


## Что планируется улучшить

- Рейтинг для книг
- Комментарии к книгам
- Закладки для книг
- Авторизация через сторонние сервисы (vk, google, yandex)
- Сортировку и пагинацию в каталоге
- Добавление полных книг в epub, pdf, fb2 формате (через парсинг содержимого и разбивку на главы txt формата)
- Добавить тестов, CI/CD
- Поработать над дизайном и цветам
- Сделать адаптивность



## Что используется в проекте

#### Frontend 

- React (Vite)
- NextUI (HeroUI) 
- TailwindCSS
- RTK Query + persist 
- Typescript
- Motion
#### Backend

- Nest (microservices)
- gRPC
- PrismaORM
- PosgreSQL
- Yandex S3
- Yandex, VK, Google passports

#### Other

- k8s
- nx 
- protobuf
- FSD


## Запуск приложения

Для работы необходимо:
- Kubernetes (minikube)
- Yarn
- Nx

**DEV**:

```sh
## /k8s/postgres
## Для создания pg внутри k8s
kubectl apply -f ./deployment.yaml

## Сделать port-forward для сервиса postgres на 5432 порт
kubectl port-forward svc/postgres-service -n postgres 5432:5432

## Установка зависимостей
yarn install
## Миграция
yarn nx run books:prisma-migrate --name=some 

## Запускать проекты
yarn nx run books:serve 
yarn nx run user:serve
yarn nx run storage:serve 
yarn nx run gateway:serve
yarn nx run frontend:serve 
```

