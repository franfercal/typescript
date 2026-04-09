# Modulo 1 - Funciones matemáticas

Primer módulo del proyecto. Implementa dos funciones  en TypeScript usando tipos estrictos.

### `math-utils.ts`

Contiene las dos funciones.

#### `calcularMedia(array: number[]): number | null`

Calcula la **media aritmética** de un array de números. Suma todos los elementos y divide entre la cantidad. Devuelve `null` si el array está vacío.

#### `calcularMediana(array: number[]): number | null`

Calcula la **mediana** de un array. Ordena el array y toma el valor central. Si tiene un número par de elementos, hace un promedio de los dos valores del centro. Devuelve `null` si el array está vacío.

##### Por qué el operador `!`

En `calcularMediana`, al acceder a los elementos del array ordenado (`ordenado[mitad - 1]!`, `ordenado[mitad]!`) se usa el operador `!` al final.

Esto se debe a que el tsconfig tiene activada la opción **`noUncheckedIndexedAccess`**: TypeScript asume que el resultado puede ser `undefined` (porque no puede garantizar que el índice existe).

El operador `!` le dice al compilador: *"Seguro que hay algún valor"*, eliminando el `undefined` del tipo y permitiendo operar con él como `number`.

### `index.ts`

Punto de entrada. Importa las dos funciones y las ejecuta con un array de ejemplo `[1, 2, 10, 4, 22]`, y muestra los resultados en la consola.


## Carpeta `dist/` (generada al ejecutar `pnpm tsc`)

Al ejecutar el compilador , TypeScript genera en la carpeta `dist/` los siguientes tipos de archivos por cada `.ts` fuente:

| Archivo  `.js` | El código JavaScript resultante de compilar el TypeScript. Es el código que realmente ejecuta Node.js |
| Archivo  `.d.ts` | Archivo de declaraciones de tipos |
| Archivo  `.js.map` | Source map del `.js`. Mapea cada línea del JavaScript generado a su línea correspondiente en el `.ts` original |
| Archivo  `.d.ts.map` | Source map del `.d.ts`. Igual que el anterior pero para los archivos de declaración, permitiendo navegar desde los tipos hasta el código fuente original. |

Estos archivos se generan porque el tsconfig tiene `"sourceMap": true`, `"declaration": true` y `"declarationMap": true`.
