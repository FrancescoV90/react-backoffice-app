import { useState } from "react";
import { useProductsStore } from "../../store/products.store";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { IAddProductRequest } from "../../interfaces/backoffice.interfaces";

const AddProductButton = () => {
  const { addProduct } = useProductsStore();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm<IAddProductRequest>();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data: IAddProductRequest) => {
    addProduct(data);
    closeModal();
  };

  return (
    <div className="product">
      <button onClick={openModal}>Aggiungi prodotto</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Compila il seguente form per aggiungere un prodotto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("title", { required: true })} />
          <input {...register("category", { required: true })} />
          <input type="number" {...register("price", { required: true })} />
          <input {...register("employee", { required: true })} />
          <input {...register("description", { required: true })} />
          <button type="submit">Aggiungi</button>
        </form>
        <button onClick={closeModal}>Chiudi</button>
      </Modal>
    </div>
  );
};

export default AddProductButton;
