import PropTypes from 'prop-types';

import { useNavigate, redirect, Form } from 'react-router-dom';
import { deleteClient } from '../api/apiClients';


export async function action({ params }) {
  await deleteClient(params.clientId)
  return redirect('/');
}

export default function Clients({ clients }) {
  const navigate = useNavigate();

  return (
    <tbody>
          {clients.toSorted((a, b) => {
              const nameA = (a.nombre || '').toLowerCase();
              const nameB = (b.nombre || '').toLowerCase();
              if (nameA < nameB) return -1
              if (nameA > nameB) return 1
              return 0;
            }).map(client => (
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
                  <button type="button" onClick={() => navigate(`clientes/${client.id}/editar`)}>
                    <span className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'>Editar</span>
                  </button>

                  <Form 
                    method="POST" 
                    action={`/clientes/${client.id}/eliminar`}
                    onSubmit={(e) => {
                      if (!confirm(`¿Estás seguro de que deseas eliminar al usuario ${client.nombre}?`)) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <button type="submit">
                      <span className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'>Eliminar</span>
                    </button>
                  </Form>
                </td>
              </tr>
            ))}
    </tbody>
  )
}

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    empresa: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefono: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    notas: PropTypes.string
  })).isRequired
};