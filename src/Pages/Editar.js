import React, { useState }  from 'react'
import { useParams } from "react-router-dom";
import Logo from '../assets/Images/Logo.png'
import UsuariosServices from "../services/UsuariosServices";

function Editar() {
    const [userFormData, setUserFormData] = useState();

    const { id } = useParams();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserFormData((prevFormData) => ({
          ...prevFormData,
            [name]: value,
        }));
      };

      

    const handleSubmit = async () => {
        try {
          const formData = {
            ...userFormData,
            nome: userFormData.nome,
            sobrenome: userFormData.sobrenome,
            email: userFormData.email,
            senha: userFormData.senha,
            nivelDeAcesso: userFormData.nivelDeAcesso
          };
          console.log(formData);
          const response = await UsuariosServices.putUsuarios(id,formData);
          console.log(response);
         
          
      }catch (error) {
        console.error(error);
         
      }
    }

    console.log(userFormData);
    
    

    return (
        <div className='w-full flex bg-[#58D5D3]/20'>
            <div className='w-1/5' />
            <div className='w-3/5 h-[100vh] bg-cyan-50 shadow-md whitespace-nowrap overflow-y-auto '>

                <div className='flex items-center border-b border-slate-950'>
                    <div>
                        <img src={Logo} className=' h-[8rem]' />

                    </div>
                    <div className='tracking-widest text-semibold text-2xl'>
                        Edição de Usuário
                    </div>
                </div>

                <div className='py-4 px-4 shadow-md pb-4 bg-white '>

                    <form>
                        <div className="space-y-12 sm:space-y-16">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                                    Essas informações abaixo são necessárias para a edição de usuário.
                                </p>

                                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                            Nome
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#58D5D3] sm:max-w-md">
                                                <input
                                                    onChange={handleChange}
                                                    
                                                    type="text"
                                                    name="nome"
                                                    id="nome"
                                                    autoComplete="nome"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Nome"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                            Sobrenome
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#58D5D3] sm:max-w-md">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="sobrenome"
                                                    id="sobrenome"
                                                    autoComplete="sobrenome"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Sobrenome "
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                            Email
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#58D5D3] sm:max-w-md">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                            Senha
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#58D5D3] sm:max-w-md">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="senha"
                                                    id="senha"
                                                    autoComplete="senha"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Senha"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                            Nível de Acesso
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#58D5D3] sm:max-w-md">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="nivelDeAcesso"
                                                    id="nivelDeAcesso"
                                                    autoComplete="nivelDeAcesso"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Nível de Acesso"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            


                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancelar
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                
                                className="inline-flex justify-center rounded-md bg-[#58D5D3] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#58D5D3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58D5D3]"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='w-1/5' />
        </div>
    )
}

export default Editar