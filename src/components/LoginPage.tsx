// src/components/LoginPage.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginPage() {
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
          <h1 className="text-3xl font-bold text-green-700">Entrar na Plataforma</h1>
          <p className="text-gray-500 text-sm mt-2">Bem-vindo de volta! Por favor, entre com seus dados.</p>
        </div>

        <form className="space-y-4">
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
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-600" />
              Lembrar-me
            </label>
            <a href="#" className="text-green-600 hover:underline">Esqueceu a senha?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Entrar
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          Ainda não tem uma conta?
          <Link to="/signup" className="text-green-700 hover:underline ml-1">
            Criar conta
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
