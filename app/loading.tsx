import { TreePine } from 'lucide-react';

export default function Loading() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="bg-[#1B3C35] w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
          <TreePine className="text-[#B5D334] w-10 h-10" />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-2 h-2 bg-[#B5D334] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#B5D334] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#B5D334] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </main>
  );
}
