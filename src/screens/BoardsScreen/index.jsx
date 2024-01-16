import { Stack, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import AppLoader from "./../../components/layout/AppLoader";
import useApp from "../../hooks/useApp";
import useStore from "../../store";
import BoardCard from "./BoardCard";
import CreateBoardModal from "./CreateBoardModal";
// import NoBoards from "./NoBoards";
import Topbar from "./Topbar";

const BoardsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { fetchBoards } = useApp();
  const { boards, areBoardsFetched } = useStore();

  useEffect(() => {
    if (!areBoardsFetched) fetchBoards(setLoading);
    else setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <AppLoader />;

  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards /> */}

      <Stack mt={5} px={3}>
        <Grid container spacing={4}>
          {boards.map((board) => (
            <BoardCard key={board.id} {...board} />
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default BoardsScreen;
