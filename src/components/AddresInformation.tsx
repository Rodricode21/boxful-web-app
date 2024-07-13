import React from "react";
import OrderWrapper from "./OrderWrapper";
import { Box, InputAdornment, SxProps } from "@mui/material";
import { FormField } from "./FormField";
import { TextField } from "./common/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RoomIcon from "@mui/icons-material/Room";
import NextButton from "./common/NextButton";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import { DeparmanetosSelect } from "./Deparmentos";

interface PropsType {
  setIsStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = Yup.object().shape({
  direccion: Yup.string().required("Direccion de recoleccion es requerida"),
  fecha: Yup.date().required("la fecha requerida"),
  nombre: Yup.string().required("Nombres son requeridos"),
  apellidos: Yup.string().required("Apellidos son requeridos"),
  email: Yup.string()
    .email("Correo Electronico invalido")
    .required("Correo Electronico es requerido"),
  telefono: Yup.string().required("Telefono es requerido"),
  destinatario: Yup.string().required(
    "Direccion del destinatario es requerida"
  ),
  departamento: Yup.string().required("Departamento es requerido"),
  municipio: Yup.string().required("Municipio es requerido"),
  referencia: Yup.string().required("Punto de referencia es requerido"),
  indicaciones: Yup.string().required("Indicaciones son requeridas"),
});

const AddressInformation = ({ setIsStepComplete }: PropsType) => {
  const initialValues = {
    direccion: "",
    fecha: "",
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    destinatario: "",
    departamento: "",
    municipio: "",
    referencia: "",
    indicaciones: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,

    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
      setIsStepComplete(true);
    },
  });

  const { setFieldValue } = formik;

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <OrderWrapper>
          <Box sx={InputsContainer("3fr 1fr")}>
            <FormField label="Direccion de recoleccion" required id="direccion">
              <TextField
                name="direccion"
                value={formik.values.direccion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.direccion && Boolean(formik.errors.direccion)
                }
                helperText={formik.touched.direccion && formik.errors.direccion}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormField>
            <FormField label="Fecha Programada" required id="fecha">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="fecha"
                  value={formik.values.fecha ? formik.values.fecha : null}
                  onChange={(date) => formik.setFieldValue("fecha", date)}
                  error={formik.touched.fecha && Boolean(formik.errors.fecha)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={
                        formik.touched.fecha && Boolean(formik.errors.fecha)
                      }
                      helperText={formik.touched.fecha && formik.errors.fecha}
                    />
                  )}
                />
              </LocalizationProvider>
            </FormField>
          </Box>
          <Box sx={InputsContainer("1fr 1fr 1fr")}>
            <FormField label="Nombres" required id="nombre">
              <TextField
                name="nombre"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
              />
            </FormField>
            <FormField label="Apellidos" required id="apellidos">
              <TextField
                name="apellidos"
                value={formik.values.apellidos}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.apellidos && Boolean(formik.errors.apellidos)
                }
                helperText={formik.touched.apellidos && formik.errors.apellidos}
              />
            </FormField>
            <FormField label="Correo Electronico" required id="email">
              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormField>
          </Box>
          <Box sx={InputsContainer("1fr 3fr")}>
            <FormField label="Telefono" required id="Telefono">
              <TextField
                name="telefono"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.telefono && Boolean(formik.errors.telefono)
                }
                helperText={formik.touched.telefono && formik.errors.telefono}
              />
            </FormField>
            <FormField
              label="Direccion del destinatario"
              required
              id="destinatario"
            >
              <TextField
                name="destinatario"
                value={formik.values.destinatario}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.destinatario &&
                  Boolean(formik.errors.destinatario)
                }
                helperText={
                  formik.touched.destinatario && formik.errors.destinatario
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormField>
          </Box>
          <Box sx={InputsContainer("1fr 1fr 1fr")}>
            <DeparmanetosSelect
              inputStartAdornment={<RoomIcon color="disabled" />}
              id="departamentos-type"
              value={formik.values.departamento}
              required
              onChange={(selectedValue) => {
                console.log(selectedValue);
                setFieldValue("departamento", selectedValue);
              }}
              error={
                formik.errors.departamento && formik.errors.departamento
                  ? formik.errors.departamento
                  : " "
              }
            />

            <FormField label="Municipio" required id="municipio">
              <TextField
                name="municipio"
                value={formik.values.municipio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.municipio && Boolean(formik.errors.municipio)
                }
                helperText={formik.touched.municipio && formik.errors.municipio}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormField>
            <FormField label="Punto de referencia" required id="referencia">
              <TextField
                name="referencia"
                value={formik.values.referencia}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.referencia && Boolean(formik.errors.referencia)
                }
                helperText={
                  formik.touched.referencia && formik.errors.referencia
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormField>
          </Box>
          <FormField label="Indicaciones" required id="indicaciones">
            <TextField
              name="indicaciones"
              value={formik.values.indicaciones}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.indicaciones &&
                Boolean(formik.errors.indicaciones)
              }
              helperText={
                formik.touched.indicaciones && formik.errors.indicaciones
              }
            />
          </FormField>
          <Box display="flex" justifyContent="flex-end">
            <NextButton text="Siguiente" />
          </Box>
        </OrderWrapper>
      </form>
    </FormikProvider>
  );
};

const InputsContainer = (templateColumns: string): SxProps => {
  return {
    display: "grid",
    gridTemplateColumns: templateColumns,
    gap: "16px",
    marginBottom: "20px",
  };
};

export default AddressInformation;
