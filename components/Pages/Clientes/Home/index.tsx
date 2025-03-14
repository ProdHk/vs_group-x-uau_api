// app/page.tsx

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center items-center py-8">
            <div className="w-full max-w-5xl px-6">
                <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                    Portal do Cliente J.Lemara
                </h1>

                <p className="text-lg text-gray-300 mb-8">
                    Gerencie facilmente suas solicitações financeiras e tenha controle total sobre seus pagamentos e cobranças.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="/cliente/segunda-via-boleto" className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 hover:border-orange-400 transition">
                        <h2 className="text-xl font-semibold text-white">2ª via do Boleto</h2>
                        <p className="text-gray-400 mt-2">Solicite ou visualize a segunda via dos seus boletos rapidamente.</p>
                    </a>

                    <a href="/cliente/extrato-financeiro" className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 hover:border-green-400 transition">
                        <h2 className="text-xl font-semibold text-white">Extrato Financeiro</h2>
                        <p className="text-gray-400">Consulte seus pagamentos e histórico financeiro.</p>
                    </a>


                    <a href="/cliente/contato" className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 hover:border-yellow-400 transition">
                        <h2 className="text-xl font-semibold text-white">Fale conosco</h2>
                        <p className="text-gray-400">Precisa de ajuda? Estamos aqui para você.</p>
                    </a>

                </div>
            </div>
        </div>
    );

}
