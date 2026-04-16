import type {Estudiante, Asignatura}
from "../domain/types/entidades";

// CORRECCIÓN 1: satisfies aplicado al objeto completo con union type correcto
const baseDatos: Record<string, Estudiante | Asignatura> = {
    "estudiantes/1": {
        id: "1",
        nombre: "Francisco",
        apellidos: "Fdz Cala",
        dni: "12345679A",
        email: "francisco.fdz@gmail.com",
        telefono: 123456789,
        direccion: "Calle Prueba 123",
        ciudad: "Sevilla",
        pais: "España",
        codigoPostal: 41000,
        fechaNacimiento: new Date("1992-02-28"),
        genero: "Masculino"
    },
    "asignaturas/1": {
        id: "1",
        nombre: "Programacion",
        creditos: 9
    }
} satisfies Record<string, Estudiante | Asignatura>;

interface RespuestaAPI < T > {
    datos: T;
    estado: number;
    mensaje: string;
    timestamp: string;
}

// simualcion RED
function simuloRed(ms: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
}


function respuestaOK(obj: unknown): obj is RespuestaAPI<unknown> {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "datos" in obj &&
        "estado" in obj &&
        "mensaje" in obj &&
        "timestamp" in obj &&
        typeof (obj as RespuestaAPI<unknown>).estado === "number" &&
        typeof (obj as RespuestaAPI<unknown>).mensaje === "string" &&
        typeof (obj as RespuestaAPI<unknown>).timestamp === "string"
    );
}

async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    await simuloRed(500);

    const recurso = baseDatos[endpoint];

    if (recurso === undefined) {
        throw new Error(`Recurso no encontrado: "${endpoint}"`);
    }

    const respuesta: RespuestaAPI<T> = {
        datos: recurso as T,
        estado: 200,
        mensaje: "OK",
        timestamp: new Date().getTime().toString()
    };


    if (!respuestaOK(respuesta)) {
        throw new Error("Error");
    }

    return respuesta;
}


export type {RespuestaAPI};
export {obtenerRecurso};