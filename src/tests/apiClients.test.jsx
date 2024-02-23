import {
    getClients,
    getClient,
    postClient,
    putClient,
    deleteClient
  } from '../api/apiClients'; 
  // Mock para fetch
  global.fetch = jest.fn();
  const urlClient = '';
  
  describe('API Client Functions', () => {
    beforeEach(() => {
      fetch.mockClear();
    });
  
    test('getClients should fetch clients successfully', async () => {
      const mockClients = [
        {
          nombre: "Josue perea",
          empresa: "Codigo Con Juan",
          email: "josue@juan.com",
          telefono: "31983913",
          notas: "wrwr",
        }
      ];
      fetch.mockResolvedValueOnce({ ok: true, json: async () => mockClients });
  
      const result = await getClients();
  
      expect(result).toEqual(mockClients);
      expect(fetch).toHaveBeenCalledWith(urlClient);
    });
  
    test('getClient should fetch a client by ID successfully', async () => {
      const mockClient =  {
        nombre: "Josue perea",
        empresa: "Codigo Con Juan",
        email: "josue@juan.com",
        telefono: "31983913",
        notas: "wrwr",
      };
      const clientId = 3;
      fetch.mockResolvedValueOnce({ ok: true, json: async () => mockClient });
  
      const result = await getClient(clientId);
  
      expect(result).toEqual(mockClient);
      expect(fetch).toHaveBeenCalledWith(`${urlClient}/${clientId}`);
    });
  
    test('postClient should post data successfully', async () => {
      const mockData = {  
        nombre: 'New Client', 
        empresa: 'crepes and waffles', 
        email: 'email@gmail.com',  
        notas: 'Hola Mundo' 
      };

      fetch.mockResolvedValueOnce({ ok: true, json: async () => {} });
  
      await postClient(mockData);
  
      expect(fetch).toHaveBeenCalledWith(urlClient, {
        method: 'POST',
        body: JSON.stringify(mockData),
        headers: { 'Content-type': 'application/json' }
      });
    });
  
    test('putClient should update data successfully', async () => {
      const mockData = { name: 'Updated Client' };
      const clientId = 3;
      fetch.mockResolvedValueOnce({ ok: true, json: async () => {} });
  
      await putClient(clientId, mockData);
  
      expect(fetch).toHaveBeenCalledWith(`${urlClient}/${clientId}`, {
        method: 'PUT',
        body: JSON.stringify(mockData),
        headers: { 'Content-type': 'application/json' }
      });
    });
  
    test('deleteClient should delete data successfully', async () => {
      const clientId = 3;
      fetch.mockResolvedValueOnce({ ok: true, json: async () => {} });
  
      await deleteClient(clientId);
  
      expect(fetch).toHaveBeenCalledWith(`${urlClient}/${clientId}`, {
        method: 'DELETE'
      });
    });
  });
  