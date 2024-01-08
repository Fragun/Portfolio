import styles from "./Contact.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const [hiddenContainer, setHiddenContainer] = useState(false);

  const schemaYup = Yup.object().shape({
    email: Yup.string()
      .email("Adresse e-mail invalide")
      .required("L'adresse e-mail est requise"),
    message: Yup.string().required("Le message est requis"),
  });

  const initialValues = {
    email: "",
    message: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(schemaYup),
  });

  const submit = handleSubmit(async (data) => {
    try {
      clearErrors();
      console.log(data);
      const emailjsParams = {
        to_email: 'dethoordavid@gmail.com', 
        email: data.email,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_API_KEY,
        process.env.REACT_APP_TEMPLATE_ID,
        emailjsParams,
        process.env.REACT_APP_USER_ID,
      );

      console.log('E-mail envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail', error);
      setError('generic', { type: 'generic', message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  });

  /**
   * Permet de cacher tout l'onglet contact lors du clique
   *
   */
  const handleClickContainerHidden = () => {
    setHiddenContainer(!hiddenContainer);
  };

  return (
    <>
      <h2
        className={`${styles.title}`}
        onClick={() => {
          handleClickContainerHidden();
        }}
      >
        {t("contactTitle")}
      </h2>
      <article
        className={`${styles.containerContact} ${
          hiddenContainer ? "" : styles.hiddenContainer
        }`}
      >
        <form onSubmit={submit}>
          <label>
            Email:
            <input {...register("email")} />
            {errors.email && <div>{errors.email.message}</div>}
          </label>
          <label>
            Message:
            <textarea {...register("message")} />
            {errors?.message && <div>{errors.message.message}</div>}
          </label>
          <button disabled={isSubmitting}>Envoyer</button>
        </form>
      </article>
    </>
  );
}
