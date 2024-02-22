export default function Clients({ clients }) {
  return (
    <tbody>
          {clients.map(client => (
              <tr className='border-p' key={client.id}>
                <td className='p-6 space-y-2'>
                  <p className='text-2xl text-gray-800'>{client.nombre}</p>
                  <p>{client.empresa}</p>
                </td>
                <td className='p-6'>
                  <p className='text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Email: </span>{client.email}
                  </p>

                  <p className='text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Tel: </span>{client.telefono}
                  </p>
                </td>

                <td className='p-6 flex gap-3'>
                  <button type="button">
                    <span className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'>Editar</span>
                  </button>

                  <button type="button">
                    <span className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'>Eliminar</span>
                  </button>
                </td>
              </tr>
            ))}
    </tbody>
  )
}
