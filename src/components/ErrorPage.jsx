// Ya no hay soporte para el hook useRouterError en la v6 de react router dom
// import { useRouterError }  from 'react-router-dom';

export default function ErrorPage() {
//    const erorr = useRouterError();
//    console.error(erorr.message)

  return (
    <div className='space-y-8'>
        <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>
            CRM - Clientes
        </h1>
    </div>
  )
}
