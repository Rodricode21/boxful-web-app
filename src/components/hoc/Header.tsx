import InventoryIcon from "@mui/icons-material/Inventory";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box>
      <header>
        <Box display="flex" alignItems="center" width={"100%"}>
          <InventoryIcon color="warning" sx={{ fontSize: "36px" }} />
          <Typography
            style={{ color: theme.palette.warning.main }}
            fontSize="36px"
            marginRight="16px"
          >
            boxful
          </Typography>
        </Box>
      </header>
      <main>{children}</main>
    </Box>
  );
};

export default Header;
