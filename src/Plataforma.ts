import { Plan } from "./Plan"

export class Plataforma{
    nombre: string
    sitioWeb: string
    plan: Plan[]
    
    constructor(nombre:string, sitioWeb:string, plan:Plan[]){
        this.nombre = nombre
        this.sitioWeb = sitioWeb
        this.plan = plan
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Sitio web: ${this.sitioWeb}`)
        console.log('Planes y precios:')
        this.plan.forEach((plan) => {
          console.log(`- Plan: ${plan.nombre}, Precio: ${plan.precio}`)
        })
      }
      static mostrarPlataformas(plataformas: Plataforma[]) {
        console.log('Listado de plataformas:')
        plataformas.forEach((plataforma, index) => {
          console.log(`${index + 1}. ${plataforma.nombre}`)
        })
      }
    }
      