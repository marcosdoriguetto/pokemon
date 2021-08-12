import { TypePokemonTypes } from '../App'
import { ContentInfo, ContentPokemon, ImagePokemon, InfoType, InfoTypes } from '../styles/PokemonStyles'

type PokemonType = {
  name: string;
  types: TypePokemonTypes[];
  sprites: string;
}

export function Pokemon({ name, types, sprites }: PokemonType) {
  return (
    <ContentPokemon type={types[0].type.name}>
      <div>
        <ImagePokemon loading="lazy" src={sprites} alt={`Imagem do pokemon ${name}`} />
      </div>
      <ContentInfo>
        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <InfoTypes>
          <InfoType>
            {types.map(type => {
              return (
                <img key={type.slot} src={`types/${type.type.name}.png`} alt={type.type.name} />
              )
            })}
          </InfoType>
        </InfoTypes>
      </ContentInfo>
    </ContentPokemon>
  )
}