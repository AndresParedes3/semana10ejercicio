import { Persona } from './Persona'
import { Episodio } from './Episodio'

export class Serie{
    imagen : string
    nombre: string
    categoria: string[]
    directores: Persona []
    actores : Persona[]
    episodios: Episodio[]

    constructor(imagen:string, nombre: string, categoria: string[], directores: Persona[],actores: Persona[],episodios: Episodio[]){
        this.imagen = imagen
        this.nombre = nombre
        this.categoria = categoria
        this.directores = directores
        this.actores = actores
        this.episodios = episodios

    }
}