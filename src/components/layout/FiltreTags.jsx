import FiltreTag from "../UI/FiltreTag";
import { productData } from "../../ProductsData";

const FiltreTags = ({ setFiltreResult, filtreTag }) => {
  //! Kategori filtrelerine basıldığında filtre stateti güncellenir...
  //! Ve ilgili sonuçlar karşımıza çıkar.
  const handleFiltreTag = (category, e) => {
    let filtreArray = [];//? Filtre sonuçlarını tutacak dizi
    for (let i = 0; i < filtreTag.length; i++)
      filtreTag[i].classList.remove("active");

    switch (category) {
      case "all":
        filtreArray = productData;
        break;
      case "tops":
        filtreArray = productData.filter(
          (product) => product.category === "tops"
        );
        break;
      case "bottoms":
        filtreArray = productData.filter(
          (product) => product.category === "bottoms"
        );
        break;
      case "footwear":
        filtreArray = productData.filter(
          (product) => product.category === "footwear"
        );
        break;
      case "accessories":
        filtreArray = productData.filter(
          (product) => product.category === "accessories"
        );
        break;
    }
    setFiltreResult(filtreArray);
    e.target.classList.add("active");
  };
  return (
    <div className="filtre-tags">
      <FiltreTag onClick={(event) => handleFiltreTag("all", event)}>
        All
      </FiltreTag>
      <FiltreTag onClick={(event) => handleFiltreTag("tops", event)}>
        Tops
      </FiltreTag>
      <FiltreTag onClick={(event) => handleFiltreTag("bottoms", event)}>
        Bottoms
      </FiltreTag>
      <FiltreTag onClick={(event) => handleFiltreTag("footwear", event)}>
        Footwear
      </FiltreTag>
      <FiltreTag onClick={(event) => handleFiltreTag("accessories", event)}>
        Accessories
      </FiltreTag>
    </div>
  );
};

export default FiltreTags;
