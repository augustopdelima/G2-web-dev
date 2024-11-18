import { FormField } from '../components'; 

export function Register() {
    return (
        <div className="p-20 w-full flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Cadastro de Usuário</h2>
                <form className="space-y-4">
                     
                    <FormField  label="Nome" type="text" id="nome" name="nome" placeholder="Digite seu nome"  />

                    <FormField  label="Email" type="email" name="email" id="email" placeholder="Digite seu e-mail"/>

                    <FormField  label="Senha" type="password" name="password" id="password" placeholder="Digite sua senha"/>

                    <FormField label="Confirmar Senha" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua senha"/>

            
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        Cadastrar
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-4">
                    Já possui uma conta?{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                        Faça login
                    </a>
                </p>
            </div>
        </div>
    )
}