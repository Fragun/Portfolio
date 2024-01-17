import { useState } from "react";
import { AppContext } from "../../context/Context";

export default function AppProvider({ children }) {
  const [hiddenContainerContact, setHiddenContainerContact] = useState(false);
  const [hiddenContainerAboutMe, setHiddenContainerAboutMe] = useState(false);
  const [hiddenContainerEducation, setHiddenContainerEducation] =
    useState(false);
  const [hiddenContainerExperience, setHiddenContainerExperience] =
    useState(true);
  const [hiddenContainerWorks, setHiddenContainerWorks] = useState(false);

  const handleClickHiddenContainerWorks = (event) => {
    if (event) {
      event.preventDefault();
     } 

    const targetElement = document.querySelector("#works");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50, 
        behavior: "smooth",
      });
    }
    setHiddenContainerWorks(!hiddenContainerWorks);
  };

  const handleClickContainerExperience = (event) => {
    if (event) {
      event.preventDefault();
     } 

    const targetElement = document.querySelector("#exp");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50, 
        behavior: "smooth",
      });
    }
    setHiddenContainerExperience(!hiddenContainerExperience);
  };

  const handleClickTitleEducation = (event) => {
    if (event) {
      event.preventDefault();
     } 

    const targetElement = document.querySelector("#training");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50, 
        behavior: "smooth",
      });
    }
    setHiddenContainerEducation(!hiddenContainerEducation);
  };

  const handleClickContainerHiddenContact = (event) => {
    if (event) {
      event.preventDefault();
     } 

    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 20, 
        behavior: "smooth",
      });
    }
    setHiddenContainerContact(!hiddenContainerContact);
  };

  const handleClickContainerHiddenAboutMe = (event) => {
   if (event) {
    event.preventDefault();
   } 

    const targetElement = document.querySelector("#about");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50, 
        behavior: "smooth",
      });
    }
    setHiddenContainerAboutMe(!hiddenContainerAboutMe);
  };

  return (
    <AppContext.Provider
      value={{
        hiddenContainerContact,
        handleClickContainerHiddenContact,
        hiddenContainerAboutMe,
        handleClickContainerHiddenAboutMe,
        handleClickTitleEducation,
        hiddenContainerEducation,
        handleClickContainerExperience,
        hiddenContainerExperience,
        hiddenContainerWorks,
        handleClickHiddenContainerWorks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
