import React from "react";
import { useForm } from "react-hook-form";

const TaskHookForm = ({ kisiler, submitFn }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      people: [],
    },
  });

  return <form onSubmit={handleSubmit(submitFn)}></form>;
};
export default TaskHookForm;

/*     <div>Formunuzu react-hook-form kullanarak burada oluşturun. 
    TaskForm dosyasındaki HTML yapısını vs app.css içerisindeki classları kullanabilirsiniz.</div> */
