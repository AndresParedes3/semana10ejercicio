import { Persona } from "./Persona.js";
import { Serie } from "./Serie.js";
import { Plan } from "./Plan.js";
import { Plataforma } from "./Plataforma.js";
import { Episodio } from "./Episodio.js";

const director1 = new Persona('Vince Gilligan', "https://onx.la/a9b84", 'Es el creador de la aclamada serie televisiva Breaking Bad y su spin-off Better Call Saul.', [])
const director2 = new Persona('Mark Mylod', "https://flxt.tmsimg.com/assets/279368_v9_bb.jpg", "Es el director de la serie famosa Game of Thrones", [])
const actor1 = new Persona('Pedro Pascal', 'https://onx.la/5b023', 'Es un reconocido actor de multiples series como The Last of Us, entre otras', [])
const actor2 = new Persona('Bryan Cranston', 'https://onx.la/25b90', 'Es el actor principal de la serie famosa Breaking Bad', [])
const episodio1 = new Episodio("...And the Bag's in the River", "Mientras limpian el desastre ocasionado, vemos un flashback de un joven Walt descubriendo los elementos químicos presentes en el cuerpo humano, donde se da cuenta que existe un porcentaje muy pequeño que no corresponde a nada y que podría ser algo incuantificable", 47);
const episodio2 = new Episodio('Lord Snow', 'Ned asume el cargo de Mano del Rey. Dany recibe buenas noticias sobre su futuro.', 58)
const serie1 = new Serie('https://onx.la/dcbc6', 'Game Of Thrones', ['Acción', 'Drama', "Aventura"], [director2], [actor1], [episodio2])
const serie2 = new Serie('https://onx.la/6cfb0', 'Breaking Bad', ['Romance', 'Drama'], [director1], [actor2], [episodio1])

const plan1 = new Plan('Plan Básico', 14.000)
const plan2 = new Plan('Plan Estándar', 25.000)
const plan3 = new Plan('Plan Pro', 32.000)

const plataforma1 = new Plataforma('Netflix', 'www.netflix.com', [plan1, plan2, plan3])
const plataforma2 = new Plataforma('HBO', "https://www.hbomax.com/co/es", [plan2, plan3])

serie1.mostrarDetalledeSerie()
serie1.agregarNuevaCategoria('Guerra')
serie1.agregarActor(actor1)
serie1.agregarDirector(director2)
serie1.consultarSerie()
serie1.mostrarListadodeCategorias()
serie1.mostrarListadoDirectoresActores(serie1)

serie2.mostrarDetalledeSerie()
serie2.agregarNuevaCategoria('Accion')
serie2.agregarActor(actor1)
serie2.agregarDirector(director2)
serie2.consultarSerie()
serie2.mostrarListadodeCategorias()
serie2.mostrarListadoDirectoresActores(serie2)
