import { TypesPokemonType } from '../App'
import { ContentInfo, ContentPokemon, InfoType, InfoTypes } from '../styles/PokemonStyles'

type PokemonType = {
  name: string;
  types: TypesPokemonType[];
  sprites: string;
}

export function Pokemon({ name, types, sprites }: PokemonType) {
  return (
    <ContentPokemon>
      <div>
        <img src={sprites} alt={`Imagem do pokemon ${name}`} />
      </div>
      <ContentInfo>
        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <InfoTypes>
          <h2>Types: </h2>
          <InfoType>
            {types.map(type => {
              return (
                <p key={type.slot}>{type.type.name}</p>
              )
            })}
          </InfoType>
        </InfoTypes>
      </ContentInfo>
    </ContentPokemon>
  )
}