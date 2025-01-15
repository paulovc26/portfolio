import { Poppins } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Head>
          <title>Portfólio de Paulo Vitor</title>
        </Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio de Paulo Vitor" />
        <meta name="author" content="Paulo Vitor" />
        <meta name="keywords" content="Portfólio, Paulo Vitor, Desenvolvedor, Frontend, React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Git, GitHub, Docker, Kubernetes, Cloud, AWS, Azure, GCP, CI/CD, DevOps, Agile, Scrum, Kanban, Jira, GitLab, Bitbucket, Jenkins, Docker, Kubernetes, Cloud, AWS, Azure, GCP, CI/CD, DevOps, Agile, Scrum, Kanban, Jira, GitLab, Bitbucket, Jenkins" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
