import { createFileRoute } from '@tanstack/react-router'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getCharacterById } from '../../api/charactersApi'
import CharacterDetails from '../../components/CharacterDetails'

export const Route = createFileRoute('/characters/$characterId')({
    component: CharacterDetailComponent,
})

function CharacterDetailComponent() {
  const { characterId } = Route.useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['characterId', characterId],
    queryFn: () => getCharacterById(characterId),
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
  })

  if (isLoading) return <p>Loading character...</p>
  if (error) return <p>Failed to load character</p>

  return (
    <div className='p-8'>
        <CharacterDetails data={data} />
    </div>
  )
}
