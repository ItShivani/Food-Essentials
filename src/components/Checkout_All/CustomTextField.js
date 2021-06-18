import React from 'react'
import { TextField,Grid} from '@material-ui/core'
import {useFormContext,Controller} from 'react-hook-form'

const CustomField = ({name,label,required}) => {
  const { control } = useFormContext();
  const isError = false;

  return (
      <>
         <Controller
        render={({ field }) => <TextField {...field} label={label} required />}
        control={control}
        fullWidth
        name={name}
      />

        </>
 );
 }

export default CustomField;