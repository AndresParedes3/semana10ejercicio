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
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Fotografía: ${this.fotografia}`)
        console.log(`Descripción: ${this.descripcion}`)
        console.log('Series en las que ha estado:')
        this.series.forEach((serie) => {
          console.log(`- ${serie.nombre}`)
        });
    }
    crearNuevoActor(nombre: string,fotografia: string,descripcion: string,series: Serie[]) {
        const nuevoActor = new Persona(nombre, fotografia, descripcion, series)
        this.series.forEach((serie) => {
          serie.agregarActor(nuevoActor)
        })
      }
      crearNuevoDirector(nombre: string,fotografia: string,descripcion: string,series: Serie[]) {
        const nuevoDirector = new Persona(nombre, fotografia, descripcion, series)
        this.series.forEach((serie) => {
          serie.agregarDirector(nuevoDirector)
        })
      }
  }

