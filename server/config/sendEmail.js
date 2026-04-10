import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();
const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Grocery <onboarding@resend.dev>",
      to: sendTo,
      subject: subject,
      html: html,
    });
    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
