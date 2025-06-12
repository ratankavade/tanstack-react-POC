import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    type ColumnDef,
  } from '@tanstack/react-table'
import { Route } from '../routes/characters/index' 
import { Link } from '@tanstack/react-router'
  
  type Character = {
    id: number;
    image: string;
    name: string;
    gender: string;
    species: string;
    location: {name: string};
    created: string;
    origin: {name: string}
    status: string;
  }
  
  type Props = {
    data: Character[]
    totalPages: number
    refetch: any
  }

  export function CharacterTable({ data, totalPages, refetch }: Props) {

    const { page } = Route.useSearch()
    const navigate = Route.useNavigate()

    const columns: ColumnDef<Character>[] = [
      {
        accessorKey: 'image',
        header: 'Avatar',
        cell: ({ row }) => (
          <img
            src={row.original.image}
            alt={row.original.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => (
          <Link
            to="/characters/$characterId"
            params={{ characterId: String(row.original.id) }}
            search={{ page }} // 👈 pass current page to detail route
            className='font-medium text-blue-600 whitespace-nowrap dark:text-white'
          >
            {row.original.name}
          </Link>
        ),
      },
      { accessorKey: 'gender', header: 'Gender' },
      { accessorKey: 'species', header: 'Species' },
      { 
        accessorKey: 'location', 
        header: 'Location',
        cell: ({ row }) => row.original.location?.name
      },
      { accessorKey: 'created', header: 'Created On' },
      { 
        accessorKey: 'origin',
        header: 'Origin',
        cell: ({ row }) => row.original.origin?.name
      },
      { accessorKey: 'status', header: 'Status' },
    ]
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    const goToPage = (newPage: number) => {
      navigate({
        search: (prev) => ({ ...prev, page: newPage }),
      })
    }
  
    return (
      <>
      <div className='flex justify-between pb-4 overflow-x-hidden'>
        <h1 className='text-2xl text-black font-bold'>Character List</h1>
        <div>
          <button onClick={() => refetch()} className='bg-green-700 p-4 py-3 border-green-700 rounded text-l font-bold text-white hover:bg-green-800 cursor-pointer mr-2'>Refresh</button>
          <Link to='/'>
            <button className='bg-green-700 p-4 py-3 border-green-700 rounded text-l font-bold text-white hover:bg-green-800 cursor-pointer'>Back To Home</button>
          </Link>
        </div>
        
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-l text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(header => (
                  <th key={header.id} scope="col" className="px-6 py-6">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} scope="col" className="px-6 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <nav aria-label="Page navigation example" className='box-border w-full mt-3'>
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button onClick={() => goToPage(page - 1)} disabled={page <= 1} className="flex items-center justify-center px-2 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </button>
          </li>
          {Array.from({ length: totalPages }).map((_, i) => {
            const p = i + 1
            return (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={
                  page === p
                    ? 'z-10 flex items-center justify-center px-2 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                {p}
              </button>
            )
          })}
          <li>
            <button onClick={() => goToPage(page + 1)} disabled={page >= totalPages} className="flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
    )
  }
  