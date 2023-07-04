import { useState } from "react";
import { IProductProps } from "../../interfaces/backoffice.interfaces";
import { useProductsStore } from "../../store/products.store";
import { FaTrashCan, FaCircleXmark } from "react-icons/fa6";
import Modal from "react-modal";
import "./Product.scss";

Modal.setAppElement("#root");

const Product = ({ id, data }: IProductProps) => {
  const { deleteProduct } = useProductsStore();
  const [modalIsOpen, setIsOpen] = useState(false);

  const onDeleteProduct = () => {
    deleteProduct(id);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="product">
      <div className="product-info">
        <div>
          <span className="product-label">Titolo: </span>
          <span>{data.title}</span>
        </div>
        <div>
          <span className="product-label">Categoria: </span>
          <span>{data.category}</span>
        </div>
        <div>
          <span className="product-label">Prezzo: </span>
          <span>{data.price}</span>
        </div>
        <div>
          <span className="product-label">Dipendente: </span>
          <span>{data.employee}</span>
        </div>
        <div>
          <span className="product-label">Descrizione: </span>
          <span>{data.description}</span>
        </div>
      </div>

      <button className="product-delete-button" onClick={openModal}>
        <FaTrashCan />
        Elimina prodotto
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="product-modal"
        overlayClassName="product-modal-overlay"
      >
        <h3>
          Sei sicuro di voler eliminare: <strong>{data.title}</strong>
        </h3>
        <div className="product-actions">
          <button className="product-delete-button" onClick={onDeleteProduct}>
            <FaTrashCan />
            Elimina
          </button>
          <button className="product-close-button" onClick={closeModal}>
            <FaCircleXmark />
            Chiudi
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
