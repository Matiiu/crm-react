export async function getClients() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    
    if (!response.ok) {
      console.error('Error de solicitud:', response.status, response.statusText);
      throw new Error('Error obteniendo los datos')
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error?.message ?? error);
  }
}

export async function getClient(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    
    if (!response.ok) {
      console.error('Error de solicitud:', response.status, response.statusText);
      throw new Error('Error obteniendo los datos')
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error?.message ?? error);
  }
}

export async function postClient(data) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'aplicaiton/json'
        } 
     })
     await response.json();
  } catch (error) {
    console.error(error?.message ?? error);
  }
}

export async function putClient(id, data) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, { 
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'aplicaiton/json'
        } 
     })
     await response.json();
  } catch (error) {
    console.error(error?.message ?? error);
  }
}
