import React from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, IconButton, SxProps, Typography } from "@mui/material";
import OrderWrapper from "./OrderWrapper";
import { FormikProvider, FieldArray, Field } from "formik";
import { TextField } from "./common/TextField";
import { FormField } from "./FormField";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Package from "@/FetchActions/Package";
import toast from "react-hot-toast";
import NextButton from "./common/NextButton";

interface PropsType {
  setBackStep: React.Dispatch<React.SetStateAction<boolean>>;
}

const packageSchema = Yup.object().shape({
  length: Yup.number().required("Largo es requerido"),
  width: Yup.number().required("Ancho es requerido"),
  height: Yup.number().required("Alto es requerido"),
  weight: Yup.number().required("Peso es requerido"),
  content: Yup.string().required("Contenido es requerido"),
});

const validationSchema = Yup.object().shape({
  packages: Yup.array()
    .of(packageSchema)
    .min(1, "Debe añadir al menos un paquete"),
});

interface FormValues {
  newPackage: {
    length: string;
    width: string;
    height: string;
    weight: string;
    content: string;
  };
  packages: {
    length: string;
    width: string;
    height: string;
    weight: string;
    content: string;
  }[];
}

const initialValues: FormValues = {
  newPackage: {
    length: "",
    width: "",
    height: "",
    weight: "",
    content: "",
  },
  packages: [
    {
      length: "22",
      width: "22",
      height: "22",
      weight: "22",
      content:
        "este es un ejemplo de prueba de como deberias estar definido tu paquete",
    },
  ],
};

const PackageDetails = ({ setBackStep }: PropsType) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { packages } = values;
      try {
        const response = await Package.createPackage(packages);
        if (response.data.success) {
          toast.success("Se ha enviado su paquete de manera exitosa");
        }
      } catch (error) {
        console.error(error);
        toast.error("Hubo un error al enviar su paquete");
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  const handleAddPackage = () => {
    const newPackage = formik.values.newPackage;

    formik.setFieldValue("packages", [...formik.values.packages, newPackage]);

    formik.setFieldValue("newPackage", {
      length: "",
      width: "",
      height: "",
      weight: "",
      content: "",
    });
  };

  console.log(errors.packages);

  return (
    <OrderWrapper>
      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
          <Typography>Agrega tus bultos</Typography>

          <Box sx={PackageInputs}>
            <Box display={"flex"}>
              <FormField label="Largo" id={"largo"}>
                <TextField
                  sx={{
                    backgroundColor: "white",
                    "& .MuiFormHelperText-root": {
                      backgroundColor: "#E5E8EE",
                      margin: 0,
                      textAlign: "center",
                      paddingTop: "4px",
                    },
                  }}
                  name="newPackage.length"
                  label="Largo"
                  value={formik.values.newPackage.length}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.newPackage?.length &&
                    Boolean(formik.errors.newPackage?.length)
                  }
                  helperText={
                    formik.touched.newPackage?.length &&
                    formik.errors.newPackage?.length
                  }
                  fullWidth
                />
              </FormField>

              <FormField label="Alto" id="alto">
                <TextField
                  sx={{
                    backgroundColor: "white",
                    "& .MuiFormHelperText-root": {
                      backgroundColor: "#E5E8EE",
                      margin: 0,
                      textAlign: "center",
                      paddingTop: "4px",
                    },
                  }}
                  name="newPackage.height"
                  label="Alto"
                  value={formik.values.newPackage.height}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.newPackage?.height &&
                    Boolean(formik.errors.newPackage?.height)
                  }
                  helperText={
                    formik.touched.newPackage?.height &&
                    formik.errors.newPackage?.height
                  }
                  fullWidth
                />
              </FormField>

              <FormField label="Ancho" id="ancho">
                <TextField
                  sx={{
                    backgroundColor: "white",
                    "& .MuiFormHelperText-root": {
                      backgroundColor: "#E5E8EE",
                      margin: 0,
                      textAlign: "center",
                      paddingTop: "4px",
                    },
                  }}
                  name="newPackage.width"
                  label="Ancho"
                  value={formik.values.newPackage.width}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.newPackage?.width &&
                    Boolean(formik.errors.newPackage?.width)
                  }
                  helperText={
                    formik.touched.newPackage?.width &&
                    formik.errors.newPackage?.width
                  }
                  fullWidth
                />
              </FormField>
            </Box>

            <FormField label="Peso en libras " id="peso">
              <TextField
                sx={{
                  backgroundColor: "white",
                  "& .MuiFormHelperText-root": {
                    backgroundColor: "#E5E8EE",
                    margin: 0,
                    textAlign: "center",
                    paddingTop: "4px",
                  },
                }}
                name="newPackage.weight"
                label="Peso"
                value={formik.values.newPackage.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.newPackage?.weight &&
                  Boolean(formik.errors.newPackage?.weight)
                }
                helperText={
                  formik.touched.newPackage?.weight &&
                  formik.errors.newPackage?.weight
                }
                fullWidth
              />
            </FormField>
            <Box>
              <FormField label="Contenido" id="contenido">
                <TextField
                  sx={{
                    backgroundColor: "white",
                    "& .MuiFormHelperText-root": {
                      backgroundColor: "#E5E8EE",
                      margin: 0,
                      textAlign: "center",
                      paddingTop: "4px",
                    },
                  }}
                  name="newPackage.content"
                  label="Contenido"
                  value={formik.values.newPackage.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.newPackage?.content &&
                    Boolean(formik.errors.newPackage?.content)
                  }
                  helperText={
                    formik.touched.newPackage?.content &&
                    formik.errors.newPackage?.content
                  }
                  fullWidth
                />
              </FormField>

              <Button sx={AddPackContainer} onClick={handleAddPackage}>
                <Typography>Agregar</Typography>
                <AddIcon />
              </Button>
            </Box>
            {typeof errors.packages === "string" && (
              <Typography>{errors.packages}</Typography>
            )}
          </Box>

          <Typography> Tus bultos</Typography>

          <FieldArray name="packages">
            {({ remove }) => (
              <Box display={"grid"} gap={2}>
                {values.packages.map((pkg, index) => (
                  <Box key={index} sx={PackageContainer}>
                    <Box display={"flex"}>
                      <FormField label="Largo" id={"largo"}>
                        <TextField
                          sx={{
                            backgroundColor: "white",
                            "& .MuiFormHelperText-root": {
                              margin: 0,
                              textAlign: "center",
                              paddingTop: "4px",
                            },
                          }}
                          name={`packages[${index}].length`}
                          value={pkg.length}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.packages?.[index]?.length &&
                            Boolean(errors.packages?.[index]?.length)
                          }
                          helperText={
                            touched.packages?.[index]?.length &&
                            errors.packages?.[index]?.length
                          }
                          fullWidth
                        />
                      </FormField>

                      <FormField label="Alto" id="alto">
                        <TextField
                          sx={{
                            backgroundColor: "white",
                            "& .MuiFormHelperText-root": {
                              margin: 0,
                              textAlign: "center",
                              paddingTop: "4px",
                            },
                          }}
                          name={`packages[${index}].height`}
                          value={pkg.height}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.packages?.[index]?.height &&
                            Boolean(errors.packages?.[index])
                          }
                          helperText={
                            touched.packages?.[index]?.height &&
                            errors.packages?.[index] &&
                            "el alto es requerido"
                          }
                          fullWidth
                        />
                      </FormField>

                      <FormField label="Ancho" id="ancho">
                        <TextField
                          name={`packages[${index}].width`}
                          sx={{
                            backgroundColor: "white",
                            "& .MuiFormHelperText-root": {
                              margin: 0,
                              textAlign: "center",
                              paddingTop: "4px",
                            },
                          }}
                          value={pkg.width}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.packages?.[index]?.width &&
                            Boolean(errors.packages?.[index])
                          }
                          helperText={
                            touched.packages?.[index]?.width &&
                            errors.packages?.[index] &&
                            "el ancho es requerido"
                          }
                          fullWidth
                        />
                      </FormField>
                    </Box>

                    <FormField label="Peso en libras " id="peso">
                      <TextField
                        name={`packages[${index}].weight`}
                        sx={{
                          backgroundColor: "white",
                          "& .MuiFormHelperText-root": {
                            margin: 0,
                            textAlign: "center",
                            paddingTop: "4px",
                          },
                        }}
                        value={pkg.weight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.packages?.[index]?.weight &&
                          Boolean(errors.packages?.[index])
                        }
                        helperText={
                          touched.packages?.[index]?.weight &&
                          errors.packages?.[index] &&
                          "el peso es requerido"
                        }
                        fullWidth
                      />
                    </FormField>
                    <FormField label="Contenido" id="contenido">
                      <TextField
                        name={`packages[${index}].content`}
                        sx={{
                          backgroundColor: "white",
                          "& .MuiFormHelperText-root": {
                            margin: 0,
                            textAlign: "center",
                            paddingTop: "4px",
                          },
                        }}
                        value={pkg.content}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.packages?.[index]?.content &&
                          Boolean(errors.packages?.[index])
                        }
                        helperText={
                          touched.packages?.[index]?.content &&
                          errors.packages?.[index] &&
                          "el contenido es requerido"
                        }
                        fullWidth
                      />
                    </FormField>
                    <IconButton
                      onClick={() => remove(index)}
                      sx={{
                        position: "absolute",
                        bottom: "5px",
                        right: "16px",
                      }}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
          </FieldArray>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"20px"}
          >
            <Button onClick={() => setBackStep(true)}>atras</Button>
            <NextButton text="Enviar" />
          </Box>
        </form>
      </FormikProvider>
    </OrderWrapper>
  );
};

export default PackageDetails;

const PackageInputs: SxProps = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 2fr",
  backgroundColor: "#E5E8EE",
  padding: "24px",
  gap: "16px",
  borderRadius: "8px",
};

const PackageContainer: SxProps = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 2fr",
  backgroundColor: "white",
  padding: "24px",
  gap: "16px",
  border: "1px solid green",
  borderRadius: "8px",
  position: "relative",
  minHeight: "160px",
};

const AddPackContainer: SxProps = {
  padding: "24px",
  display: "flex",
  justifyContent: "space-between",
  justifyItems: "end",
  backgroundColor: "#E5E8EE",
  border: "solid black 1px",
  borderRadius: "8px",
  alignItems: "center",
  marginTop: "60px",
  cursor: "pointer",
};
