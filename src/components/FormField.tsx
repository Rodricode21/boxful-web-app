import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormField = ({
  id,
  label,
  children,
  required,
}: FormFieldProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={1.5} width="100%">
      <Box display="flex" gap="5px">
        <Typography
          component="label"
          htmlFor={id}
          sx={{ fontWeight: "bold", color: "#7682A0" }}
        >
          {label}
        </Typography>
        {required ? (
          <Box component="span" color="error.main">
            *
          </Box>
        ) : null}
      </Box>
      {children}
    </Box>
  );
};
