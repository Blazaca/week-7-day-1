const token = '92718b8270bd31104e18b00c76178c1af31eae8aadde946b'


export const server_calls = {
    get: async () => {
        const response = await fetch('http://127.0.0.1:5000/api/synths', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        
    if (!response.ok){
        throw new Error('Failed to fetch data from server..')
    }

    return await response.json()
    },
    
    create: async (data: any = {}) =>{
        console.log('before post')
        const response = await fetch('http://127.0.0.1:5000/api/synths', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        console.log('after post')
        if (!response.ok){
            throw new Error('Failed to create drone..')
        }
        console.log('response.body')
        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch (`http://127.0.0.1:5000/api/synths/${id}`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    
    delete: async(id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/synths/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}