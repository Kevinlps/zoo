import postgres from 'postgres'

const sql = postgres('postgres://dev:senha123@localhost:5432/zoo')

export const createTables = async () => {
    await sql`
        create table if not exists especie (
            id serial primary key,
            nome_cientifico varchar not null,
            nome_popular varchar not null,
            habitat varchar not null,
            familia varchar not null,
            ordem varchar not null
        )
    `
    await sql`
        create table if not exists zelador (
            matricula varchar not null,
            nome varchar not null,
            data_nascimento date not null,
            constraint pk_zelador primary key(matricula) 
        )
    `
    await sql`
        create table if not exists jaula (
            codigo varchar not null,
            area varchar not null,
            id_zelador integer not null,
            constraint pk_jaula primary key(codigo)
        )    
    `
    await sql`
        create table if not exists especime(
            id serial primary key,
            nro_de_serie integer not null,
            apelido varchar,
            id_especie integer not null,
            constraint  fk_especie
                foreign key(id_especie)
                    references especie(id)
                        on delete cascade
        ) 
    `
    await sql`
        create table if not exists jaula_zelador(
            id_jaula varchar not null,
            id_zelador varchar not null,
            constraint pk_jaula_zelador
                primary key(id_jaula, id_zelador),
            constraint fk_jaula
                foreign key(id_jaula) references jaula(codigo) on delete cascade,        
            constraint fk_zelador foreign key(id_zelador) references zelador(matricula) on delete cascade
   )
    `
}

export default sql