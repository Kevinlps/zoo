import Jaula from "./Jaula"

type Zelador = {
    matricula:string
    nome:string
    dataNascimento: Date
    jaulasMonitoradas?: Jaula[]
}

export const getzelador = (obj:any):Zelador=> {
const {matricula,nome,data_nascimento}=obj

const zelador:Zelador = {
    matricula,
    nome,
    dataNascimento:data_nascimento
}
    return zelador
}

export default Zelador