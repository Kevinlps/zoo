import sql from "../../config/db";
import Especie from "../models/Especie";

export const saveEspecie = async (especie: Especie) => {
    const { familia,habitat,nomeCientifico,nomePopular,ordem}= especie 
    const response = await sql`
        insert into especie(nome_cientifico,nome_popular,habitat,familia,ordem)
        values (${nomeCientifico},${nomePopular},${habitat},${familia},${ordem})
        returning id
    `

    const {id} = response[0]
    especie.id=id
    return especie 
}