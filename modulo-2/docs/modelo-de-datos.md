# Modelo de datos — módulo `modulo-2`

## Visión general

Archivos:
`domain/types/entidades.ts` Entidades principales
`domain/types/matricula.ts` Estados y lógica
`services/api-client.ts`  función genérica de obtención  de datos en API


## Entidades: `Estudiante` y `Asignatura`

Se definen como **interfaces**  que representan recursos del dominio y que pueden añadir campos opcionales o extenderse con `extends` en el futuro

**`readonly id`**: el identificador se marca como inmutable
**Campos con tipos concretos**


## Matrícula: unión discriminada (`EstadoMatricula`)

Los tres estados posibles (`ACTIVA`, `SUSPENDIDA`, `FINALIZADA`) se modelan con **interfaces separadas** unidas mediante un **`type` alias**:

```ts
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;
```

## Capa de servicio: `RespuestaAPI<T>` y genéricos

### Interfaz genérica `RespuestaAPI<T>`

La respuesta HTTP (o su simulación) no es solo el recurso (`Estudiante`, `Asignatura`, etc.), sino algo en común con metadatos: código de estadoy mensaje

```ts
interface RespuestaAPI<T> {
    datos: T;
    estado: number;
    mensaje: string;
    timestamp: string;
}
```


### Comprobación en tiempo de ejecución: `respuestaOK`

La función `respuestaOK` es el puente entre datos externos no fiables y el modelo tipado; documenta la intención de validar antes de confiar en la forma `RespuestaAPI`.


## Base de datos simulada y `satisfies`

El objeto `baseDatos` usa `satisfies Record<string, Estudiante | Asignatura>` para que:

- Cada entrada sea **compatible** con una de las dos entidades
- TypeScript **asuma** los tipos concretos de las claves y valores donde sea posible, manteniendo comprobaciones.
La unión `Estudiante | Asignatura` refleja que el almacén clave-valor mezcla **distintos recursos** bajo URLs del estilo REST (`estudiantes/…`, `asignaturas/…`).
