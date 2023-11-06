import React from "react";
import { Input26 } from "../25h/input26";
import { Button26 } from "../25h/button26";

const StepOne = () => {
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const clickHandler = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <Input26
              hasError={phoneError}
              value={phoneValue}
              onChange={setPhoneValue}
              id="phone"
              isRequired
              inputType="text"
              inputPlaceholder="Ваш ответ"
              inputName="answer"
              errorMessage="Введите номер в правильном формате например"
            />
            {/* <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label> */}
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
            <Button26
              onClick={clickHandler}
              buttonType="type"
              buttonText="Далее"
              id="next-btn"
              isDissabled="disabled"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
