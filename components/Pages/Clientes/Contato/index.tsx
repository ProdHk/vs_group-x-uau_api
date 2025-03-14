
export default function FaleConosco() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-10">
            <div className="w-full max-w-4xl px-4">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Fale Conosco
                </h1>
                <p className="text-gray-300 mb-8">
                    Dúvidas, sugestões ou solicitações? Entre em contato conosco!
                </p>

                <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 p-8">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Nome"
                            className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Telefone"
                            className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <select
                            className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Selecione o assunto</option>
                            <option>Dúvidas sobre boleto</option>
                            <option>Negociação de saldo devedor</option>
                            <option>Informações sobre contrato</option>
                            <option>Outros</option>
                        </select>
                        <textarea
                            placeholder="Sua mensagem"
                            className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:ring-2 focus:ring-green-500"
                            rows={4}
                        ></textarea>

                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-400 hover:opacity-90 transition-opacity"
                            >
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-2">Outras formas de contato</h2>
                        <ul className="text-gray-400">
                            <li>📞 Telefone: (31) 3272-0333</li>
                            <li>📲 WhatsApp: (31) 99999-3000</li>
                            <li>📧 E-mail: jlemara@jlemara.com.br</li>
                            <li>📍 Endereço: Rua Rio de Janeiro, 300 - Centro, MG</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}