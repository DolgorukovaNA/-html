import React from 'react';
import './App.css';
import React, { useState } from 'react';


const Factorial = ({ number }) => {
  const getFactorial = (num) => {
    if (num <= 0) {
      return 1;
    }

    return num * getFactorial(num - 1);
  };

  const result = getFactorial(number);

  return (
    <div>{`Factorial of ${number} is ${result}`}</div>
  );
};

const ButtonGroup = ({ changeValue }) => {
  const { t, i18n } = useTranslation();
  const handleLangSwitch = (e) => {
    const lang = e.target.dataset.testid;
    i18n.changeLanguage(lang);
  };

  const getClassName = (currLang) => {
    const className = i18n.language === currLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    return className;
  };

  return (
    <>
      <div className="btn-group mb-3" role="group">
        <button
          type="button"
          data-testid="en"
          className={getClassName('en')}
          onClick={handleLangSwitch}
        >
          {t('languages.en')}
        </button>
        <button
          type="button"
          data-testid="ru"
          className={getClassName('ru')}
          onClick={handleLangSwitch}
        >
          {t('languages.ru')}
        </button>
      </div>
      <br />
      <div className="btn-group mb-3" role="group">
        <button type="button" className="btn btn-outline-primary" onClick={() => changeValue(1)}>{`${t('factorial')} 1`}</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => changeValue(5)}>{`${t('factorial')} 5`}</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => changeValue(10)}>{`${t('factorial')} 10`}</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => changeValue(20)}>{`${t('factorial')} 20`}</button>
      </div>
    </>
  );
};

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <ButtonGroup changeValue={setValue} />
      <Factorial number={value} />
    </div>
  );
};

export default App;