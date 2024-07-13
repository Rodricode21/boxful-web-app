import { SingleSelectField } from "./common/SingleFieldSelect";

interface deparmanetosOption {
  label: string;
  value: string;
}

export const deparmanetosOptions: Record<
  string,
  { label: string; value: string }
> = {
  ahuachapan: {
    label: "Ahuachapán",
    value: "ahuachapan",
  },
  cabanas: {
    label: "Cabañas",
    value: "cabanas",
  },
  chalatenango: {
    label: "Chalatenango",
    value: "chalatenango",
  },
  cuscatlan: {
    label: "Cuscatlán",
    value: "cuscatlan",
  },
  "la-libertad": {
    label: "La Libertad",
    value: "la-libertad",
  },
  "la-paz": {
    label: "La Paz",
    value: "la-paz",
  },
  "la-union": {
    label: "La Unión",
    value: "la-union",
  },
  morazan: {
    label: "Morazán",
    value: "morazan",
  },
  "san-miguel": {
    label: "San Miguel",
    value: "san-miguel",
  },
  "san-salvador": {
    label: "San Salvador",
    value: "san-salvador",
  },
  "san-vicente": {
    label: "San Vicente",
    value: "san-vicente",
  },
  "santa-ana": {
    label: "Santa Ana",
    value: "santa-ana",
  },
  sonsonate: {
    label: "Sonsonate",
    value: "sonsonate",
  },
  usulutan: {
    label: "Usulután",
    value: "usulutan",
  },
};

export const finddeparmanetosLabel = (deparmanetosId: string) => {
  let deparmanetos: deparmanetosOption | undefined =
    deparmanetosOptions[deparmanetosId];

  if (!deparmanetos) {
    deparmanetos = Object.values(deparmanetosOptions).find(
      (deparmanetos) => deparmanetos.label === deparmanetosId
    );
  }

  if (!deparmanetos) {
    return "";
  }

  return deparmanetos.label;
};

interface deparmanetosSelectProps {
  id: string;
  value: string;
  onChange?: (selecteddeparmanetosId: string) => void;
  required?: boolean;
  inputStartAdornment?: JSX.Element;
  error?: string;
  disabled?: boolean;
}

export const DeparmanetosSelect = ({
  id,
  value,
  onChange,
  required,
  inputStartAdornment,
  error,
  disabled,
}: deparmanetosSelectProps) => {
  return (
    <SingleSelectField
      disabled={disabled}
      error={error}
      inputStartAdornment={inputStartAdornment}
      required={required}
      id={id}
      value={value}
      onChange={onChange}
      label="departamentos"
      placeholder="elige un departamento"
      options={deparmanetosOptions}
    />
  );
};
