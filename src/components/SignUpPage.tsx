// src/components/SignUpPage.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-700">Criar Conta</h1>
          <p className="text-gray-500 text-sm mt-2">Cadastre-se para acessar a plataforma.</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Primeiro Nome</label>
              <input
                type="text"
                placeholder="Ex: Ana"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Último Nome</label>
              <input
                type="text"
                placeholder="Ex: Souza"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Município</label>
            <input
              type="text"
              placeholder="Ex: Luanda"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Bairro</label>
            <input
              type="text"
              placeholder="Ex: Kinaxixi"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Criar Conta
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          Já tem uma conta?
          <Link to="/login" className="text-green-700 hover:underline ml-1">
            Entrar
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
