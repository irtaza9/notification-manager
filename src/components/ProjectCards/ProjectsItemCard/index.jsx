import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import "./style.css";
import { Box } from "@mui/material";

export default function ProjectItemCard({ style, project }) {
  return (
    <Box
      width={{ xl: 296, lg: 296, md: 296, sm: "100%", xs: "100%" }}
      className="card-ng-margin"
    >
      <Link
        to={`/project/${project?.txt_service_uuid}/dashboard`}
        className="project__card_link"
      >
        <Card style={style} className="__card project__card">
          <CardContent className="projectcard__body">
            <Typography variant="h5" component="div">
              {project?.txt_service_name}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {project?.txt_service_uuid}
            </Typography>
          </CardContent>
          <CardActions className="project__card__adblogo">
            <AdbIcon />
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
}
