import { Box, FormHelperText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useState } from "react";
import { FormField } from "../FormField";
import BaseSelect from "./BaseSelect";

interface SingleSelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  defaultValue?: string;
  isLoading?: boolean;
  options: Record<string, { label: string; value: string }>;
  onChange?: (selectedValue: string) => void;
  required?: boolean;
  disabled?: boolean;
  inputStartAdornment?: JSX.Element;
  error?: string;
}

export function SingleSelectField(props: SingleSelectFieldProps) {
  const {
    id,
    value,
    defaultValue,
    options,
    label,
    isLoading,
    placeholder,
    disabled = false,
    required = false,
    inputStartAdornment,
    error,
    onChange,
  } = props;
  const isControlledSelect = typeof value !== "undefined";
  const hasDefaultValue = typeof defaultValue !== "undefined";

  const [internalValue, setInternalValue] = useState(
    hasDefaultValue && options[defaultValue] ? options[defaultValue].label : ""
  );
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectedOptionValue = isControlledSelect ? value : internalValue;

  const onOptionSelectChange = (selectedOptionValue: string) => {
    if (typeof onChange === "function") {
      onChange(selectedOptionValue);
    }

    if (!isControlledSelect) {
      setInternalValue(selectedOptionValue);
    }

    setIsSelectOpen(false);
  };

  return (
    <FormField id={id} label={label} required={required}>
      <Box display="flex" flexDirection="column">
        <BaseSelect
          inputStartAdornment={inputStartAdornment}
          id={id}
          disabled={disabled}
          renderValue={() => options[selectedOptionValue]?.label || ""}
          placeholder={placeholder}
          isOpen={isSelectOpen}
          isLoading={isLoading}
          onOpen={() => setIsSelectOpen(true)}
          loadingText={`Loading ${label}...`}
          hasError={!!error?.trim()}
        >
          <MenuList disablePadding>
            {Object.entries(options).map(([id, { value, label }]) => (
              <MenuItem
                dense
                disableRipple
                value={value}
                onClick={() => onOptionSelectChange(value)}
                key={id}
              >
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </BaseSelect>
        <FormHelperText error={!!error} sx={{ ml: "14px" }}>
          {error || " "}
        </FormHelperText>
      </Box>
    </FormField>
  );
}
