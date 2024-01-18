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

  const handleClickTitleWorks = () => {
    setHiddenContainerWorks(!hiddenContainerWorks);
  };
  const handleClickHiddenContainerWorks = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (hiddenContainerWorks === false) {
      setHiddenContainerWorks(!hiddenContainerWorks);
    }
    const targetElement = document.querySelector("#works");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50,
        behavior: "smooth",
      });
    }
  };

  const handleClickTitleExp = () => {
    setHiddenContainerExperience(!hiddenContainerExperience);
  };
  const handleClickContainerExperience = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (hiddenContainerExperience === true) {
      setHiddenContainerExperience(!hiddenContainerExperience);
    }

    const targetElement = document.querySelector("#exp");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50,
        behavior: "smooth",
      });
    }
  };
const handleTitleEducation = () => {
  setHiddenContainerEducation(!hiddenContainerEducation);
}
  const handleClickTitleEducation = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (hiddenContainerEducation === false) {
      setHiddenContainerEducation(!hiddenContainerEducation);
    }
    const targetElement = document.querySelector("#training");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50,
        behavior: "smooth",
      });
    }
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

  const handleClickTitleAboutMe = () => {
    setHiddenContainerAboutMe(!hiddenContainerAboutMe);
  };

  const handleClickContainerHiddenAboutMe = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (hiddenContainerAboutMe === false) {
      setHiddenContainerAboutMe(!hiddenContainerAboutMe);
    }
    const targetElement = document.querySelector("#about");
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset - 50,
        behavior: "smooth",
      });
    }
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
        handleClickTitleAboutMe,
        handleClickTitleWorks,
        handleClickTitleExp,
        handleTitleEducation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
