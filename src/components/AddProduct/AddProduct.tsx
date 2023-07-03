import { useState } from "react";
import { IAddProductRequest } from "../../interfaces/backoffice.interfaces";
import { useProductsStore } from "../../store/products.store";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

const AddProduct = () => {
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
    <>
      <button onClick={openModal}>
        <FaCirclePlus />
        Aggiungi prodotto
      </button>
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
          <button type="submit">
            <FaCirclePlus />
            Aggiungi
          </button>
        </form>
        <button onClick={closeModal}>
          <FaCircleXmark />
          Chiudi
        </button>
      </Modal>
    </>
  );
};

export default AddProduct;
