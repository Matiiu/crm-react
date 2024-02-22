import { useLoaderData } from 'react-router-dom';
import Clients from '../components/Clients';

import { getClients } from '../api/apiClients.js';

export async function loader() {
  const clients = await getClients();
  return clients;
}

export default function Index() {
  // Hook para mandar a llamar al louder
  const clients = useLoaderData();

  // Error Boundaries
  
  
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {!!clients?.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Cliente</th>          
              <th className='p-2'>Contacto</th>           
              <th className='p-2'>Acciones</th> 
            </tr>
          </thead>
            <Clients clients={clients} />
        </table>
      ) : (
        <p className='text-center mt-10'>No hay Cleintes aún</p>
      )}
    </>
  )
}
