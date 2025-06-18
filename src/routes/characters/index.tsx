import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { useCharacters } from '../../hooks/useCharacters'
import CharacterTable from '../../components/CharacterTable'

export const Route = createFileRoute('/characters/')({
  validateSearch: z.object({
    page: z.coerce.number().min(1).default(1),
  }),
  component: CharactersRouteComponent,
})

function CharactersRouteComponent() {
  const { page } = Route.useSearch()
  const { data, isLoading, refetch } = useCharacters(page)

  if (isLoading) return <p>Loading…</p>

  return (
    <div className='p-8'>
      <CharacterTable data={data.results} totalPages={data.info.pages} refetch={refetch} page={page}/>
    </div>
  )
}
