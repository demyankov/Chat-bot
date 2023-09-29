![test build](https://github.com/Power-Rangers-3/Front-end/actions/workflows/test-build.yml/badge.svg?branch=dev)

# Front-end

Build and start

```bash
docker compose up -d --build
```

Start

```bash
docker compose up
```

Stop

```bash
docker compose down
```

Open http://127.0.0.1:3000/

# Links
FRONTEND http://nodedev.twnsnd.online:32044\
BACKEND  http://nodedev.twnsnd.online:31034/api/docs

## Project Structure

```
├── .husky
├── .nginx/
│   └── nginx.conf
├── k8s/
│   ├── dev
│   ├── prod
│   └── qa
├── public/
│   ├── appConfig.js
│   └── index.html
├── src/
│   ├── api
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── components
│   ├── helpers
│   ├── hooks
│   ├── layouts
│   ├── modules/
│   │   ├── admin
│   │   ├── auth
│   │   ├── filtration
│   │   └── profile
│   ├──  pages
│   ├──  router
│   ├──  services
│   ├──  shared
│   ├──  sharedComponents
│   ├──  store
│   └── styles
└── package.json
```

## Used
│ React 
│ Typescript
│ eslint
│ stylelint
│ husky
│ react-hook-form, classNames
│ SCSS
│ AXIOS