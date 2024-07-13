import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

interface BaseSelectProps {
  id: string;
  isLoading?: boolean;
  loadingText?: string;
  isOpen?: boolean;
  placeholder?: string;
  hasError?: boolean;
  renderValue: () => React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  inputStartAdornment?: JSX.Element;
  disabled?: boolean;
  children?: JSX.Element;
}

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "10px 12px",
  textTransform: "none",
  textAlign: "left",
  color: "inherit",
  fontWeight: "normal",
  fontSize: "16px",

  "& .MuiButton-endIcon": {
    color: theme.palette.grey[500],
  },

  "&.MuiButton-outlinedPrimary": {
    borderColor: theme.palette.grey[300],

    "&:hover": {
      borderColor: "#4B9AD4",
    },
  },
}));

export const BaseSelect: React.FC<BaseSelectProps> = (props) => {
  const {
    children,
    isLoading,
    loadingText,
    isOpen,
    hasError,
    id,
    placeholder,
    renderValue,
    onClose,
    inputStartAdornment,
    onOpen,
    disabled = false,
  } = props;
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(!!isOpen);

  const openSelectMenu = () => {
    setIsMenuOpen(true);

    if (typeof onOpen === "function") {
      onOpen();
    }
  };

  const closeSelectMenu = () => {
    setIsMenuOpen(false);

    if (typeof onClose === "function") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsMenuOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <>
      <StyledButton
        ref={setButtonRef}
        variant="outlined"
        color={hasError ? "error" : "primary"}
        id={id}
        endIcon={
          isLoading ? null : isMenuOpen ? <ExpandLess /> : <ExpandMore />
        }
        disabled={isLoading ? isLoading : disabled}
        size="large"
        onClick={openSelectMenu}
        startIcon={
          inputStartAdornment !== undefined ? inputStartAdornment : null
        }
      >
        {isLoading ? (
          <Box display="flex" gap={1} flexGrow={1}>
            <Typography color="text.disabled" flexGrow={1}>
              {loadingText || "Loading..."}
            </Typography>
            <CircularProgress size={20} />
          </Box>
        ) : (
          <Box flexGrow={1}>
            {renderValue() || (
              <Typography
                color="text.disabled"
                fontSize="16px"
                lineHeight="1.75"
              >
                {placeholder}
              </Typography>
            )}
          </Box>
        )}
      </StyledButton>
      <Menu
        open={isMenuOpen}
        onClose={closeSelectMenu}
        anchorEl={buttonRef}
        TransitionComponent={Fade}
        slotProps={{
          paper: {
            style: {
              minWidth: buttonRef?.clientWidth,
              maxHeight: "352px",
            },
          },
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default BaseSelect;
