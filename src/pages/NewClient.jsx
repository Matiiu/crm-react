
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';

import ClientForm from '../components/Form';
import Error from '../components/Error';

import { postClient } from '../api/getClients';

export async function action({ request }) {
  const formData = await request.formData();

  // Obtener todos los datos del formData
  const data = Object.fromEntries(formData);
  // Obtener un dato especifico por el 'name' del formulario
  const email = formData.get('nombre');
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  const errors = [];

  Object.values(data).includes('') && errors.push('Todos lo campos son Obligatorios');
  !regex.test(email) && errors.push('El Email no es valido')
  
  // Retornar datos si hay errores
  if(!!errors.lengt) return  errors;

  await postClient(data);
  
  return redirect('/');
}

export default function NewClient() {
  const navigate = useNavigate();

  // Hook para obtener los datos de la acción
  const errors = useActionData();




  return (
    <>
       <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
        <p className="mt-3">Llena Todos los Campos Para Registrar un Nuevo Cliente</p>

        <div className='flex justify-end'>
          <button 
            type="button" 
            className='bg-blue-800 px-3 py-1'
            onClick={() => navigate('/')}
          >
            <span className='text-white font-bold uppercase'>Volver</span>
          </button>
        </div>

        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
          {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
          <Form method="POST" noValidate>
            <ClientForm />

            <input 
              type="submit" 
              className='mt-5 w-full bg-blue-800 uppercase font-blod text-white text-lg'
              value="Registrar Cliente" 
            />
          </Form>
        </div>
    </>
  )
}
