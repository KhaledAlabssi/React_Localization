import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useTranslation, Trans } from "react-i18next";
import people from './data'
import peopleDe from './dataDe'
const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

function App() {
  const {t, i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  let d;
  if (i18n.language === 'en') {
    d = people
  } else {
    d = peopleDe
  }
  const clickHandler = (e) => {
    console.log(i18n.language);
    i18n.changeLanguage(e.target.id);
    console.log(i18n.language);
  }
  useEffect(() => {}, [language, clickHandler])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              id={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={clickHandler}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        {d.map(s => <p>{s.gender}</p>)}

        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("description.part2")}
        </a>
        
      </header>
    </div>
  );
}

export default App;
