import sql, { createTables } from "../config/db"
import { saveEspecie } from "./controllers/especieContrller"
import { saveEspecime } from "./controllers/especimeController"
import Especie from "./models/Especie"
import Especime from "./models/Especime"

const run = async () => {
    await createTables()
    console.log('Mal feito desfeito')

    let especie:Especie = {
        familia: 'Felieos',
        habitat:'Florestas',
        nomeCientifico:'Panthera onca',
        nomePopular:'Onça-Pintada',
        ordem:'Carnivora', 
    }

    especie = await saveEspecie(especie)
    console.log(especie)

    let especime:Especime = {
        especie,
        numeroDeserie:57,
        apelido: 'onçinha',

    }
    especime = await saveEspecime(especime)
    console.log(especime)

    await sql.end()
}

run()