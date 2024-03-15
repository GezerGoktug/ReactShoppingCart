import "../../sass/components/input.scss";

const Input = (props) => {
  return (
    <div className={props.className}>
      {props.children}
      <input
        onChange={props.onChange}
        type={props.type || "text"}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
