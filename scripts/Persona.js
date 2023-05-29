export class Persona {
    constructor(nombre, fotografia, descripcion, series) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.series = series;
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fotografía: ${this.fotografia}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log('Series en las que ha estado:');
        this.series.forEach((serie) => {
            console.log(`- ${serie.nombre}`);
        });
    }
    crearNuevoActor(nombre, fotografia, descripcion, series) {
        const nuevoActor = new Persona(nombre, fotografia, descripcion, series);
        this.series.forEach((serie) => {
            serie.agregarActor(nuevoActor);
        });
    }
    crearNuevoDirector(nombre, fotografia, descripcion, series) {
        const nuevoDirector = new Persona(nombre, fotografia, descripcion, series);
        this.series.forEach((serie) => {
            serie.agregarDirector(nuevoDirector);
        });
    }
}
