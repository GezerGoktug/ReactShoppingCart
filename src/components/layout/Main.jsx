import "../../sass/layout/main.scss";
import Products from "../Products/Products";
import Filtre from "../UI/Filtre";
import Input from "../UI/Input";
import FiltreTags from "./FiltreTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Main = ({filtreTag,setFiltreResult,productArray,onChange}) => {
  return (
    <main>
      <div className="container">
        <Filtre>
          <FiltreTags filtreTag={filtreTag} setFiltreResult={setFiltreResult}/>
          <Input 
          onChange={onChange}
          className="input-search"
          placeholder="Please enter your word"
          >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Input>
        </Filtre>
        <Products productArray={productArray}/>
      </div>
    </main>
  );
};

export default Main;
