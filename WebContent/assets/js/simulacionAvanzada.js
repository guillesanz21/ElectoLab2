//let partidosRecibidos = require('partidos.json');



function lee_json (){
	$.getJSON("/partidos.json"), function(partidos) {
		alert("nameCode: " + partidos["nameCode"]);
		alert("fullName: " + partidos["fullName"]);
		alert("seats: " + partidos["seats"]);
		alert("vote: " + partidos["vote"]);
	}
}

let partidosRecibidos = new lee_json();

let diputados = [ 	{
	"nombre":"Ábalos Meco, José Luis",
	"sexo": "Hombre",
	"nacimiento":1959,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Valencia"
},
{
	"nombre":"Abascal Conde, Santiago",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Madrid"
},
{
	"nombre":"Aceves Galindo, José Luis",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Segovia"
},
{
	"nombre":"Agirretxea Urresti, Joseba Andoni",
	"sexo": "Hombre",
	"nacimiento":1966,
	"estado civil": "casado",
	"partido":"PNV",
	"provincia":"Guipúzcoa"
},
{
	"nombre":"Aizcorbe Torra, Juan José",
	"sexo": "Hombre",
	"nacimiento":1959,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Barcelona"
},
{
	"nombre":"Aizpurua Arzallus, Mertxe",
	"sexo": "Mujer",
	"nacimiento":1960,
	"estado civil": "casado",
	"partido":"BILDU",
	"provincia":"Guipúzcoa"
},
{
	"nombre":"Alcaraz Martos, Francisco José",
	"sexo": "Hombre",
	"nacimiento":1968,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Jaén"
},
{
	"nombre":"Alfonso Cendón, Javier",
	"sexo": "Hombre",
	"nacimiento":1983,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"León"
},
{
	"nombre":"Almodóbar Barceló, Agustín",
	"sexo": "Hombre",
	"nacimiento":1977,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Alicante"
},
{
	"nombre":"Alonso Pérez, José Ángel",
	"sexo": "Hombre",
	"nacimiento":1993,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Valladolid"
},
{
	"nombre":"Alonso Suárez, María Olga",
	"sexo": "Mujer",
	"nacimiento":1962,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Pontevedra"
},
{
	"nombre":"Alonso-Cuevillas i Sayrol, Jaume",
	"sexo": "Hombre",
	"nacimiento":1961,
	"estado civil": "soltero",
	"partido":"JxCAT-JUNTS",
	"provincia":"Barcelona"
},
{
	"nombre":"Álvarez de Toledo Peralta-Ramos, Cayetana",
	"sexo": "Mujer",
	"nacimiento":1974,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Barcelona"
},
{
	"nombre":"Álvarez Fanjul, Beatriz",
	"sexo": "Mujer",
	"nacimiento":1991,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Bizkaia"
},
{
	"nombre":"Andrés Añón, Carmen",
	"sexo": "Mujer",
	"nacimiento":1964,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Andrés Barea, Josefa",
	"sexo": "Mujer",
	"nacimiento":1958,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Valencia"
},
{
	"nombre":"Anguita Pérez, Omar",
	"sexo": "Hombre",
	"nacimiento":1990,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Angulo Romero, María Teresa",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Badajoz"
},
{
	"nombre":"Antón Cacho, Javier",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Soria"
},
{
	"nombre":"Aragonés Mendiguchía, Carlos",
	"sexo": "Hombre",
	"nacimiento":1956,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Aranda Vargas, Francisco",
	"sexo": "Hombre",
	"nacimiento":1977,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Araujo Morales, Gemma",
	"sexo": "Mujer",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Cádiz"
},
{
	"nombre":"Arribas Maroto, Manuel",
	"sexo": "Hombre",
	"nacimiento":1986,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Ávila"
},
{
	"nombre":"Arrimadas García, Inés",
	"sexo": "Mujer",
	"nacimiento":1981,
	"estado civil": "casado",
	"partido":"CS",
	"provincia":"Barcelona"
},
{
	"nombre":"Asarta Cuevas, Alberto",
	"sexo": "Hombre",
	"nacimiento":1951,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Castellón"
},
{
	"nombre":"Asens Llodrà, Jaume",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Barcelona"
},
{
	"nombre":"Azorín Salar, Lázaro",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Alicante"
},
{
	"nombre":"Bal Francés, Edmundo",
	"sexo": "Hombre",
	"nacimiento":1967,
	"estado civil": "casado",
	"partido":"CS",
	"provincia":"Madrid"
},
{
	"nombre":"Baldoví Roda, Joan",
	"sexo": "Hombre",
	"nacimiento":1958,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Valencia"
},
{
	"nombre":"Baños Ruiz, Carmen",
	"sexo": "Mujer",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Murcia"
},
{
	"nombre":"Barandiaran Benito, Íñigo",
	"sexo": "Hombre",
	"nacimiento":1959,
	"estado civil": "soltero",
	"partido":"PNV",
	"provincia":"Guipúzcoa"
},
{
	"nombre":"Bas Corugeira, Javier",
	"sexo": "Hombre",
	"nacimiento":1963,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Pontevedra"
},
{
	"nombre":"Bassa Coll, Montserrat",
	"sexo": "Mujer",
	"nacimiento":1965,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Girona"
},
{
	"nombre":"Batet Lamaña, Meritxell",
	"sexo": "Mujer",
	"nacimiento":1973,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Bel Accensi, Ferran",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "casado",
	"partido":"JxCAT-JUNTS",
	"provincia":"Tarragona"
},
{
	"nombre":"Belarra Urteaga, Ione",
	"sexo": "Mujer",
	"nacimiento":1987,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Navarra"
},
{
	"nombre":"Beltrán Villalba, Ana María",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Berja Vega, Laura",
	"sexo": "Mujer",
	"nacimiento":1986,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Jaén"
},
{
	"nombre":"Bermúdez de Castro Fernández, José Antonio",
	"sexo": "Hombre",
	"nacimiento":1959,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Salamanca"
},
{
	"nombre":"Betoret Coll, Vicente",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Valencia"
},
{
	"nombre":"Blanquer Alcaraz, Patricia",
	"sexo": "Mujer",
	"nacimiento":1973,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Alicante"
},
{
	"nombre":"Boadella Esteve, Genís",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"JxCAT-JUNTS",
	"provincia":"Barcelona"
},
{
	"nombre":"Borràs Castanyer, Laura",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"JxCAT-JUNTS",
	"provincia":"Barcelona"
},
{
	"nombre":"Borrás Pabón, Mireia",
	"sexo": "Mujer",
	"nacimiento":1986,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Madrid"
},
{
	"nombre":"Borrego Cortés, Isabel María",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Murcia"
},
{
	"nombre":"Botella Gómez, Ana María",
	"sexo": "Mujer",
	"nacimiento":1958,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Valencia"
},
{
	"nombre":"Botran Pahissa, Albert",
	"sexo": "Hombre",
	"nacimiento":1984,
	"estado civil": "soltero",
	"partido":"CUP",
	"provincia":"Barcelona"
},
{
	"nombre":"Bravo Barco, Eva",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Cádiz"
},
{
	"nombre":"Bueno Campanario, Eva Patricia",
	"sexo": "Mujer",
	"nacimiento":1971,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Sevilla"
},
{
	"nombre":"Caballero Gutiérrez, Helena",
	"sexo": "Mujer",
	"nacimiento":1959,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Valladolid"
},
{
	"nombre":"Cabezón Casas, Tomás",
	"sexo": "Hombre",
	"nacimiento":1981,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Soria"
},
{
	"nombre":"Callejas Cano, Juan Antonio",
	"sexo": "Hombre",
	"nacimiento":1974,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Ciudad Real"
},
{
	"nombre":"Calvo Liste, Pablo Juan",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"León"
},
{
	"nombre":"Calvo Poyato, Carmen",
	"sexo": "Mujer",
	"nacimiento":1957,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Cambronero Piqueras, Pablo",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "casado",
	"partido":"CS",
	"provincia":"Sevilla"
},
{
	"nombre":"Cañadell Salvia, Concep",
	"sexo": "Mujer",
	"nacimiento":1977,
	"estado civil": "casado",
	"partido":"JxCAT-JUNTS",
	"provincia":"Lleida"
},
{
	"nombre":"Canales Duque, Mariana de Gracia",
	"sexo": "Mujer",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Cuenca"
},
{
	"nombre":"Cancela Rodríguez, Pilar",
	"sexo": "Mujer",
	"nacimiento":1967,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Coruña"
},
{
	"nombre":"Cañizares Pacheco, Inés María",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Toledo"
},
{
	"nombre":"Cantera de Castro, Zaida",
	"sexo": "Mujer",
	"nacimiento":1977,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Capdevila i Esteve, Joan",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "casado",
	"partido":"ERC",
	"provincia":"Barcelona"
},
{
	"nombre":"Carazo Hermoso, Eduardo",
	"sexo": "Hombre",
	"nacimiento":1990,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Valladolid"
},
{
	"nombre":"Carcedo Roces, María Luisa",
	"sexo": "Hombre",
	"nacimiento":1953,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Asturias"
},
{
	"nombre":"Carrillo de los Reyes, Beatriz Micaela",
	"sexo": "Mujer",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Sevilla"
},
{
	"nombre":"Carvalho Dantas, María",
	"sexo": "Mujer",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Barcelona"
},
{
	"nombre":"Casado Blanco, Pablo",
	"sexo": "Hombre",
	"nacimiento":1981,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Casares Hontañón, Pedro",
	"sexo": "Hombre",
	"nacimiento":1983,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Cantabria"
},
{
	"nombre":"Casero Ávila, Alberto",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Cáceres"
},
{
	"nombre":"Castellón Rubio, Miguel Ángel",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Almería"
},
{
	"nombre":"Castillo López, Elena",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Cantabria"
},
{
	"nombre":"Cerdán León, Santos",
	"sexo": "Hombre",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Navarra"
},
{
	"nombre":"Cerqueiro González, Javier",
	"sexo": "Hombre",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Lugo"
},
{
	"nombre":"Chamorro Delmo, Ricardo",
	"sexo": "Hombre",
	"nacimiento":1977,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Ciudad Real"
},
{
	"nombre":"Clavell López, Óscar",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Castellón"
},
{
	"nombre":"Contreras Peláez, Francisco José",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Sevilla"
},
{
	"nombre":"Cortés Carballo, Mario",
	"sexo": "Hombre",
	"nacimiento":1977,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Málaga"
},
{
	"nombre":"Cortés Gómez, Ismael",
	"sexo": "Hombre",
	"nacimiento":1985,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Castellón"
},
{
	"nombre":"Crespín Rubio, Rafaela",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Córdoba"
},
{
	"nombre":"Cruz-Guzmán García, María Soledad",
	"sexo": "Mujer",
	"nacimiento":1975,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Sevilla"
},
{
	"nombre":"Cuatrecasas Asua, Juan",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"La Rioja"
},
{
	"nombre":"De las Heras Fernández, Patricia",
	"sexo": "Mujer",
	"nacimiento":1988,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Baleares"
},
{
	"nombre":"De Luna Tobarra, Llanos",
	"sexo": "Mujer",
	"nacimiento":1960,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Barcelona"
},
{
	"nombre":"De Meer Méndez, Rocío",
	"sexo": "Mujer",
	"nacimiento":1989,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Almería"
},
{
	"nombre":"De Quinto Romero, Marcos",
	"sexo": "Hombre",
	"nacimiento":1958,
	"estado civil": "soltero",
	"partido":"CS",
	"provincia":"Madrid"
},
{
	"nombre":"Del Valle de Iscar, Julio",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Valladolid"
},
{
	"nombre":"Del Valle Rodríguez, Emilio Jesús",
	"sexo": "Hombre",
	"nacimiento":1960,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Cantabria"
},
{
	"nombre":"Delgado Arce, Celso Luis",
	"sexo": "Hombre",
	"nacimiento":1958,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Orense"
},
{
	"nombre":"Díaz Gómez, Guillermo",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"CS",
	"provincia":"Málaga"
},
{
	"nombre":"Díaz Pérez, Yolanda",
	"sexo": "Mujer",
	"nacimiento":1971,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Pontevedra"
},
{
	"nombre":"Diouf Dioh, Luc Andre",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Las Palmas"
},
{
	"nombre":"Durán Peralta, José Carlos",
	"sexo": "Hombre",
	"nacimiento":1987,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Málaga"
},
{
	"nombre":"Echániz Salgado, José Ignacio",
	"sexo": "Hombre",
	"nacimiento":1963,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Guadalajara"
},
{
	"nombre":"Echenique Robba, Pablo",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Zaragoza"
},
{
	"nombre":"Elizo Serrano, María Gloria",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Madrid"
},
{
	"nombre":"Elorza González, Odón",
	"sexo": "Hombre",
	"nacimiento":1955,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Guipúzcoa"
},
{
	"nombre":"Eritja Ciuró, Francesc Xavier",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Lleida"
},
{
	"nombre":"Errejón Galván, Íñigo",
	"sexo": "Hombre",
	"nacimiento":1983,
	"estado civil": "soltero",
	"partido":"MASPAIS",
	"provincia":"Madrid"
},
{
	"nombre":"España Reina, Carolina",
	"sexo": "Mujer",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Málaga"
},
{
	"nombre":"Espejo-Saavedra Conesa, José María",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"CS",
	"provincia":"Barcelona"
},
{
	"nombre":"Espinosa de los Monteros de Simón, Iván",
	"sexo": "Hombre",
	"nacimiento":1971,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Madrid"
},
{
	"nombre":"Esteban Bravo, Aitor",
	"sexo": "Hombre",
	"nacimiento":1962,
	"estado civil": "casado",
	"partido":"PNV",
	"provincia":"Bizkaia"
},
{
	"nombre":"Esteban Calonje, Cristina Alicia",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Valencia"
},
{
	"nombre":"Fagúndez Campo, Antidio",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Zamora"
},
{
	"nombre":"Faneca López, María Luisa",
	"sexo": "Mujer",
	"nacimiento":1957,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Huelva"
},
{
	"nombre":"Fernández Benéitez, Andrea",
	"sexo": "Mujer",
	"nacimiento":1992,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"León"
},
{
	"nombre":"Fernández Casero, Ana Belén",
	"sexo": "Mujer",
	"nacimiento":1974,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Cáceres"
},
{
	"nombre":"Fernández Castañón, Sofía",
	"sexo": "Mujer",
	"nacimiento":1983,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Asturias"
},
{
	"nombre":"Fernández Hernández, Pedro",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Zaragoza"
},
{
	"nombre":"Fernández Ríos, Tomás",
	"sexo": "Hombre",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Huelva"
},
{
	"nombre":"Fernández-Lomana Gutiérrez, Rafael",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Santander"
},
{
	"nombre":"Fernández-Roca Suárez, Carlos Hugo",
	"sexo": "Hombre",
	"nacimiento":1982,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Albacete"
},
{
	"nombre":"Ferrer Tesoro, Sonia",
	"sexo": "Mujer",
	"nacimiento":1973,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Almería"
},
{
	"nombre":"Figaredo Álvarez-Sala, José María",
	"sexo": "Hombre",
	"nacimiento":1988,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Asturias"
},
{
	"nombre":"Franco Carmona, Isabel",
	"sexo": "Mujer",
	"nacimiento":1985,
	"estado civil": "casado",
	"partido":"UP",
	"provincia":"Sevilla"
},
{
	"nombre":"Fuentes Curbelo, Juan Bernardo",
	"sexo": "Hombre",
	"nacimiento":1962,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Las Palmas"
},
{
	"nombre":"Gago Bugarín, Diego",
	"sexo": "Hombre",
	"nacimiento":1987,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Pontevedra"
},
{
	"nombre":"Gamarra Ruiz-Clavijo, Concepción",
	"sexo": "Mujer",
	"nacimiento":1974,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"La Rioja"
},
{
	"nombre":"Gamazo Micó, Óscar",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Valencia"
},
{
	"nombre":"Garcés Sanagustín, Mario",
	"sexo": "Hombre",
	"nacimiento":1967,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Huesca"
},
{
	"nombre":"García Adanero, Carlos",
	"sexo": "Hombre",
	"nacimiento":1967,
	"estado civil": "soltero",
	"partido":"NA",
	"provincia":"Navarra"
},
{
	"nombre":"García Chavarría, María Montserrat",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Coruña"
},
{
	"nombre":"García Díez, Joaquín María",
	"sexo": "Hombre",
	"nacimiento":1954,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Lugo"
},
{
	"nombre":"García Egea, Teodoro",
	"sexo": "Hombre",
	"nacimiento":1985,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Murcia"
},
{
	"nombre":"García Gómez, Valentín",
	"sexo": "Hombre",
	"nacimiento":1963,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Badajoz"
},
{
	"nombre":"García López, Maribel",
	"sexo": "Mujer",
	"nacimiento":1973,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Badajoz"
},
{
	"nombre":"García Morís, Roberto",
	"sexo": "Hombre",
	"nacimiento":1982,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Asturias"
},
{
	"nombre":"García Puig, María del Mar",
	"sexo": "Mujer",
	"nacimiento":1977,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Barcelona"
},
{
	"nombre":"García Rodríguez, Alicia",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Ávila"
},
{
	"nombre":"García Tejerina, Isabel",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"García-Pelayo Jurado, María José",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Cádiz"
},
{
	"nombre":"Garrido Gutiérrez, Pilar",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Guipúzcoa"
},
{
	"nombre":"Garriga Vaz de Concicao, Ignacio",
	"sexo": "Hombre",
	"nacimiento":1987,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Barcelona"
},
{
	"nombre":"Garzón Espinosa, Alberto",
	"sexo": "Hombre",
	"nacimiento":1985,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Málaga"
},
{
	"nombre":"Gázquez Collado, Paloma",
	"sexo": "Mujer",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Asturias"
},
{
	"nombre":"Gestoso de Miguel, Luis",
	"sexo": "Hombre",
	"nacimiento":1962,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Murcia"
},
{
	"nombre":"Gil Lázaro, Ignacio",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Valencia"
},
{
	"nombre":"Giménez Giménez, Sara",
	"sexo": "Mujer",
	"nacimiento":1977,
	"estado civil": "soltero",
	"partido":"CS",
	"provincia":"Madrid"
},
{
	"nombre":"Gómez Hernández, Héctor",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Tenerife"
},
{
	"nombre":"Gómez-Reino Varela, Antonio",
	"sexo": "Hombre",
	"nacimiento":1980,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Coruña"
},
{
	"nombre":"González Caballero, Miguel Ángel",
	"sexo": "Hombre",
	"nacimiento":1991,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Ciudad Real"
},
{
	"nombre":"González Coello de Portugal, Víctor",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Salamanca"
},
{
	"nombre":"González Guinda, María del Carmen",
	"sexo": "Mujer",
	"nacimiento":1961,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"León"
},
{
	"nombre":"González Pérez, Ariagona",
	"sexo": "Mujer",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Las Palmas"
},
{
	"nombre":"González Ramos, Manuel Gabriel",
	"sexo": "Hombre",
	"nacimiento":1966,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Albacete"
},
{
	"nombre":"González Terol, Antonio",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"González Vázquez, Marta",
	"sexo": "Mujer",
	"nacimiento":1965,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Coruña"
},
{
	"nombre":"Gorospe Elezcano, Josune",
	"sexo": "Mujer",
	"nacimiento":1969,
	"estado civil": "casado",
	"partido":"PNV",
	"provincia":"Bizkaia"
},
{
	"nombre":"Granollers Cunillera, Inés",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Lleida"
},
{
	"nombre":"Guaita Esteruelas, Sandra",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Tarragona"
},
{
	"nombre":"GGuerra López, Sonia",
	"sexo": "Mujer",
	"nacimiento":1977,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Guijarro Ceballos, María",
	"sexo": "Mujer",
	"nacimiento":1971,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Bizkaia"
},
{
	"nombre":"Guijarro García, Txema",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Alicante"
},
{
	"nombre":"Guinart Moreno, Lídia",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Guitarte Gimeno, Tomás",
	"sexo": "Hombre",
	"nacimiento":1961,
	"estado civil": "soltero",
	"partido":"TE",
	"provincia":"Teruel"
},
{
	"nombre":"Gutiérrez Díaz de Otazu, Fernando Adolfo",
	"sexo": "Hombre",
	"nacimiento":1957,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Melilla"
},
{
	"nombre":"Gutiérrez Prieto, Sergio",
	"sexo": "Hombre",
	"nacimiento":1982,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Toledo"
},
{
	"nombre":"Gutiérrez Salinas, Indalecio",
	"sexo": "Hombre",
	"nacimiento":1974,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Almería"
},
{
	"nombre":"Hernanz Costa, Sofía",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Baleares"
},
{
	"nombre":"Herrero Bono, José Alberto",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Teruel"
},
{
	"nombre":"Hispán Iglesias de Ussel, Pablo",
	"sexo": "Hombre",
	"nacimiento":1973,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Honrubia Hurtado, Pedro Antonio",
	"sexo": "Hombre",
	"nacimiento":1980,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Granada"
},
{
	"nombre":"Hoyo Juliá, Belén",
	"sexo": "Mujer",
	"nacimiento":1984,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Valencia"
},
{
	"nombre":"Hurtado Zurera, Antonio",
	"sexo": "Hombre",
	"nacimiento":1961,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Córdoba"
},
{
	"nombre":"Iglesias Turrión, Pablo",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Madrid"
},
{
	"nombre":"Illamola Dausà, Mariona",
	"sexo": "Hombre",
	"nacimiento":1967,
	"estado civil": "soltero",
	"partido":"JxCAT-JUNTS",
	"provincia":"Girona"
},
{
	"nombre":"Iñarritu García, Jon",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"BILDU",
	"provincia":"Guipúzcoa"
},
{
	"nombre":"Jerez Juan, Miguel Ángel",
	"sexo": "Hombre",
	"nacimiento":1974,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Baleares"
},
{
	"nombre":"Jiménez Linuesa, Beatriz",
	"sexo": "Mujer",
	"nacimiento":1985,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Cuenca"
},
{
	"nombre":"Jiménez Revuelta, Rodrigo",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Segovia"
},
{
	"nombre":"Jiménez-Becerril Barrio, María Teresa",
	"sexo": "Mujer",
	"nacimiento":1961,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Sevilla"
},
{
	"nombre":"José Vélez, Rafael",
	"sexo": "Hombre",
	"nacimiento":1954,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Jover Díaz, Antonia",
	"sexo": "Mujer",
	"nacimiento":1958,
	"estado civil": "casado",
	"partido":"UP",
	"provincia":"Baleares"
},
{
	"nombre":"Lamuà Estañol, Marc",
	"sexo": "Hombre",
	"nacimiento":1980,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Girona"
},
{
	"nombre":"Lastra Fernández, Adriana",
	"sexo": "Mujer",
	"nacimiento":1979,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Asturias"
},
{
	"nombre":"Leal Fernández, Isaura",
	"sexo": "Mujer",
	"nacimiento":1959,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Ledesma Martín, Sebastián Jesús",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Tenerife"
},
{
	"nombre":"Legarda Uriarte, Mikel",
	"sexo": "Hombre",
	"nacimiento":1956,
	"estado civil": "soltero",
	"partido":"PNV",
	"provincia":"Álaba"
},
{
	"nombre":"Lima Cid, Fuensanta",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Málaga"
},
{
	"nombre":"López Álvarez, María Teresa",
	"sexo": "Mujer",
	"nacimiento":1980,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Ceuta"
},
{
	"nombre":"López Álvarez, Patxi",
	"sexo": "Hombre",
	"nacimiento":1959,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Bizkaia"
},
{
	"nombre":"López Cano, Ignacio",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Málaga"
},
{
	"nombre":"López de Uralde Garmendia, Juan Antonio",
	"sexo": "Hombre",
	"nacimiento":1963,
	"estado civil": "casado",
	"partido":"UP",
	"provincia":"Álaba"
},
{
	"nombre":"López Domínguez, Laura",
	"sexo": "Mujer",
	"nacimiento":1983,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Girona"
},
{
	"nombre":"López Maraver, Ángel",
	"sexo": "Hombre",
	"nacimiento":1984,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Guadalajara"
},
{
	"nombre":"López Somoza, Gema",
	"sexo": "Mujer",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"López Zamora, Cristina",
	"sexo": "Mujer",
	"nacimiento":1989,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Ciudad Real"
},
{
	"nombre":"Lorite Lorite, Andrés",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Córdoba"
},
{
	"nombre":"Losada Fernández, José",
	"sexo": "Hombre",
	"nacimiento":1966,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Sevilla"
},
{
	"nombre":"Maestro Moliner, Roser",
	"sexo": "Mujer",
	"nacimiento":1988,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Valencia"
},
{
	"nombre":"Manso Olivar, Rubén Silvano",
	"sexo": "Hombre",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Málaga"
},
{
	"nombre":"Marcos Domínguez, Pilar",
	"sexo": "Mujer",
	"nacimiento":1962,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Marcos Ortega, Milagros",
	"sexo": "Mujer",
	"nacimiento":1965,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Palencia"
},
{
	"nombre":"Margall Sastre, Joan",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "casado",
	"partido":"ERC",
	"provincia":"Girona"
},
{
	"nombre":"Marí Klose, Pau",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Zaragoza"
},
{
	"nombre":"Mariscal Anaya, Guillermo",
	"sexo": "Hombre",
	"nacimiento":1974,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Las Palmas"
},
{
	"nombre":"Mariscal Zabala, Manuel",
	"sexo": "Hombre",
	"nacimiento":1992,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Toledo"
},
{
	"nombre":"Márquez Guerrero, María",
	"sexo": "Mujer",
	"nacimiento":1960,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Sevilla"
},
{
	"nombre":"Marra Domínguez, María Ángeles",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Pontevedra"
},
{
	"nombre":"Martín Llaguno, Marta",
	"sexo": "Mujer",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"CS",
	"provincia":"Alicante"
},
{
	"nombre":"Martínez Ferro, María Valentina",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Coruña"
},
{
	"nombre":"Martínez Granados, María Carmen",
	"sexo": "Mujer",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"CS",
	"provincia":"Cádiz"
},
{
	"nombre":"Martínez Oblanca, Isidro Manuel",
	"sexo": "Hombre",
	"nacimiento":1956,
	"estado civil": "casado",
	"partido":"NA",
	"provincia":"Asturias"
},
{
	"nombre":"Martínez Seijo, María Luz",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Palencia"
},
{
	"nombre":"Matarí Sáez, Juan José",
	"sexo": "Hombre",
	"nacimiento":1959,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Almería"
},
{
	"nombre":"Mateu Istúriz, Jaime Miguel",
	"sexo": "Hombre",
	"nacimiento":1957,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Burgos"
},
{
	"nombre":"Matute García de Jalón, Oskar",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"BILDU",
	"provincia":"Bizkaia"
},
{
	"nombre":"Mayoral Perales, Rafael",
	"sexo": "Hombre",
	"nacimiento":1974,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Madrid"
},
{
	"nombre":"Mazón Ramos, José María",
	"sexo": "Hombre",
	"nacimiento":1951,
	"estado civil": "soltero",
	"partido":"PRC",
	"provincia":"Cantabria"
},
{
	"nombre":"Medel Pérez, Rosa María",
	"sexo": "Mujer",
	"nacimiento":1957,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Valencia"
},
{
	"nombre":"Meijón Couselo, Guillermo Antonio",
	"sexo": "Hombre",
	"nacimiento":1958,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Pontevedra"
},
{
	"nombre":"Mena Arca, Joan",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Barcelona"
},
{
	"nombre":"Méndez Monasterio, Lourdes",
	"sexo": "Mujer",
	"nacimiento":1957,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Murcia"
},
{
	"nombre":"Merino Martínez, Javier",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"La Rioja"
},
{
	"nombre":"Mestre Barea, Manuel",
	"sexo": "Hombre",
	"nacimiento":1952,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Alicante"
},
{
	"nombre":"Mínguez García, Montse",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Lleida"
},
{
	"nombre":"Miquel i Valentí, Sergi",
	"sexo": "Hombre",
	"nacimiento":1989,
	"estado civil": "soltero",
	"partido":"JxCAT-JUNTS",
	"provincia":"Girona"
},
{
	"nombre":"Moneo Díez, María Sandra",
	"sexo": "Mujer",
	"nacimiento":1969,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Burgos"
},
{
	"nombre":"Montero Cuadrado, María Jesús",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Sevilla"
},
{
	"nombre":"Movellán Lombilla, Diego",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Cantabria"
},
{
	"nombre":"Muñoz Dalda, Lucía",
	"sexo": "Mujer",
	"nacimiento":1993,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Baleares"
},
{
	"nombre":"Muñoz Vidal, María",
	"sexo": "Mujer",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"CS",
	"provincia":"Valencia"
},
{
	"nombre":"Montero Gil, Irene María",
	"sexo": "Mujer",
	"nacimiento":1988,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Madrid"
},
{
	"nombre":"Montesinos Aguayo, Pablo",
	"sexo": "Hombre",
	"nacimiento":1985,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Málaga"
},
{
	"nombre":"Montesinos de Miguel, Macarena",
	"sexo": "Mujer",
	"nacimiento":1961,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Alicante"
},
{
	"nombre":"Moraleja Gómez, Tristana María",
	"sexo": "Mujer",
	"nacimiento":1971,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Coruña"
},
{
	"nombre":"Moro Almaraz, María Jesús",
	"sexo": "Mujer",
	"nacimiento":1961,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Salamanca"
},
{
	"nombre":"Narváez Bandera, María Dolores",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Málaga"
},
{
	"nombre":"Nasarre Oliva, Begoña",
	"sexo": "Mujer",
	"nacimiento":1978,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Huesca"
},
{
	"nombre":"Navalpotro Gómez, Julio",
	"sexo": "Hombre",
	"nacimiento":1971,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Navarro Lacoba, Carmen",
	"sexo": "Mujer",
	"nacimiento":1978,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Albacete"
},
{
	"nombre":"Navarro López, Pedro",
	"sexo": "Hombre",
	"nacimiento":1977,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Zaragoza"
},
{
	"nombre":"Nevado del Campo, María Magdalena",
	"sexo": "Mujer",
	"nacimiento":1973,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Cáceres"
},
{
	"nombre":"Nogueras i Camero, Míriam",
	"sexo": "Mujer",
	"nacimiento":1980,
	"estado civil": "soltero",
	"partido":"JxCAT-JUNTS",
	"provincia":"Barcelona"
},
{
	"nombre":"Nuet Pujals, Joan Josep",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "casado",
	"partido":"ERC",
	"provincia":"Barcelona"
},
{
	"nombre":"Olano Vela, Jaime Eduardo de",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Lugo"
},
{
	"nombre":"Olona Choclán, Macarena",
	"sexo": "Mujer",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Granada"
},
{
	"nombre":"Oramas González-Moro, Ana María",
	"sexo": "Mujer",
	"nacimiento":1959,
	"estado civil": "casado",
	"partido":"PNC",
	"provincia":"Tenerife"
},
{
	"nombre":"Oria López, María Inmaculada",
	"sexo": "Mujer",
	"nacimiento":1973,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Granada"
},
{
	"nombre":"Ortega Domínguez, José Ramón",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Cádiz"
},
{
	"nombre":"Ortega Smith-Molina, Francisco Javier",
	"sexo": "Hombre",
	"nacimiento":1968,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Madrid"
},
{
	"nombre":"Ortiz Galván, José",
	"sexo": "Hombre",
	"nacimiento":1983,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Cádiz"
},
{
	"nombre":"Padilla Ruiz, Esther",
	"sexo": "Mujer",
	"nacimiento":1975,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Toledo"
},
{
	"nombre":"Paniagua Núñez, Miguel Ángel",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Palencia"
},
{
	"nombre":"Pastor Julián, Ana María",
	"sexo": "Mujer",
	"nacimiento":1957,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Pedraja Sáinz, Raquel",
	"sexo": "Mujer",
	"nacimiento":1993,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"La Rioja"
},
{
	"nombre":"Pedreño Molina, Juan Luis",
	"sexo": "Hombre",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Peña Camarero, Esther",
	"sexo": "Mujer",
	"nacimiento":1980,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Burgos"
},
{
	"nombre":"Perea i Conillas, María Mercè",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Pérez Abellás, Adolfo",
	"sexo": "Hombre",
	"nacimiento":1952,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Orense"
},
{
	"nombre":"Pérez Díaz, María Auxiliadora",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Las Palmas"
},
{
	"nombre":"Píriz Maya, Víctor Valentín",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Badajoz"
},
{
	"nombre":"Pisarello Prados, Gerardo",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Barcelona"
},
{
	"nombre":"Pita Cárdenes, María del Carmen",
	"sexo": "Mujer",
	"nacimiento":1958,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Las Palmas"
},
{
	"nombre":"Pons Sampietro, Pere Joan",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Baleares"
},
{
	"nombre":"Postigo Quintana, Jesús",
	"sexo": "Hombre",
	"nacimiento":1953,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Segovia"
},
{
	"nombre":"Pozueta Fernández, Isabel",
	"sexo": "Mujer",
	"nacimiento":1965,
	"estado civil": "soltero",
	"partido":"BILDU",
	"provincia":"Navarra"
},
{
	"nombre":"Prieto Nieto, Ana",
	"sexo": "Mujer",
	"nacimiento":1965,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Lugo"
},
{
	"nombre":"Prohens Rigo, Margarita",
	"sexo": "Mujer",
	"nacimiento":1982,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Baleares"
},
{
	"nombre":"Pujol i Farré, Norma",
	"sexo": "Mujer",
	"nacimiento":1988,
	"estado civil": "casado",
	"partido":"ERC",
	"provincia":"Tarragona"
},
{
	"nombre":"Quevedo Iturbe, Pedro",
	"sexo": "Hombre",
	"nacimiento":1976,
	"estado civil": "soltero",
	"partido":"PNC",
	"provincia":"Las Palmas"
},
{
	"nombre":"Ramallo Vázquez, María Pilar",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Pontevedra"
},
{
	"nombre":"Ramírez Carner, Arnau",
	"sexo": "Hombre",
	"nacimiento":1989,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Ramírez del Río, José",
	"sexo": "Hombre",
	"nacimiento":1973,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Córdoba"
},
{
	"nombre":"Ramón Utrabo, Elvira",
	"sexo": "Mujer",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Granada"
},
{
	"nombre":"Ramos Esteban, César Joaquín",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Cáceres"
},
{
	"nombre":"Ramos Rodríguez, José Luis",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Huelva"
},
{
	"nombre":"Raya Rodríguez, María Tamara",
	"sexo": "Mujer",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Tenerife"
},
{
	"nombre":"Redondo Calvillo, María de la O",
	"sexo": "Mujer",
	"nacimiento":1972,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Córdoba"
},
{
	"nombre":"Rego Candamil, Néstor",
	"sexo": "Hombre",
	"nacimiento":1962,
	"estado civil": "soltero",
	"partido":"BNG",
	"provincia":"Coruña"
},
{
	"nombre":"Renau Martínez, Germán",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Castellón"
},
{
	"nombre":"Requejo Novoa, Pedro Jesús",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Zamora"
},
{
	"nombre":"Requena Ruiz, Juan Diego",
	"sexo": "Hombre",
	"nacimiento":1980,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Jaén"
},
{
	"nombre":"Riolobos Regadera, Carmen",
	"sexo": "Mujer",
	"nacimiento":1963,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Toledo"
},
{
	"nombre":"Robles López, Joaquín",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Murcia"
},
{
	"nombre":"Rodríguez Almeida, Andrés Alberto",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Las Palmas"
},
{
	"nombre":"Rodríguez Gómez, María del Pilar",
	"sexo": "Mujer",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Huelva"
},
{
	"nombre":"Rodríguez Gómez de Celis, Alfonso",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Sevilla"
},
{
	"nombre":"Rodríguez Herrer, María Elvira",
	"sexo": "Mujer",
	"nacimiento":1949,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Rodríguez Rodríguez, Alberto",
	"sexo": "Hombre",
	"nacimiento":1981,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Tenerife"
},
{
	"nombre":"Rodríguez Salas, José Antonio",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Granada"
},
{
	"nombre":"Rojas García, Carlos",
	"sexo": "Hombre",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Granada"
},
{
	"nombre":"Romero Hernández, Carmelo",
	"sexo": "Hombre",
	"nacimiento":1958,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Huelva"
},
{
	"nombre":"Romero Sánchez, Rosa María",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Ciudad Real"
},
{
	"nombre":"Romero Vilches, María de los Reyes",
	"sexo": "Mujer",
	"nacimiento":1967,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Sevilla"
},
{
	"nombre":"Ros Martínez, Susana",
	"sexo": "Mujer",
	"nacimiento":1969,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Castellón"
},
{
	"nombre":"Rosety Fernández de Castro, Agustín",
	"sexo": "Hombre",
	"nacimiento":1947,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Cádiz"
},
{
	"nombre":"Rosique i Saltor, Marta",
	"sexo": "Mujer",
	"nacimiento":1996,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Barcelona"
},
{
	"nombre":"Rueda Perelló, Patricia",
	"sexo": "Mujer",
	"nacimiento":1976,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Málaga"
},
{
	"nombre":"Rufián Romero, Gabriel",
	"sexo": "Hombre",
	"nacimiento":1982,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Barcelona"
},
{
	"nombre":"Ruiz de Pinedo Undiano, Iñaki",
	"sexo": "Hombre",
	"nacimiento":1954,
	"estado civil": "casado",
	"partido":"BILDU",
	"provincia":"Álaba"
},
{
	"nombre":"Ruiz i Carbonell, Joan",
	"sexo": "Hombre",
	"nacimiento":1954,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Tarragona"
},
{
	"nombre":"Ruiz Navarro, Eduardo Luis",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Alicante"
},
{
	"nombre":"Ruiz Solás, María de la Cabeza",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Madrid"
},
{
	"nombre":"Saavedra Muñoz, Marisa",
	"sexo": "Mujer",
	"nacimiento":1962,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Castellón"
},
{
	"nombre":"Sabanés Nadal, Inés",
	"sexo": "Mujer",
	"nacimiento":1953,
	"estado civil": "soltero",
	"partido":"MASPAIS",
	"provincia":"Madrid"
},
{
	"nombre":"Sáez Alonso-Muñumer, Pablo",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Valladolid"
},
{
	"nombre":"Sagastizabal Unzetabarrenetxea, Idoia",
	"sexo": "Mujer",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"PNV",
	"provincia":"Bizkaia"
},
{
	"nombre":"Sahuquillo García, Luis Carlos",
	"sexo": "Hombre",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Cuenca"
},
{
	"nombre":"Salvá Verd, Antonio",
	"sexo": "Hombre",
	"nacimiento":1952,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Baleares"
},
{
	"nombre":"Salvador i Duch, Jordi",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Tarragona"
},
{
	"nombre":"Sánchez del Real, Víctor Manuel",
	"sexo": "Hombre",
	"nacimiento":1969,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Badajoz"
},
{
	"nombre":"Sánchez Escobar, Mariano",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Badajoz"
},
{
	"nombre":"Sánchez García, José María",
	"sexo": "Hombre",
	"nacimiento":1963,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Alicante"
},
{
	"nombre":"Sánchez Jódar, Marisol",
	"sexo": "Mujer",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Murcia"
},
{
	"nombre":"Sánchez Pérez, César",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Alicante"
},
{
	"nombre":"Sánchez Pérez-Castejón, Pedro",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Sánchez Serna, Javier",
	"sexo": "Hombre",
	"nacimiento":1985,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Murcia"
},
{
	"nombre":"Sancho Guardia, Alfredo",
	"sexo": "Hombre",
	"nacimiento":1965,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Huesca"
},
{
	"nombre":"Sancho Íñiguez, Herminio Rufino",
	"sexo": "Hombre",
	"nacimiento":1966,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Teruel"
},
{
	"nombre":"Santamaría Ruiz, Luis",
	"sexo": "Hombre",
	"nacimiento":1969,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Valencia"
},
{
	"nombre":"Santiago Romero, Enrique Fernando",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "casado",
	"partido":"UP",
	"provincia":"Madrid"
},
{
	"nombre":"Sarrià Morell, Vicent Manuel",
	"sexo": "Hombre",
	"nacimiento":1967,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Valencia"
},
{
	"nombre":"Sayas López, Sergio",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"NA",
	"provincia":"Navarra"
},
{
	"nombre":"Senderos Oraá, Daniel",
	"sexo": "Hombre",
	"nacimiento":1977,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Álaba"
},
{
	"nombre":"Serrada Pariente, David",
	"sexo": "Hombre",
	"nacimiento":1977,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Salamanca"
},
{
	"nombre":"Serrano Martínez, Juan Francisco",
	"sexo": "Hombre",
	"nacimiento":1988,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Jaén"
},
{
	"nombre":"Seva Ruiz, Yolanda",
	"sexo": "Mujer",
	"nacimiento":1970,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Alicante"
},
{
	"nombre":"Sicilia Alférez, Felipe Jesús",
	"sexo": "Hombre",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Jaén"
},
{
	"nombre":"Simancas Simancas, Rafael",
	"sexo": "Hombre",
	"nacimiento":1966,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Soler Mur, Alejandro",
	"sexo": "Hombre",
	"nacimiento":1972,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Alicante"
},
{
	"nombre":"Soto Burillo, Juan Luis",
	"sexo": "Hombre",
	"nacimiento":1978,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Murcia"
},
{
	"nombre":"Steegmann Olmedillas, Juan Luis",
	"sexo": "Hombre",
	"nacimiento":1955,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Madrid"
},
{
	"nombre":"Suárez Illana, Adolfo",
	"sexo": "Hombre",
	"nacimiento":1964,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Suárez Lamata, Eloy",
	"sexo": "Hombre",
	"nacimiento":1962,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Zaragoza"
},
{
	"nombre":"Sumelzo Jordán, Susana",
	"sexo": "Mujer",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Zaragoza"
},
{
	"nombre":"Taibo Monelos, Diego",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Coruña"
},
{
	"nombre":"Telechea i Lozano, Carolina",
	"sexo": "Mujer",
	"nacimiento":1981,
	"estado civil": "casado",
	"partido":"ERC",
	"provincia":"Barcelona"
},
{
	"nombre":"Tirado Ochoa, Vicente",
	"sexo": "Hombre",
	"nacimiento":1963,
	"estado civil": "casado",
	"partido":"PP",
	"provincia":"Toledo"
},
{
	"nombre":"Tizón Vázquez, Uxía",
	"sexo": "Mujer",
	"nacimiento":1989,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Orense"
},
{
	"nombre":"Toscano de Balbín, Carla",
	"sexo": "Mujer",
	"nacimiento":1977,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Madrid"
},
{
	"nombre":"Trías Gil, Georgina",
	"sexo": "Mujer",
	"nacimiento":1973,
	"estado civil": "casado",
	"partido":"VOX",
	"provincia":"Ávila"
},
{
	"nombre":"Uriarte Bengoechea, Edurne",
	"sexo": "Mujer",
	"nacimiento":1960,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Madrid"
},
{
	"nombre":"Uriarte Torrealday, Roberto",
	"sexo": "Hombre",
	"nacimiento":1960,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Bizkaia"
},
{
	"nombre":"Utrilla Cano, Julio",
	"sexo": "Hombre",
	"nacimiento":1967,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Valencia"
},
{
	"nombre":"Valerio Cordero, Magdalena",
	"sexo": "Mujer",
	"nacimiento":1959,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Guadalajara"
},
{
	"nombre":"Vallugera Balañà, Pilar",
	"sexo": "Mujer",
	"nacimiento":1967,
	"estado civil": "soltero",
	"partido":"ERC",
	"provincia":"Barcelona"
},
{
	"nombre":"Vázquez Blanco, Ana Belén",
	"sexo": "Mujer",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Orense"
},
{
	"nombre":"Vega Arias, Rubén Darío",
	"sexo": "Hombre",
	"nacimiento":1960,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Tenerife"
},
{
	"nombre":"Vehí Cantenys, Mireia",
	"sexo": "Mujer",
	"nacimiento":1985,
	"estado civil": "soltero",
	"partido":"CUP",
	"provincia":"Barcelona"
},
{
	"nombre":"Velarde Gómez, Martina",
	"sexo": "Mujer",
	"nacimiento":1979,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Córdoba"
},
{
	"nombre":"Velasco Morillo, Elvira",
	"sexo": "Mujer",
	"nacimiento":1968,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Zamora"
},
{
	"nombre":"Vera Ruíz-Herrera, Noelia",
	"sexo": "Mujer",
	"nacimiento":1985,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Cádiz"
},
{
	"nombre":"Vicente Viondi, Daniel",
	"sexo": "Hombre",
	"nacimiento":1975,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Madrid"
},
{
	"nombre":"Vidal Sáez, Aina",
	"sexo": "Mujer",
	"nacimiento":1985,
	"estado civil": "soltero",
	"partido":"UP",
	"provincia":"Barcelona"
},
{
	"nombre":"Vilches Ruiz, María Luisa",
	"sexo": "Mujer",
	"nacimiento":1982,
	"estado civil": "casado",
	"partido":"PSOE",
	"provincia":"Albacete"
},
{
	"nombre":"Villagrasa Quero, Noemí",
	"sexo": "Mujer",
	"nacimiento":1980,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Zaragoza"
},
{
	"nombre":"Zamarrón Moreno, AgustíN",
	"sexo": "Hombre",
	"nacimiento":1946,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Burgos"
},
{
	"nombre":"Zambrano García-Raez, Carlos José",
	"sexo": "Hombre",
	"nacimiento":1969,
	"estado civil": "soltero",
	"partido":"VOX",
	"provincia":"Cádiz"
},
{
	"nombre":"Zaragoza Alonso, José",
	"sexo": "Hombre",
	"nacimiento":1961,
	"estado civil": "soltero",
	"partido":"PSOE",
	"provincia":"Barcelona"
},
{
	"nombre":"Zurita Expósito, Ana María",
	"sexo": "Mujer",
	"nacimiento":1963,
	"estado civil": "soltero",
	"partido":"PP",
	"provincia":"Tenerife"
},

	
];

//Cojo el valor del tag seleccionado (sexo,provincia) y con este valor intentare recorrer el array y haciendo una lista.
var tagSeleccionado = document.getElementById("botonTag").value;

var favor = 0;
var contra = 0;
var diputados = 350;

//--------------VISTA DE LOS DIPUTADOS---------
const listaDiputadosView = () => {
const resultado = Array.from(new Set(diputados.map(s => s.tagSeleccionado))).map(tagSeleccionado =>
{ return {
	tag: tagSeleccionado

};
	});

resultado
//	var listaDiputados = [];
	for (let i in diputados) {
		var k = 0;
		var diputadoA = diputados[i];
		var valor = diputadoA.tagSeleccionado;
		var diputadoTag = [];
		if(diputadoTag[k].tagSeleccionado != valor){
			diputadoTag.push(valor);
			k++;
		}

	}
}
// ------------- VISTAS -------------
// VISTA LISTA-PARTIDOS
/*
const listaPartidosView = () => {
  let view = "";
  for (const partido of partidosRecibidos) {
    view += `
			<div class="asignar-voto-partido">
				<img id="imgRedonda" src="assets/images/Partidos/${partido.nameCode}.png"> </img>
				<p class="partido">
					<b>${partido.fullName} </b> <i>[${partido.seats} escaños]</i>
				</p>
				<!-- Aqui los radio buttons -->
        <div class="botones">
        
					<label for="${partido.nameCode}1" class="radio" > 
					  <input type="radio" name="${partido.nameCode}" id="${partido.nameCode}1" class="hidden aFavor" /> 
              <span class="label"></span>A Favor
          </label>
          
          <label for="${partido.nameCode}2" class="radio" > 
            <input type="radio" name="${partido.nameCode}" id="${partido.nameCode}2" class="hidden enContra" /> 
              <span class="label"></span>En Contra
          </label> 
          
          <label for="${partido.nameCode}3" class="radio" > 
            <input type="radio"	name="${partido.nameCode}" id="${partido.nameCode}3" class="hidden abstencion" checked /> 
              <span class="label"></span>Abstención
          </label>
          
				</div>
				<!-- Aqui terminan los radio buttons -->
			</div>\n`;
  }
  return view;
};
*/

// VISTA BARRA
const barraView = () => {
  return `
    <div id="simulation-header">
      <div class="progress">

        <div class="progress-bar bg-success" 
          role="progressbar" 
          style="width: ${(favor / diputados) * 100}%" 
          aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
        ${Math.round((favor / diputados) * 100)}%
        </div>

        <div class="progress-bar bg-danger" 
          role="progressbar" 
          style="width: ${(contra / diputados) * 100}%" 
          aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
        ${Math.round((contra / diputados) * 100)}%
        </div>

        <div class="progress-bar bg-warning" 
          role="progressbar" 
          style="width: ${((diputados - favor - contra) / diputados) * 100}%" 
          aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
        ${Math.round(((diputados - favor - contra) / diputados) * 100)}%
        </div>

      </div>
    </div>\n`;
};

// ------------- CONTROLADORES -------------
// CONTROLADOR LISTA-PARTIDOS
const listaPartidosContr = () => {
  document.getElementById("listaPartidos-view").innerHTML = listaPartidosView();
};
// CONTROLADOR BARRA
const barraContr = () => {
  document.getElementById("barra-view").innerHTML = barraView();
};

// ------------- INICIALIZACIÓN -------------
document.addEventListener("DOMContentLoaded", listaPartidosContr);
document.addEventListener("DOMContentLoaded", barraContr);

// ------------- EVENTOS ASOCIADOS A LA ASIGNACIÓN DE VOTO -------------
const loadEvents = () => {
  for (const diputado of diputados) {
    // Favor
    document
      .getElementById(partido.nameCode + "1")
      .addEventListener("click", function () {
        if (diputado.vote === -1) {
          // Si ya estaba en contra
          contra -= 1;
          favor += 1;
        }
        if (partido.vote === 0) {
          // Si ya se abstenia
          favor += 1;
        }
        // Para la condición de que estuviese a favor no hacemos nada
        partido.vote = 1; // El partido esta ahora a favor
        barraContr();
      });

    // Contra
    document
      .getElementById(partido.nameCode + "2")
      .addEventListener("click", function () {
        if (diputado.vote === 1) {
          // Si ya estaba a favor
          contra += 1;
          favor -= 1;
        }
        if (partido.vote === 0) {
          // Si ya se abstenia
          contra += 1;
        }
        // Para la condición de que estuviese en contra no hacemos nada
        partido.vote = -1; // El partido esta ahora en contra
        barraContr();
      });

    // Abstención
    document
      .getElementById(partido.nameCode + "3")
      .addEventListener("click", function () {
        if (diputado.vote === 1) {
          // Si ya estaba a favor
          favor -= 1;
        }
        if (partido.vote === -1) {
          // Si ya estaba en contra
          contra -= 1;
        }
        // Para la condición de que se abstubiese no hacemos nada
        partido.vote = 0; // El partido ahora se abstiene
        barraContr();
      });
  }
  /*
   * Crea un SON con partidos en el momento en el que se pulsa el boton simuar y lo envia al servlet
   */
  document
  .getElementById("simular-btn-simulation")
  .addEventListener("click", function () {
	  let json = JSON.stringify(diputados);
	 
	  document.getElementById('diputados').value = json;
  });
};

document.addEventListener("DOMContentLoaded", loadEvents);

