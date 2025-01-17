'use client';
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandWhatsappFilled } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        const data = { email, assunto, message };

        // console.log('Dados do formulário:', data); // Adicionando log para verificar os dados

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (res.ok) {
                // console.log('Email enviado com sucesso:', result);
                setSuccessMessage('Email enviado com sucesso!');
            } else {
                // console.error('Erro ao enviar e-mail:', result);
                setErrorMessage(result.message || 'Erro ao enviar o e-mail');
            }

        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            setErrorMessage('Erro ao enviar o e-mail');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 p-4 sm:p-8 bg-[url('/img/background2.jpg')] bg-cover bg-center" id="contato">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-black/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Contato</h2>
                    <p className="text-zinc-200 text-sm sm:text-base">
                        Gostaria de entrar em contato? Preencha o formulário ou envie um email diretamente para{' '}
                        <Link href={"mailto:paulovcsiqueira@gmail.com"} className="text-white font-black hover:text-slate-400 cursor-pointer">
                            paulovcsiqueira@gmail.com
                        </Link>
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <form onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm mb-1 text-white">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="assunto" className="block text-sm mb-1 text-white">
                                Assunto
                            </label>
                            <input
                                type="text"
                                id="assunto"
                                name="assunto"
                                value={assunto}
                                onChange={(e) => setAssunto(e.target.value)}
                                className="w-full px-3 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm mb-1 text-white">
                                Como posso ajudar?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            ></textarea>
                        </div>

                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                        {successMessage && <div className="text-green-500">{successMessage}</div>}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-4xl w-full bg-black/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Redes Sociais</h2>
                    <p className="text-zinc-200 text-sm sm:text-base mb-3 sm:mb-4">
                        Você pode me encontrar nas redes sociais abaixo:
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://github.com/paulovc26" target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-slate-400 transition-colors">
                            <IconBrandGithubFilled size={28} className="sm:w-8 sm:h-8" />
                        </Link>
                        <Link href="https://linkedin.com/in/paulovcsiqueira" target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-slate-400 transition-colors">
                            <IconBrandLinkedinFilled size={28} className="sm:w-8 sm:h-8" />
                        </Link>
                        <Link href="https://wa.me/5561991679760" target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-slate-400 transition-colors">
                            <IconBrandWhatsappFilled size={28} className="sm:w-8 sm:h-8" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
