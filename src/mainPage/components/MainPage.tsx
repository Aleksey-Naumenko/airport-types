import React, { useEffect, useState } from "react";

// components
import SearchSection from "./SearchSection";
import CovidSection from "./CovidSection";
import ServicesSection from "./ServicesSection";
import PriorityLineSection from "./PriorityLineSection";
import HelpSection from "./HelpSection";
import Loader from "./Loader";

// animation
import { Transition } from "react-transition-group";
//styles
import "../mainPage.scss";

const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      removeLoaderWithDelay();
      setLoading(false);
    }, 2000);
  }, []);

  const removeLoaderWithDelay = (): void => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  };

  return (
    <>
      <Transition in={loading} timeout={500} mountOnEnter unmountOnExit>
        {(state) => <Loader loaderClass={state} />}
      </Transition>
      {show && (
        <main className="main-page-container">
          <SearchSection />
          <CovidSection />
          <ServicesSection />
          <PriorityLineSection />
          <HelpSection />
        </main>
      )}
    </>
  );
};

export default MainPage;
