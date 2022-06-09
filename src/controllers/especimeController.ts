import sql from "../../config/db";
import Especime from "../models/Especime";

export const saveEspecime = async (especime: Especime) => {
    const {especie, numeroDeserie , apelido} = especime
    const {id} = especie
    if(apelido && id ){
        const response = await sql`
            insert into especime(nro_de_serie,apelido,id_especie)
            values (
                ${numeroDeserie},${apelido},${id}
            ) returning id
        `
        const idEspecime = response[0].id
        especime.id = idEspecime
            }
    return especime
}