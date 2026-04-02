import Link from 'next/link';
import { TreePine, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B5D334]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="text-center relative z-10 px-6">
        <div className="bg-[#1B3C35] w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-12 shadow-2xl">
          <TreePine className="text-[#B5D334] w-12 h-12" />
        </div>
        
        <h1 className="text-[200px] font-black text-slate-100 leading-none tracking-tighter select-none">404</h1>
        <div className="-mt-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#1B3C35] tracking-tighter mb-6">
            Página não <span className="italic text-slate-300">encontrada.</span>
          </h2>
          <p className="text-xl text-slate-500 font-bold mb-16 max-w-lg mx-auto leading-relaxed">
            Esta rota não existe ou foi removida. Verifique o endereço ou volte para a página inicial.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-4 bg-[#1B3C35] text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-[#264d44] transition-all shadow-2xl hover:translate-y-[-2px]"
          >
            <ArrowLeft className="w-6 h-6 text-[#B5D334]" /> Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  );
}
