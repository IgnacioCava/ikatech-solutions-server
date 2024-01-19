# IKTECH TÉCNICA
Escrito por
- Ignacio Cava
- cavaignacio11@gmail.com

Agradezco esta oportunidad de demostrar mi capacidad técnica. Espero que el proyecto sea de su agrado.

---

## Repositorios de GitHub

- [Cliente](https://github.com/IgnacioCava/ikatech-solutions-client)
- [Servidor](https://github.com/IgnacioCava/ikatech-solutions-server)

## Deployments

- [Cliente en Vercel](https://studio.apollographql.com/graph/ikatech-solutions-schema/variant/current/explorer)
- [Servidor en Railway](https://ikatech-solutions-server-production.up.railway.app/graphql)

## Recursos adicionales

- [Apollo Studio Explorer](https://studio.apollographql.com/graph/ikatech-solutions-schema/variant/current/explorer) - Para probar las operaciones y sus resultados
- [Apollo Studio Schema](https://studio.apollographql.com/graph/ikatech-solutions-schema/variant/current/schema/reference) - Para revisar el esquema utilizado

---
## Instrucciones de uso

### Para ejecutar el cliente en un entorno local:

- Clone el repositorio de GitHub.
  ```bash
  git clone https://github.com/IgnacioCava/ikatech-solutions-client.git
  ```

- Sitúese en el directorio del cliente y descargue las dependencias con su package manager de preferencia.
  ```bash
  cd iktech-solutions-client
  pnpm i
  ```

- **(opcional)** Si desea utilizar el servidor en la nube, debe crear un archivo .env en el root del proyecto con el siguiente texto:
  ```env
  NEXT_PUBLIC_API_URI=https://ikatech-solutions-server-production.up.railway.app/graphql
  ```
  
- Inicie la aplicación.
  ```bash
  pnpm dev
  ```

### Para crear un servidor local:

- Clone el repositorio de GitHub.
  ```bash
  git clone https://github.com/IgnacioCava/ikatech-solutions-server.git
  ```

- Sitúese en el directorio del cliente y descargue las dependencias con su packet manager de preferencia.
  ```bash
  cd iktech-solutions-server
  pnpm i
  ```
  
- Inicie el servidor.
  ```bash
  pnpm start
  ```
---

## Tecnologías 
Para este projecto se utilizó:

**Frontend**
- [Next.js](https://nextjs.org/docs): Se eligió Next.js por su fácil armado de rutas y cómoda integración con servicios de autenticación y otras APIs, aunque no fueron utilizadas en este proyecto.
- [GraphQL](https://graphql.org/learn/): El uso de GraphQL en el cliente permite solicitar únicamente la información necesaria a nuestro servidor, disminuyendo el número de pedidos y efectivizando la transferencia de datos.
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started): Redux Toolkit permite armar estados globales robustos junto a RTK Query, el cual no fue usado en esta oportunidad.
- [Apollo Client](https://www.apollographql.com/docs/react/): Apollo Client ofrece, entre otras cosas, hooks de React que facilitan el manejo de pedidos a servidores de GraphQL.
- [styled-components](https://styled-components.com/docs): styled-components es una de las mayores herramientas para el manejo de CSS, principalmente por su facilidad para integrar estilos condicionales mendiante props.

**Backend**
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/): Apollo Server permite crear rápidamente servidores de GraphQL.
- [GraphQL](https://graphql.org/learn/): GraphQL es la herramienta encargada de crear todo nuestro servidor. Una variante a las APIs REST con ventajas como reducción en el tiempo y peso de respuesta.

**Generales**
- [TypeScript](https://www.typescriptlang.org/docs/): Se utilizó TypeScript para implementar tipados que faciliten la calidad y lectura del código
- [Husky](https://typicode.github.io/husky/): Husky permite agregar acciones automáticas relacionadas a Git, como ejecutar linters antes de un commit.
- [Commitlint](https://commitlint.js.org/#/guides-local-setup): Commitlint obliga a estructurar los mensajes de commit de formas entendibles y predecibles.
- [ESlint](https://eslint.org/docs/latest/): ESLint es la herramienta principal de linting, asegurando que el código siga reglas que aumenten su calidad.
- [Prettier](https://prettier.io/docs/en/): Prettier asegura que el código de JavaScript mantenga un estilo particular a lo largo del proyecto.
- [lint-staged](https://www.npmjs.com/package/lint-staged): lint-staged ejecuta comandos sobre los documentos que estén en la etapa staged de git, por ejemplo, aplicar los cambios requeridos por ESlint y Prettier.

--- 

## Información adicional

En este proyecto, se intentó priorizar la velocidad y calidad del código por encima de otros aspectos que podrían ser esenciales a la hora de trabajar en un proyecto real. Entre estos, cabe mencionar:
- **Tests**: escribir pruebas robustas es primordial a la hora de trabajar en grandes proyectos, con el fin de garantizar un experiencia de usuario estable y libre de bugs. Sin embargo, es un proceso que suele resultar en un aumento del tiempo de desarrollo.
- **Estilos responsive**: si bien este proyecto incluye algunos estilos responsive, no son los suficientes como para dar soporte a la mayoría de dispositivos móbiles. Se consideró que esto no era importante para esta etapa.
