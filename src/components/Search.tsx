import { TextField } from '@mui/material'
import  { useState } from 'react'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { type SearchForm } from '../types/Exercises'


interface SearchProps{
    onSearch: (term:string) => void
}

export default function Search({onSearch}:SearchProps) {

    const formik = useFormik<SearchForm>({

        initialValues: {
            search: ""
        },
        validationSchema: Yup.object({
            search: Yup.string().min(2, "en az 2 karakter giriniz")
        }),
        onSubmit: (values) => {

            onSearch(values.search)
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField name='search' size='small' sx={{ backgroundColor: "white" }} label="Ara" variant='filled'
                    value={formik.values.search} onChange={formik.handleChange}
                    error={formik.touched.search && Boolean(formik.errors.search)}
                    helperText={formik.touched.search && formik.errors.search}
                />
            </form>
        </div>
    )
}
