export interface Estudiante {
    readonly id: string;
    nombre: string;
    apellidos: string;
    dni: number;
    email: string;
    telefono: number;
    direccion: string;
    ciudad: string;
    pais: string;
    codigoPostal: number;
    fechaNacimiento: Date;
    genero: string;
}

export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
}