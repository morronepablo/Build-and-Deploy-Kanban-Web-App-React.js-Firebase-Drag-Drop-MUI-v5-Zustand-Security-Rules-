/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  Stack,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ModalHeader from "../../components/layout/ModalHeader";
import { colors } from "./../../theme";
import useApp from "../../hooks/useApp";

const CreateBoardModal = ({ closeModal }) => {
  const { createBoard } = useApp();
  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      await createBoard({ name, color });
      closeModal();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Dialog open onClose={closeModal} fullWidth maxWidth={"xs"}>
      <Stack p={2}>
        <ModalHeader onClose={closeModal} title={"Create Board"} />
        <Stack my={5} spacing={3}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Board name"
          />
          <Stack spacing={1.5} direction={"row"}>
            <Typography>Color: </Typography>

            {colors.map((clr, idx) => (
              <Box
                sx={{
                  cursor: "pointer",
                  border: color === idx ? "3px solid #383838" : "none",
                  outline: `2px solid ${clr}`,
                }}
                onClick={() => setColor(idx)}
                key={clr}
                height={25}
                width={25}
                backgroundColor={clr}
                borderRadius={"50%"}
              />
            ))}
          </Stack>
        </Stack>
        <Button
          disabled={loading}
          onClick={handleCreate}
          variant="contained"
          size="large"
        >
          Create
        </Button>
      </Stack>
    </Dialog>
  );
};

export default CreateBoardModal;
