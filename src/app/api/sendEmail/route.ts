// import nodemailer from "nodemailer";
// import { Resend } from "resend";

// export async function POST(req: Request) {
//   try {
//     const { email, assunto, message } = await req.json();

//     // Verifique se as variáveis de ambiente estão sendo carregadas corretamente
//     console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
//     console.log("SENHA:", process.env.EMAIL_PASS);
//     console.log("EMAIL_USER:", process.env.EMAIL_USER);

//     // Config nodemailer 1

//     // const transporter = nodemailer.createTransport({
//     //   host: process.env.EMAIL_HOST,
//     //   port: Number(process.env.EMAIL_PORT),
//     //   auth: {
//     //     user: process.env.EMAIL_USER,
//     //     pass: process.env.EMAIL_PASS,
//     //   },
//     // });

//     // Config nodemailer 2

//     // const transporter = nodemailer.createTransport({
//     //   service: "gmail",
//     //   // port: 587,
//     //   auth: {
//     //     user: process.env.EMAIL_USER,
//     //     pass: process.env.EMAIL_PASS,
//     //   },
//     //   tls: {
//     //     rejectUnauthorized: false, // Para garantir que a conexão seja segura
//     //   },
//     // });

//     // CONFIG 3 NODEMAILER AGR VAI

//     const resend = new Resend(process.env.API_KEY);

//     const useResend = resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: "paulovcsiqueira@gmail.com",
//       subject: "Hello World",
//       html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
//     });

//     // Opções do e-mail
//     const mailOptions = {
//       from: process.env.EMAIL_USER, // E-mail de origem
//       to: "paulovcsiqueira@gmail.com", // Destinatário
//       subject: assunto, // Assunto do e-mail
//       text: message, // Texto do e-mail
//       html: `<p>De: ${email}, \n\n ${message}</p>`, // HTML do e-mail
//     };

//     // Envio do e-mail
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email enviado:", info);

//     return new Response(
//       JSON.stringify({ message: "E-mail enviado com sucesso!" }),
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Erro ao enviar e-mail:", error);
//     return new Response(
//       JSON.stringify({
//         message: "Erro ao enviar o e-mail.",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// }

import { EmailTemplate } from "@/app/components/common/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, assunto, message } = await req.json();

    // Adicionando logs para verificar os dados recebidos
    console.log("Dados recebidos:", { email, assunto, message });

    if (!email || !assunto || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["paulovcsiqueira@gmail.com"],
      subject: assunto,
      react: await EmailTemplate({ firstName: email, message: message }),
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Erro no servidor:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
