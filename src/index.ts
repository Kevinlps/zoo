import sql, { createTables } from "../config/db"
import { saveEspecie } from "./controllers/especieContrller"
import Especie from "./models/Especie"

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

    await sql.end()
}

run()