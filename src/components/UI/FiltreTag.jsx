import "../../sass/components/filtrebadge.scss";
const FiltreTag = (props) => {
  return (
    <div onClick={props.onClick} className="filtre-tag">
      {props.children}
    </div>
  );
};

export default FiltreTag;
