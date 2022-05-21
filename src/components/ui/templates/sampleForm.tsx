import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import {
  Button,
  Input,
  Label
} from '../atoms'
import Heading from "../atoms/heading/heading";

type FormData = {
  name: string,
  age: number
}

const schemaValidation = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().integer().positive().required(),
}).required()

const SampleForm: React.FC = () => {

  const { 
    register, 
    setValue, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
    mode: "onChange"
  });

  const onSubmit = handleSubmit(data => console.log(data));
  
  return (
    <div>
      <Heading headingLevel="h1">Sample Form</Heading>
      <form onSubmit={onSubmit}>
        <Label htmlFor="name">Nome:</Label>
        <Input {...register("name")}/>
        <Label htmlFor="age">Idade:</Label>
        <Input {...register("age")} type="number"/>
        <Button type="submit" disabled={!isValid}>Enviar</Button>
      </form>
    </div>
    
  )
}

export default SampleForm