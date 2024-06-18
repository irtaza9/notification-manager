import { Link, useParams, useSearchParams } from "react-router-dom";
import Head from "../../components/Head/Head";
import Header from "../../components/PageHeader/Header";
import { Box } from "@mui/material";
import FeatureMenu from "../../components/globals/Navbar/FeatureMenu/FeatureMenu";
import CustomBox from "../../components/Layout/Dashboard/Box";

const features = [
  { name: "Sent Messages", path: "notifications" },
  { name: "Scheduled", path: "notifications?scheduled=true" },
];

const AllNotifications = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  let params = searchParams.get("scheduled");

  return (
    <>
      <FeatureMenu menuoptions={features} params={params}/>
      <CustomBox>
        <Head title="Push | Notification History" />
        <Box display="flex" flexDirection="column">
          <Header title="Notification History" subtitle="Reports" />
          <Box display="flex" flexDirection="column">
            <Link to={`/project/${slug}/notifications/1das`}>
              Notification-1
            </Link>
            <Link to={`/project/${slug}/notifications/1das`}>
              Notification-1
            </Link>
            <Link to={`/project/${slug}/notifications/1das`}>
              Notification-1
            </Link>
          </Box>
        </Box>
      </CustomBox>
    </>
  );
};

export default AllNotifications;
