import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
//! Context Api Kurulumu
export const CartContext = createContext();
//! Default state imiz eğer depolamada veri yoksa sepet boştur.Varsa bu veriler getirilir...
//! Bu veriler kullanılır.Böylelikle sayfa çıkılsa dahi veriler yeniden karşımıza gelir.
const defaultCartState = {
  cartArray: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData")).cartArray
    : [],
  totalPrice: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData")).totalPrice
    : 0,
};
//! Sepet işlemlerini yapcak useReducer hookundaki dispatch fonksiyonu
const cartReducer = (state, action) => {
  switch (action.type) {
    //! Sepete ürün ekler eğer sepette o ürün varsa eklemez ve kullanıcı bilgilendirilir.
    case "Add-Product":
      if (state.cartArray.some((product) => product.id === action.product.id))
        return state;

      return {
        cartArray: [...state.cartArray, { ...action.product, amount: 1 }],
        totalPrice: state.totalPrice + action.product.price,
      };
    //! Sepet sidebarında ürün miktar artırma işlemlerini yönetir.
    //! Eğer ürün miktarı 1 iken azaltılırsa ürün sepetten kaldırılır.
    case "Chance-Amount":
      if (action.event.target.textContent === "+") {
        return {
          cartArray: state.cartArray.map((product) => {
            if (product.id === action.product.id)
              return { ...product, amount: product.amount + 1 };
            else return product;
          }),
          totalPrice: state.totalPrice + action.product.price,
        };
      } else if (action.event.target.textContent === "-") {
        if (action.product.amount === 1) {
          return {
            cartArray: state.cartArray.filter(
              (product) => product.id !== action.product.id
            ),
            totalPrice: state.totalPrice - action.product.price,
          };
        }
        return {
          cartArray: state.cartArray.map((product) => {
            if (product.id === action.product.id)
              return { ...product, amount: product.amount - 1 };
            else return product;
          }),
          totalPrice: state.totalPrice - action.product.price,
        };
      }
      break;
    //! Sepetin tamamını temizler.
    case "Clear-Product-List":
      return {
        cartArray: [],
        totalPrice: 0,
      };
    //! Seçilen ürünü siler.
    case "Remove-Product":
      return {
        cartArray: state.cartArray.filter(
          (product) => product.id !== action.product.id
        ),
        totalPrice:
          state.totalPrice - action.product.price * action.product.amount,
      };
  }
};
const CartProvider = ({ children }) => {
  //! Sepet işlemlerinin yönetimi için useReducer hooku
  //! Bir sürü sepet işlemi olduğu için karmaşık state işlemlerinde ...
  //! bu hook avantajlı olduğu için bu hook kullanıldı.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  //! Sepet her değiştiğinde sepet localstorage e saklanır.
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartState));
  }, [cartState]);
  //! Context Api İçerik
  //! Conttext Api ile bu içeriki her komponent de useContext hooku ile direkt...
  //! kullanabileceğiz.Prop drilling sorunuyla karşılaşmayacağız böylelikle.
  const cartContext = {
    cartArray: cartState.cartArray,
    totalPrice: cartState.totalPrice,
    //! Product ekleme fonksiyonu
    addProduct: (product) => {
      dispatchCartAction({ type: "Add-Product", product });
      if (cartState.cartArray.some((item) => item.id === product.id))
        toast.info(`${product.title} already in cart`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      else
        toast.success(`${product.title} added in cart`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
    },
    //! Miktar Değiştirme fonksiyonu
    chanceAmount: (product, event) => {
      dispatchCartAction({ type: "Chance-Amount", product, event });
      if (product.amount === 1 && event.target.textContent === "-")
        toast.success(`${product.title} removed in cart`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
    },
    //! Ürün silme fonksiyonu
    removeProduct: (product) => {
      dispatchCartAction({ type: "Remove-Product", product });
      toast.success(`${product.title} removed in cart`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    //! Listeyi temizleme fonksiyonu
    clearProductList: () => {
      dispatchCartAction({ type: "Clear-Product-List" });
      toast.success(`Cleared product list in cart`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
