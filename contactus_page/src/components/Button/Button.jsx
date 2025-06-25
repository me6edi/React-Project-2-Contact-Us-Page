// src/components/Button/Button.jsx
import "./Button.css";

function Button({ text, icon, isOutline }) {
  return (
    <button className={isOutline ? "outline_btn" : "primary_btn"}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
