import { useState } from "react";
import { useForm } from "react-hook-form";

export const useFormHook = (nameProduct, classNameForSize, newPrice) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      watch
    } = useForm();

    const [successOrder, setSuccessOrder] = useState(false);

    const watchPhone = watch("phone");

    const sendRequest = async (data) => {
        let userDate = {
            name: data.name,
            phone: data.phone,
            product: nameProduct,
            size: classNameForSize,
            price: newPrice
        }

        await fetch('https://api.heater.pp.ua/send', {
            method: 'POST',
            body: JSON.stringify({
                ...userDate
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
  
    const onSubmit = (data) => {
        setSuccessOrder(true);
        sendRequest(data);
        reset(); 
        setTimeout(() => {
            setSuccessOrder(false);
        }, 3000)
    };
  
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        watchPhone,
        successOrder
    };
  };