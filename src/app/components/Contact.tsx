import { IconBrandGithubFilled, IconBrandLinkedinFilled } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export default function Contact() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 p-4 md:p-8 bg-[url('/img/background2.jpg')] bg-cover bg-center" id="contato">
            {/* Bloco de Contato */}
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 bg-black/40 backdrop-blur-sm rounded-xl p-6">
                {/* Coluna da esquerda */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">Contato</h2>
                    <p className="text-zinc-200">
                        Precisa entrar em contato? Preencha o formulário ao lado ou envie um email para{' '}
                        <span className="text-indigo-300 hover:text-indigo-200 cursor-pointer">
                            paulovcsiqueira@gmail.com
                        </span>
                    </p>
                </div>

                {/* Coluna do formulário */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm mb-1 text-white">
                                Nome*
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full px-3 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm mb-1 text-white">
                                Sobrenome
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full px-3 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm mb-1 text-white">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm mb-1 text-white">
                            Como posso ajudar?
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-3 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        ></textarea>
                    </div>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Enviar mensagem
                    </button>
                </div>
            </div>

            {/* Bloco de Redes Sociais */}
            <div className="max-w-4xl w-full bg-black/40 backdrop-blur-sm rounded-xl p-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">Redes Sociais</h2>
                    <p className="text-zinc-200 mb-4">
                        Você pode me encontrar nas redes sociais abaixo:
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://github.com/paulovc26" target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-slate-400 transition-colors">
                            <IconBrandGithubFilled size={32} />
                        </Link>
                        <Link href="https://linkedin.com/in/paulovcsiqueira" target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-slate-400 transition-colors text-lg">
                            <IconBrandLinkedinFilled size={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}