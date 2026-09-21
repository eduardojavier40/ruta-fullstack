# 🧭 Ruta Fullstack — Registro de aprendizaje

Repositorio de práctica y seguimiento del camino a desarrollador Fullstack (stack **React + Node/Express + PostgreSQL**). Cada carpeta corresponde a una fase de la ruta; cada commit es evidencia de avance.

**Inicio:** `<completa la fecha>` · **Meta:** nivel júnior empleable en 8–12 meses con 2–3 h/día.

---

## 📁 Estructura del repositorio

Crea esta estructura de carpetas en tu repositorio `ruta-fullstack`:

```
ruta-fullstack/
├── README.md
├── 00-fundamentos/
│   ├── git-y-terminal/
│   └── logica-de-programacion/
├── 01-frontend/
│   ├── html-css/
│   ├── javascript/
│   ├── typescript/
│   └── react/
├── 02-backend/
│   ├── node-express/
│   ├── autenticacion/
│   └── testing-backend/
├── 03-bases-de-datos/
│   ├── postgresql/
│   ├── mongodb/
│   └── prisma-orm/
├── 04-devops/
│   ├── docker/
│   ├── ci-cd/
│   └── despliegue/
├── 05-avanzado/
│   ├── arquitectura-y-patrones/
│   ├── redis-graphql-websockets/
│   └── testing-e2e/
└── proyectos/
    ├── 01-landing-page/
    ├── 02-todo-app/
    ├── 03-clima-app/
    ├── 04-api-rest-blog/
    ├── 05-ecommerce-fullstack/
    └── 06-dashboard-tiempo-real/
```

Comando para crearla de una vez (PowerShell, parado dentro de `ruta-fullstack`):

```powershell
mkdir 00-fundamentos\git-y-terminal, 00-fundamentos\logica-de-programacion, `
      01-frontend\html-css, 01-frontend\javascript, 01-frontend\typescript, 01-frontend\react, `
      02-backend\node-express, 02-backend\autenticacion, 02-backend\testing-backend, `
      03-bases-de-datos\postgresql, 03-bases-de-datos\mongodb, 03-bases-de-datos\prisma-orm, `
      04-devops\docker, 04-devops\ci-cd, 04-devops\despliegue, `
      05-avanzado\arquitectura-y-patrones, 05-avanzado\redis-graphql-websockets, 05-avanzado\testing-e2e, `
      proyectos\01-landing-page, proyectos\02-todo-app, proyectos\03-clima-app, `
      proyectos\04-api-rest-blog, proyectos\05-ecommerce-fullstack, proyectos\06-dashboard-tiempo-real
```

Cada subcarpeta de tema lleva los ejercicios sueltos que hagas de ese tema; cada subcarpeta de `proyectos/` es un proyecto completo con su propio `README.md` explicando qué hace y cómo correrlo.

---

## ✅ Cómo registrar avance

1. Al terminar un tema, sube el código a su carpeta y haz commit con este formato:
   `git commit -m "fase(00-fundamentos): practica de git branching"`
2. Marca la casilla correspondiente en el checklist de abajo y haz commit del `README.md` (`docs: marcar avance semanal`).
3. Agrega una fila a la [bitácora semanal](#-bitácora-semanal) cada semana, aunque el avance haya sido poco.
4. Cuando termines un proyecto de `proyectos/`, agrégalo también a la tabla de [portafolio](#-portafolio).

---

## 🗺️ Checklist de la ruta

### Fase 00 · Fundamentos — `00-fundamentos/`
- [ ] Cómo funciona la web: HTTP, cliente-servidor, DNS
- [ ] Terminal básica: navegación, archivos, permisos
- [ ] Git: init, add, commit, branch, merge, push, pull
- [ ] Flujo de Pull Request en GitHub
- [ ] Variables, tipos de datos, operadores
- [ ] Condicionales y bucles
- [ ] Funciones y estructuras de datos (arrays, objetos)

### Fase 01 · Frontend — `01-frontend/`
- [ ] HTML5 semántico y accesibilidad
- [ ] CSS: Flexbox y Grid
- [ ] Diseño responsive (mobile-first)
- [ ] Tailwind CSS
- [ ] DOM y eventos
- [ ] JavaScript ES6+: arrow functions, destructuring, spread
- [ ] Promesas, async/await y fetch
- [ ] Módulos ES y organización de código
- [ ] TypeScript: tipos básicos, interfaces, genéricos
- [ ] React: componentes, props y estado
- [ ] React Hooks: useState, useEffect, useContext
- [ ] React Router
- [ ] Consumo de APIs y estado remoto
- [ ] Next.js: rutas, SSR/SSG básico

### Fase 02 · Backend — `02-backend/`
- [ ] Node.js: módulos, npm, package.json
- [ ] Express: rutas, middlewares, controladores
- [ ] API REST: verbos HTTP, códigos de estado, validación
- [ ] Manejo de errores centralizado
- [ ] Hashing de contraseñas (bcrypt)
- [ ] JWT y sesiones
- [ ] CORS, variables de entorno, OWASP Top 10
- [ ] Pruebas unitarias con Jest/Vitest
- [ ] Pruebas de endpoints con Supertest

### Fase 03 · Bases de datos — `03-bases-de-datos/`
- [ ] PostgreSQL: tablas, relaciones, JOINs
- [ ] Índices, transacciones y normalización
- [ ] MongoDB: documentos, colecciones, cuándo usar NoSQL
- [ ] Prisma: modelado de esquemas y migraciones

### Fase 04 · DevOps y despliegue — `04-devops/`
- [ ] Dockerfile básico y docker-compose
- [ ] GitHub Actions: pipeline de build y test
- [ ] Desplegar frontend en Vercel
- [ ] Desplegar backend + DB en Render/Railway
- [ ] Variables de entorno y logs en producción

### Fase 05 · Nivel avanzado — `05-avanzado/`
- [ ] MVC, capas, clean architecture, SOLID
- [ ] Caché con Redis
- [ ] GraphQL básico
- [ ] WebSockets en tiempo real
- [ ] Testing end-to-end con Playwright/Cypress
- [ ] Estructuras de datos y algoritmos para entrevistas

---

## 🏗️ Portafolio

| # | Proyecto | Carpeta | Cierra fase(s) | Estado | Demo / repo |
|---|----------|---------|-----------------|--------|--------------|
| 1 | Landing page responsive | `proyectos/01-landing-page` | 01 (html-css) | ⬜ Pendiente | |
| 2 | To-do app en React | `proyectos/02-todo-app` | 01 (JS + React) | ⬜ Pendiente | |
| 3 | App del clima (consumo de API) | `proyectos/03-clima-app` | 01 (Frontend) | ⬜ Pendiente | |
| 4 | API REST de blog con auth | `proyectos/04-api-rest-blog` | 02 + 03 | ⬜ Pendiente | |
| 5 | E-commerce fullstack | `proyectos/05-ecommerce-fullstack` | Integrador (01-04) | ⬜ Pendiente | |
| 6 | Dashboard en tiempo real | `proyectos/06-dashboard-tiempo-real` | 05 (Avanzado) | ⬜ Pendiente | |

Actualiza **Estado** a `🟨 En curso` o `✅ Listo` y agrega el link de demo o del repo del proyecto (si vive aparte) cuando corresponda.

---

## 📆 Bitácora semanal

Agrega una fila cada semana. Es lo que te permite ver el progreso real y no solo el checklist.

| Semana | Fecha | Fase / tema | Horas | Notas |
|--------|-------|--------------|-------|-------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

---

## 🔗 Recursos de referencia

- Documentación oficial: [MDN Web Docs](https://developer.mozilla.org/es/), [React](https://react.dev), [Node.js](https://nodejs.org/es/docs), [PostgreSQL](https://www.postgresql.org/docs/), [Prisma](https://www.prisma.io/docs)
- Buenas prácticas de commits: [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)
