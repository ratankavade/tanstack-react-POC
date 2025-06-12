import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getCharacterById } from '../../api/charactersApi'
import { z } from 'zod'
import { CharacterDetails } from '../../components/CharacterDetails'

export const Route = createFileRoute('/characters/$characterId')({
    validateSearch: z.object({
    page: z.coerce.number().min(1).default(1),
    }),
    component: CharacterDetailComponent,
})

function CharacterDetailComponent() {
  const { characterId } = Route.useParams();
  const { page = 1 } = Route.useSearch();

  const { data, isLoading, error } = useQuery({
    queryKey: ['characterId', characterId],
    queryFn: () => getCharacterById(characterId),
  })
  
  if (isLoading) return <p>Loading character...</p>
  if (error) return <p>Failed to load character</p>

  return (
    <div className='p-8'>
        <CharacterDetails data={data} page={page}/>
    </div>
  )
}
