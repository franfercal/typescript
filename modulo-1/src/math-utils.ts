export function calcularMedia(array: number[]): number | null {
    if (array.length === 0) {
        console.error("Error: el array no puede estar vacío");
        return null;
    }

    let suma: number = 0;
    for (const num of array) {
        suma += num;
    }

    return suma / array.length;
}


// Atencion con el "!". Ya que no hay comprobacion de si hay o no un numero.
export function calcularMediana(array: number[]): number | null{
    if (array.length === 0) return null;

    const ordenado: number[] = [...array].sort((a, b) => a - b);
    const num: number = ordenado.length;

    //  Atento al  "!"
    if (num % 2 === 0) {
        const mitad = num / 2;
        return (ordenado[mitad - 1] ! + ordenado[mitad]!) / 2;
    } else {
        return ordenado[Math.floor(num / 2)] !;
    }
}
