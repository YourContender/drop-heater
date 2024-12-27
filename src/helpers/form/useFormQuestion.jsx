import { useState } from "react";
import { useForm } from "react-hook-form";

export const useFormQuestion = ( nameProduct ) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      watch
    } = useForm();

    const watchPhone = watch("phone");

    const sendRequest = async (data) => {
        let userData = {
            tel: data.phone,
            text: "Є питання, замовили виклик",
            product: nameProduct
        }

        await fetch('https://api.heater.pp.ua/send', {
            method: 'POST',
            body: JSON.stringify({
                ...userData
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
  
    const onSubmit = (data) => {
        sendRequest(data);
        reset(); 
    };
  
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        watchPhone
    };
  };