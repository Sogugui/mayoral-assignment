# NextJS E-commerce - Mayoral Assignment
An e-commerce platform built with Next.js for seamless product browsing and searching experience 🛒

## Tech Stack
Next.js (Pages router), TypeScript, Tailwind CSS, Jest, React Testing Library

## Instalation
Install the project with npm

```bash
  cd mayoral-assignment
  npm install
```
## Run on the Web 🔥
Deployment link: [www.mayoral-assignment.com](https://mayoral-assignment-psi.vercel.app/)

## Run Locally 
Start the development server

```bash
  npm run dev
```
## Features 
- Responsive design for mobile and desktop
- Product search functionality
- JSON data fetching for products
- Sort products by price (ascending and descending)
- Component-based architecture
- Testing with Jest and React Testing Library

## Development Challenges 🚧
### Responsive Layout
The design required different layouts based on device width:
- Desktop: Adjust from 4 to 3 items per row
- Mobile: Adjust from 3 to 2 items per row

To achieve this, Tailwind CSS was utilized for its utility-first approach, making it easier to manage responsive styles. A context was created to dynamically infer the appropriate Tailwind classes based on screen size.

```typescript
const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  const { gridCols } = useContext(AppContext);

  return (
    <div
      className={`grid
     ${gridCols.mobile} 
      ${gridCols.lg} 
      gap-5 mb-10  mx-auto p-4`}
    >
      {products.map((product, index) => (
        <ProductGridItem key={index} product={product} />
      ))}
    </div>
  );
};
```
### Sorting Functionality
Implementing sorting by price involved creating a component that handles the sorting logic and updates the query parameters in the URL accordingly.

```typescript
 const router = useRouter();

  const filterProducts = (filterParams: Partial<FilterParams>) => {
    const newQuery: FilterParams = { ...router.query, ...filterParams };
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };
```
## How to Use :mag:
- Product Search: Enter the product name in the search bar to filter the product list.
- Sort Products: Use the sorting button to order products by price (ascending/descending)

### Desktop View
The desktop view features a grid layout that adapts between 4 to 3 items per row based on screen width. Use the + and - buttons to manually adjust the grid size


### Mobile View
The mobile view adjusts to display 2 items per row, ensuring a user-friendly experience on smaller screens. Use the + and - buttons to manually adjust the grid size.


# Testing
Unit tests are implemented using Jest and React Testing Library to ensure the reliability of components and functionality.

```bash
npm run test
```

# Project Requirements

|  Desktop | Mobile |
|:--------:|:------:|
| ![Desktop](./.github/desktop.png) | ![Mobile](./.github/mobile.png)  |

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

Tecnologías/Librerías requeridas:

-	React
-	Typescript
-	Next.js

Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada
- La vista debe asemejarse lo más parecido posible a las fotos adjuntas
- Implementar búsqueda de productos por nombre
- Consumir un JSON con los datos de productos (JSON local o externo)
- Cambiar la vista con los iconos indicados en la foto: 
  - Escritorio de 4 a 3 elementos
  - Móvil de 3 a 2 elementos
- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
- Crea los test unitarios que creas conveniente

## Author
[@Sofía Guardia Guillan](https://github.com/Sogugui)
