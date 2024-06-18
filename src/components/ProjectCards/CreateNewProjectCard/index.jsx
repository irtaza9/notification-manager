import "./style.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import CreateProjectDrawer from "../../CreateProjectSlider";
import { useState } from "react";

export default function CreateNewProject() {
  const [OpenProjectDrawer, setOpenProjectDrawer] = useState(false);
  return (
    <>
      <CreateProjectDrawer
        OpenProjectDrawer={OpenProjectDrawer}
        setOpenProjectDrawer={setOpenProjectDrawer}
      />
      <Box
        width={{ xl: 296, lg: 296, md: 296, sm: "100%", xs: "100%" }}
        className="card-ng-margin"
      >
        <Card
          style={{ flexBasis: "33.33%" }}
          className="__card create__card"
          onClick={() => setOpenProjectDrawer(true)}
        >
          <CardContent className="createcard__body">
            <AddIcon className="add__logo" />
            <span>Add Project</span>
          </CardContent>
          <Divider sx={{ width: "100%" }} />
          <CardActions>
            <Button size="small">
              <AddIcon />
              Explore a demo project
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
