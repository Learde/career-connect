# career-connect

## Архитектура

### Структура:
* app &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ↓
* pages &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ↓
* modules &emsp;&emsp;&emsp;&emsp;&emsp; ↓
* components ↓
* shared &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;↓

### Правила:
* Отдельные части приложения могут использовать только нижележащие части приложение
* shared/lib - глобальные хелперы
* shared/icons - глобальные иконки
* shared/models - глобальные сторы (при необходимости)
* shared/api - модуль для работы с API. Тут же методы для обращения к API, мапперы данных с сервера и для сервера
* shared/ui используется для базовых компонентов, как правило не будет использоваться из-за использования ui либы
* components агрегирует базовые компоненты для сборки переиспользуемые в разных модулях компонентов с малым содержанием бизнес логики или ее отсутствием
* modules содержит самостоятельные модули приложения с бизнес логикой, отображением и пр.
* pages агрегирует модули, компоненты и базовые компоненты для сборки страниц. В идеале содержит минимум  логики
* app малоиспользуемый модуль, содержащий глобальный конфиг приложения

## Setup dev

```sh
npm install
npm run dev
```

## Setup build

```sh
npm install
npm run build
```