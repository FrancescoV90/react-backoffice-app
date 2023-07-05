import { useState } from "react";
import { IAddProductRequest } from "../../interfaces/backoffice.interfaces";
import { useProductsStore } from "../../store/products.store";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import "./AddProduct.scss";

Modal.setAppElement("#root");

const AddProduct = () => {
  const { addProduct } = useProductsStore();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<IAddProductRequest>();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data: IAddProductRequest) => {
    addProduct(data);
    reset();
    closeModal();
  };

  return (
    <>
      <button className="add-product-add-button" onClick={openModal}>
        <FaCirclePlus />
        Aggiungi prodotto
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="add-product-modal"
        overlayClassName="add-product-modal-overlay"
      >
        <h3>Compila il seguente form per aggiungere un prodotto</h3>
        <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Titolo* (obbligatorio)"
            {...register("title", { required: true })}
          />
          <input
            placeholder="Categoria* (obbligatorio)"
            {...register("category", { required: true })}
          />
          <input
            placeholder="Prezzo* (obbligatorio)"
            type="number"
            {...register("price", { required: true })}
          />
          <input placeholder="Dipendente" {...register("employee")} />
          <input placeholder="Descrizione" {...register("description")} />
          <div className="add-product-actions">
            <button className="add-product-add-button" type="submit">
              <FaCirclePlus />
              Aggiungi
            </button>
            <button className="add-product-close-button" onClick={closeModal}>
              <FaCircleXmark />
              Chiudi
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddProduct;
