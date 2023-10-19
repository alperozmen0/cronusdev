import { useState, useRef } from "react";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OutlineButton } from "@/components/buttons/OutlineButton";

export const Contact = () => {
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current!, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        toast.success('Message sent!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setMessage('');
        form.current!.reset();
      }, (error) => {
        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <ToastContainer />
      <section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span>.</span>
            </h4>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.contactCopy}>
              İletişim için email yollayabilirsin veya {" "}
              <Link
                href="https://www.instagram.com/crons1337/"
                target="_blank"
                rel="nofollow"
              >
                Instagram
              </Link>{" "}
              veya{" "}
              <Link href="https://www.twitter.com/sh17va" target="_blank" rel="nofollow">
                Twitter
              </Link>{" "}
              üzerinden de iletişime geçebilirsin.
            </p>
          </Reveal>
          <Reveal width="100%">
            <Link href="mailto:iletisim@cronusdev.com">
              <div className={styles.contactEmail}>
                <AiFillMail size="2.4rem" />
                <span>iletisim@cronusdev.com</span>
              </div>
            </Link>
          </Reveal>
          <Reveal width="100%">
            <form autoComplete="false" className={styles.contantForm} ref={form} onSubmit={sendEmail}>
              <div className={styles.inputBox}>
                <input type="text" placeholder="İsmin" autoComplete="false" name="to_name" required />
                <input type="email" placeholder="Email Adresin" autoComplete="false" name="from_name" required />
              </div>
              <textarea placeholder="Mesajın"
                autoComplete="false"
                required
                name="message"
                value={message}
                onChange={handleMessageChange}></textarea>
                <br /><br />
              <OutlineButton>
                Yolla
              </OutlineButton>
            </form>

          </Reveal>
        </div>
      </section>
    </>
  );
};
