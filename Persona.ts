import { Serie } from "./Serie"

export class Persona{
    nombre: string
    fotografia: string
    descripcion: string
    series: Serie []

    constructor(nombre:string, fotografia:string, descripcion:string, series: Serie[]){
        this.nombre = nombre
        this.fotografia = fotografia
        this.descripcion = descripcion
        this.series = series
    }
}
