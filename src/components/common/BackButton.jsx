import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = ({ textmsg }) => (
  <Box
    mt={4}
    p={2}
    display="flex"
    alignItems="center"
    style={{ overflowY: "auto" }}
  >
    <ArrowBackIcon sx={{ cursor: "pointer" }} />
    <Typography ml={1}>{textmsg}</Typography>
  </Box>
);

export default BackButton;
