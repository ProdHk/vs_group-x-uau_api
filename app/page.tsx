// app/page.tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFA500] via-[#4c1d95] to-[#10B981] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" />
      <Card className="w-full max-w-md p-8 bg-white opacity-90 rounded-xl shadow-xl border border-border">
        <h1 className="text-4xl font-bold text-card-foreground mb-2 text-center">Área do cliente</h1>
        <p className="text-muted-foreground mb-6">Entre na sua conta para continuar</p>

        <form className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="E-mail"
            className="px-3 py-2 rounded-md border border-input bg-background text-foreground outline-none focus:ring-2 focus:ring-ring"
          />

          <Input
            type="password"
            placeholder="Senha"
            className="px-3 py-2 rounded-md border border-input bg-background text-foreground outline-none focus:ring-2 focus:ring-ring"
          />

          <Button variant='default' type="submit" className="w-full">
            Entrar
          </Button>

          <p className="text-sm text-muted-foreground text-center mt-4">
            Não consegue entrar?{' '} <br />
            <a href="#" className="text-primary underline">
              Recupere sua senha
            </a>
            {' '}
            ou
            {' '}
            <a href="#" className="text-primary underline">
              Faça seu cadastro
            </a>
          </p>
        </form>

        <div className="absolute -top-10 -left-10 w-56 h-56 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-16 -right-12 w-64 h-64 bg-white opacity-10 rounded-full"></div>
      </Card>
    </div >
  );
}

