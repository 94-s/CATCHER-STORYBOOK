import { useState } from "react";
import "./App.css";
import CommonButton from "./stories/common/CommonButton";
import CommonInput from "./stories/common/CommonInput";
import Toggle from "./stories/Toggle";

function App() {
  const [inputValue, setInputValue] = useState({
    email: "",
    pw: "",
  });
  const [value, setValue] = useState(false);

  const onClick = () => {
    setValue(!value);
  };

  return (
    <>
      <div>
        <div style={{ width: "40vw", margin: "0 auto", padding: "50px" }}>
          <div style={{ marginBottom: "10px" }}>
            <CommonInput
              label="이메일을 입력해주세요."
              type="text"
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
              onDelete={() => setInputValue({ ...inputValue, email: "" })}
              error="12321"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CommonInput
              label="비밀번호를 입력해주세요."
              type="password"
              value={inputValue.pw}
              onChange={(e) =>
                setInputValue({ ...inputValue, pw: e.target.value })
              }
              onDelete={() => setInputValue({ ...inputValue, pw: "" })}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CommonButton label="버튼" buttonType="main" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CommonButton label="버튼" buttonType="sub" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CommonButton label="버튼" buttonType="disabled" />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Toggle state={value} onClick={onClick} disabled />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
