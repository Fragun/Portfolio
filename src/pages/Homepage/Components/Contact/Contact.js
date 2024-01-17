import styles from "./Contact.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Wysiwyg from "./components/Wysiwyg";
import Alert from "../../../../components/Header/components/Alert/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const { t } = useTranslation();
  const [editorContent, setEditorContent] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const schemaYup = Yup.object().shape({
    email: Yup.string()
      .email("Adresse e-mail invalide")
      .required("L'adresse e-mail est requise"),
    message: Yup.string().default(() => editorContent),
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
        to_email: "dethoordavid@gmail.com",
        email: data.email,
        message: data.message,
      };

      await emailjs.send(
        "service_dvkjfqv",
        "template_lv3bwng",
        emailjsParams,
        "vCYBhPkyraDTZZZ_G"
      );

      console.log("E-mail envoyé avec succès");
      setShowAlert(!showAlert);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail", error);
      setError("generic", {
        type: "generic",
        message: "Erreur lors de l'envoi de l'e-mail",
      });
    }
  });
  /**
   * Fonction pour mettre à jour le contenu de l'éditeur Wysiwyg
   */
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
  /**
   * Permet de cacher tout l'onglet contact lors du clique
   *
   */

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
    
      <h2
        className={`${styles.title}`}
      >
        {t("contactTitle")}
      </h2>
      <article
        className={`${styles.containerContact}`}
      >
        {!showAlert && (
          <form onSubmit={submit}>
            <div className={`${styles.titleMail} df jcc`}>
              <h3 className="mr10">M<FontAwesomeIcon icon={faAt} className={`${styles.iconMail}`}/>il :</h3>
              <input {...register("email")} />
              {errors.email && <div>{errors.email.message}</div>}
            </div>

            <Wysiwyg setEditorContent={handleEditorChange} />
            {errors?.message && <div>{errors.message.message}</div>}
            <div className="df jcc"><button className={`btn ${styles.sendButton}`} disabled={isSubmitting}>Envoyer</button></div>
          </form>
        )}

        {showAlert && (
          <Alert message="Mail envoyé avec succès" onClose={closeAlert} />
        )}
      </article>
    </>
  );
}
