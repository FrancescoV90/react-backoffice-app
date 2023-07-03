import { useState } from "react";
import { IProductProps } from "../../interfaces/backoffice.interfaces";
import { useProductsStore } from "../../store/products.store";
import { FaTrashCan, FaCircleXmark } from "react-icons/fa6";
import Modal from "react-modal";
import "./Product.scss";

const Product = ({ id, data }: IProductProps) => {
  const { deleteProduct } = useProductsStore();
  const [modalIsOpen, setIsOpen] = useState(false);

  const onDeleteProduct = () => {
    deleteProduct(id);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="product">
      <span>{data.title}</span>
      <span>{data.category}</span>
      <span>{data.price}</span>
      <span>{data.employee}</span>
      <span>{data.description}</span>
      <button className="delete-button" onClick={openModal}>
        <FaTrashCan />
        Elimina prodotto
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Sei sicuro di voler eliminare {data.title}</h2>
        <button onClick={closeModal}>
          <FaCircleXmark />
          Chiudi
        </button>
        <button className="delete-button" onClick={onDeleteProduct}>
          <FaTrashCan />
          Elimina
        </button>
      </Modal>
    </div>
  );
};

export default Product;
