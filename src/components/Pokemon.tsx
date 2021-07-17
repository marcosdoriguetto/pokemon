import { TypesPokemonType } from '../App'

type PokemonType = {
  name: string;
  types: TypesPokemonType[];
  sprites: string;
}

export function Pokemon({ name, types, sprites }: PokemonType) {
  return (
    <div className="content">
      <div className="content__img">
        <img src={sprites} alt={`Imagem do pokemon ${name}`} />
      </div>
      <div className="content__infos">
        <h1>{name}</h1>
        <div className="content__infos-types">
          <h2>Types: </h2>
          <div className="content__infos-type">
            {types.map(type => {
              return (
                <p key={type.slot}>{type.type.name}</p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}