import "../../sass/components/button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
