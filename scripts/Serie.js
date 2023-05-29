export class Serie {
    constructor(imagen, nombre, categoria, directores, actores, episodios) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categoria = categoria;
        this.directores = directores;
        this.actores = actores;
        this.episodios = episodios;
    }
    mostrarDetalledeSerie() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Imagen: ${this.imagen}`);
        console.log(`Categorías: ${this.categoria.join(', ')}`);
        console.log('Directores:');
        this.directores.forEach(director => console.log(`- ${director.nombre}`));
        console.log('Actores:');
        this.actores.forEach(actor => console.log(`- ${actor.nombre}`));
        console.log('Episodios:');
        this.episodios.forEach(episodio => console.log(`- ${episodio.nombre}`));
    }
    agregarNuevaCategoria(categoria) {
        this.categoria.push(categoria);
    }
    agregarActor(actor) {
        this.actores.push(actor);
    }
    agregarDirector(director) {
        this.directores.push(director);
    }
    consultarSerie() {
        console.log(`Consulta de serie: ${this.nombre}`);
        console.log(`Imagen: ${this.imagen}`);
        console.log(`Categorías: ${this.categoria.join(', ')}`);
        console.log('Directores:');
        this.directores.forEach((director) => {
            console.log(`- ${director.nombre}`);
        });
        console.log('Actores:');
        this.actores.forEach((actor) => {
            console.log(`- ${actor.nombre}`);
        });
        console.log('Episodios:');
        this.episodios.forEach((episodio) => {
            console.log(`- ${episodio.nombre}`);
        });
    }
    mostrarListadodeCategorias() {
        console.log('Listado de categorías:');
        this.categoria.forEach((categoria) => {
            console.log(`- ${categoria}`);
        });
    }
    mostrarListadoDirectoresActores(serie) {
        console.log(`Listado de directores y actores de la serie ${serie.nombre}:`);
        console.log('Directores:');
        serie.directores.forEach((director) => {
            console.log(`- ${director.nombre}`);
        });
        console.log('Actores:');
        serie.actores.forEach((actor) => {
            console.log(`- ${actor.nombre}`);
        });
    }
    crearNuevaSerie(imagen, nombre, categoria, directores, actores, episodios) {
        const serieNueva = new Serie(imagen, nombre, categoria, directores, actores, episodios);
        console.log('Nueva serie creada:', serieNueva);
        return serieNueva;
    }
    agregarCategoria(nuevaCategoria) {
        this.categoria.push(nuevaCategoria);
        console.log(`Se ha agregado la categoría "${nuevaCategoria}" a la serie.`);
    }
    agregarCategoriaASerie(serie, categoria) {
        serie.agregarCategoria(categoria);
    }
    agregarActorASerie(serie, actor) {
        serie.agregarActor(actor);
    }
    agregarDirectorASerie(serie, director) {
        serie.agregarDirector(director);
    }
}
