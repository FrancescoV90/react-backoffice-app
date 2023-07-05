import { useState } from "react";
import { IAddProductRequest } from "../../interfaces/backoffice.interfaces";
import { useProductsStore } from "../../store/products.store";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Modal from "react-modal";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import "./AddProduct.scss";

Modal.setAppElement("#root");

const AddProduct = () => {
  const { addProduct } = useProductsStore();
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IAddProductRequest>();

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
          <div>
            <input
              placeholder="Titolo* (obbligatorio)"
              {...register("title", { required: "Campo obbligatorio" })}
              className={errors.title ? "add-product-input-error" : ""}
            />
            <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }) => (
                <p className="add-product-error-message">{message}</p>
              )}
            />
          </div>

          <div>
            <input
              placeholder="Categoria* (obbligatorio)"
              {...register("category", { required: "Campo obbligatorio" })}
              className={errors.category ? "add-product-input-error" : ""}
            />
            <ErrorMessage
              errors={errors}
              name="category"
              render={({ message }) => (
                <p className="add-product-error-message">{message}</p>
              )}
            />
          </div>

          <div>
            <input
              placeholder="Prezzo* (obbligatorio)"
              type="number"
              {...register("price", { required: "Campo obbligatorio" })}
              className={errors.price ? "add-product-input-error" : ""}
            />
            <ErrorMessage
              errors={errors}
              name="price"
              render={({ message }) => (
                <p className="add-product-error-message">{message}</p>
              )}
            />
          </div>

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
