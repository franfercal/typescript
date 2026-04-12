import type { Asignatura } from "./entidades";

interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivoSuspension: string;
}

interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

//Modulo 3
function nuncaEstadoMatricula(estadoDesconocido: never): never {
  throw new Error(
    `Estado de matrícula desconocido: ${JSON.stringify(estadoDesconocido)}`,
  );
}

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas: ${estado.asignaturas.map(asignatura => asignatura.nombre).join(", ")}.`;

    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivoSuspension}.`;

    case "FINALIZADA":
      return `Matrícula finalizada. Nota media: ${estado.notaMedia}.`;

    default: {
      return nuncaEstadoMatricula(estado);
    }
  }
}