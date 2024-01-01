import axios from 'axios';

var UsuariosServices = {
    getAllUsuarios: async () => {
        const usuariosApi = axios.get("https://localhost:7193/Usuarios");
        return await usuariosApi;
    },
    getAllUsuariosById: async (id) => {
        const usuariosApi = axios.get("https://localhost:7193/Usuarios"+id);
        return await usuariosApi;
    },
    postUsuarios: async (formData) => {
        const usuariosApi = axios.post("https://localhost:7193/Usuarios", formData);
        return await usuariosApi;
    }, 
    putUsuarios: async (id) => {
        const usuariosApi = axios.put("https://localhost:7193/Usuarios"+id);
        return await usuariosApi;
    },
    deleteUsuarios: async (id) => {
        const usuariosApi = axios.delete("https://localhost:7193/Usuarios"+id);
        return await usuariosApi;
    }
}

export default UsuariosServices