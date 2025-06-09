// src/components/MedicalLandingPage.tsx
import { Link } from "react-router-dom";


export default function MedicalLandingPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-green-700 overflow-hidden">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 z-10 relative">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-28 h-28" />
        </div>
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Contact</a>
          <Link
            to="/login"
            className="border border-green-700 rounded-full px-4 py-1 hover:bg-green-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link to="/signup" className="border border-green-700 rounded-full px-4 py-1 hover:bg-green-600 hover:text-white transition"
          >
            Sign Up
          </Link>

        </nav>
      </header>

      {/* Background green circle */}
      <div className="absolute top-[100px] right-0 w-[700px] h-[700px] bg-green-100 rounded-full translate-x-[120px] -z-0"></div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-16">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-center">
          <h2 className="text-7xl font-extrabold text-green-700">BLANK</h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Solução completa para gestão de farmácias, clínicas e drogarias.<br />
            Controle de estoque, vendas, receituário e <br />
            muito mais em uma única plataforma.
          </p>
          <button className="mt-8 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end relative z-10">
          <img
            src="/doctor-placeholder.png"
            alt="Smiling doctor holding pills"
            className="w-[3000px] h-auto object-contain mr-[-100px]"
          />
        </div>
      </main>

      <footer className="bg-green-50 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Funcionalidades</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Planos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Central de Ajuda</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Termos de Uso</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}

