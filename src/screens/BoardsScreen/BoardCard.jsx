/* eslint-disable react/prop-types */
import OpenIcon from "@mui/icons-material/Launch";
import { Stack, Grid, Typography, IconButton, Box } from "@mui/material";
import { colors } from "../../theme";

const BoardCard = ({ name, color, createdAt }) => {
  return (
    <Grid item xs={3}>
      <Stack
        p={2}
        bgcolor={"background.paper"}
        borderLeft={"5px solid"}
        borderColor={colors[color]}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box width={"50%"}>
            <Typography
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
              fontWeight={400}
              variant="h6"
            >
              {name}
            </Typography>
          </Box>

          <IconButton size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">Created at: {createdAt}</Typography>
      </Stack>
    </Grid>
  );
};

export default BoardCard;
