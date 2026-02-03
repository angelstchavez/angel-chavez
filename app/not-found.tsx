// app/not-found.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="space-y-6 text-center">
        <header className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 font-mono">
            Error Code 404
          </span>
          <h1 className="text-4xl font-bold tracking-tighter italic">
            Perdido en el código.
          </h1>
          <p className="text-sm text-muted-foreground max-w-70 mx-auto leading-relaxed">
            La página que intentas buscar no existe o ha sido movida.
          </p>
        </header>

        <div className="pt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-foreground pb-1 hover:opacity-60 transition-all"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Regresar al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
