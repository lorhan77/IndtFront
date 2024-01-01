import React, { useState, useEffect } from 'react'
import Logo from '../assets/Images/Logo.png'
import { useNavigate } from 'react-router-dom';
import UsuariosServices from "../services/UsuariosServices";

function Dashboard() {

    const [usuariosAll, setUsuariosAll] = useState([]);

    useEffect(() => {
        async function getUsuarios() {
                try {
                  const response = await UsuariosServices.getAllUsuarios();
                  console.log(response)
                  setUsuariosAll(response.data);
                } catch (error) {
                  console.error(error);
                }
        }
        getUsuarios();
      }, [])

    console.log(usuariosAll)

    const Navigate = useNavigate();

    const handleAdd = async () => {

        Navigate("/cadastrar");
        
    }



    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='w-full flex bg-[#58D5D3]/20'>
            <div className='w-1/5' />
            <div className='w-3/5 h-[100vh] bg-cyan-50 shadow-md whitespace-nowrap overflow-y-auto '>

                <div className='flex items-center border-b border-slate-950'>
                    <div>
                        <img src={Logo} className=' h-[8rem]' />

                    </div>
                    <div className='tracking-widest text-semibold text-2xl'>
                        Gerenciamento de Usuários
                    </div>
                </div>

                <div className='bg-white py-4 '>

                    <div className="px-4 sm:px-6 lg:px-8  shadow-sm">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-gray-900">Usuários</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                   Um lista de todos os os usuários contendo seus nomes, sobrenomes, email e nível de acesso.
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <button
                                    type="button"
                                    className="block rounded-md bg-[#58D5D3] hover:bg-[#58D5D3]/70  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58D5D3] "
                                    onClick={handleAdd}
                               >
                                    Adicionar usuário
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle">
                                    <table className="min-w-full border-separate border-spacing-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                                >
                                                    Nome
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                                >
                                                    Sobrenome
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                                >
                                                    Nível de Acesso
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                                >
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-slate-50'>
                                            {usuariosAll && usuariosAll.map((person, personIdx) => (
                                                <tr key={person.Nome}>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== usuariosAll.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                                                        )}
                                                    >
                                                        {person.nome}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== usuariosAll.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                                                        )}
                                                    >
                                                        {person.sobrenome}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== usuariosAll.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                                        )}
                                                    >
                                                        {person.email}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== usuariosAll.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                                                        )}
                                                    >
                                                        {person.nivelDeAcesso}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== usuariosAll.length - 1 ? 'border-b border-gray-200' : '',
                                                            'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                                                        )}
                                                    >
                                                        <a href="#" className="text-[#58D5D3]  hover:text-[#58D5D3]/70 hover:bg-black/10 hover:rounded-full p-2">
                                                            Editar<span className="sr-only">{person.name}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
            </div>
            <div className='w-1/5' />
        </div>
    )
}

export default Dashboard