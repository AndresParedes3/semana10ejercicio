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
    mostrarDetalledeSerie() {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Imagen: ${this.imagen}`)
        console.log(`Categorías: ${this.categoria.join(', ')}`)
        console.log('Directores:')
        this.directores.forEach(director => console.log(`- ${director.nombre}`))
        console.log('Actores:')
        this.actores.forEach(actor => console.log(`- ${actor.nombre}`))
        console.log('Episodios:')
        this.episodios.forEach(episodio => console.log(`- ${episodio.nombre}`))
      }
    
    agregarNuevaCategoria(categoria: string) {
        this.categoria.push(categoria)
    }
    agregarActor(actor: Persona) {
    this.actores.push(actor)
    }
    agregarDirector(director: Persona) {
    this.directores.push(director)
    }
    consultarSerie() {
        console.log(`Consulta de serie: ${this.nombre}`)
        console.log(`Imagen: ${this.imagen}`)
        console.log(`Categorías: ${this.categoria.join(', ')}`)
        console.log('Directores:')
        this.directores.forEach((director) => {
          console.log(`- ${director.nombre}`)
        })
        console.log('Actores:')
        this.actores.forEach((actor) => {
          console.log(`- ${actor.nombre}`)
        })
        console.log('Episodios:')
        this.episodios.forEach((episodio) => {
          console.log(`- ${episodio.nombre}`)
        })
      }
      mostrarListadodeCategorias() {
        console.log('Listado de categorías:')
        this.categoria.forEach((categoria) => {
          console.log(`- ${categoria}`)
        })
      }
      mostrarListadoDirectoresActores(serie: Serie) {
        console.log(`Listado de directores y actores de la serie ${serie.nombre}:`)
        console.log('Directores:')
        serie.directores.forEach((director) => {
          console.log(`- ${director.nombre}`)
        })
        console.log('Actores:')
        serie.actores.forEach((actor) => {
          console.log(`- ${actor.nombre}`)
        })
      }
        crearNuevaSerie(imagen: string, nombre: string,categoria: string[],directores: Persona[],actores: Persona[],episodios: Episodio[] ) {
        const serieNueva = new Serie(imagen, nombre, categoria, directores, actores, episodios)
        console.log('Nueva serie creada:', serieNueva)
        return serieNueva
      }
      agregarCategoria(nuevaCategoria: string) {
        this.categoria.push(nuevaCategoria)
        console.log(`Se ha agregado la categoría "${nuevaCategoria}" a la serie.`)
      }
      agregarCategoriaASerie(serie: Serie, categoria: string) {
        serie.agregarCategoria(categoria)
      }
      agregarActorASerie(serie: Serie, actor: Persona) {
        serie.agregarActor(actor);
    }
    agregarDirectorASerie(serie: Serie, director: Persona) {
        serie.agregarDirector(director);
      }
    }
