import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import  axios  from 'axios';
export const contact_router = createTRPCRouter({
  log_message: publicProcedure
    .input(
      z.object({
        name: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(10),
        info: z.string().min(5),
        token: z.string(), 
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log(
        input.email,
        input.name,
        input.phone,
        input.info,
        input.token,
      );
      let node_mailer = require('nodemailer');
      const captcha_secret_key = process.env.CAPTCHA_SECRET_KEY;
      let captcha_verification_url = 
        "https://www.google.com/recaptcha/api/siteverify?secret=" +
        captcha_secret_key +
        "&response=" +
        input.token + "1123";
      let response = await axios.post(captcha_verification_url);
      if (response.data.success && response.data.score >= 0.5) {
          const transporter = node_mailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD,
            },
            secure: true,
          });
          const mail_data = {
            from: 'contact@edwinmundo.dev',
            to: 'edwingmundo2@gmail.com',
            subject: 'New Contact',
            text: `${input.name} - ${input.email} - ${input.phone} \n ${input.info}`,
            html: `<div>
            <p>${input.name}</p>
            <p>${input.email}</p>
            <p>${input.phone}</p>
            <p>${input.info}</p>
            </div>`,
          };
          transporter.sendMail(
            mail_data,
            (err: any, info: any) => {
              if (err) {
                console.log(err);
              } else {
                console.log(info);
              }
            }
          );
          return input.name;
        } else { return false }
    }),
});
