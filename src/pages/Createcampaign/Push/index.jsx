import { Box } from "@mui/material";
import Head from "../../../components/Head/Head";
import Header from "../../../components/PageHeader/Header";
import { useParams, useSearchParams } from "react-router-dom";
import { ShortCutMenuOption, features } from "../../../Utils/constants";
import CustomBox from "../../../components/Layout/Dashboard/Box";
import FeatureMenu from "../../../components/globals/Navbar/FeatureMenu/FeatureMenu";
import DropDownTest from "../../../components/DropDown/DropDownTest";
import CampaignTabs from "../../../components/campaignstabs";
import Table from "../../../components/ui/table";
import "./style.css";
import data from "../../../data/mock-data-all.json";
import Emptycampaign from "../../../components/ui/campaignempty";

const CreatePush = () => {
  const { slug } = useParams();
  let options = ShortCutMenuOption(slug);
  const [searchParams] = useSearchParams();
  let qparams = searchParams.get("tab");
  let datan;
  if (qparams === "sent") {
    datan = [];
  } else if (qparams === "drafts") {
    datan = [];
  } else {
    datan = data;
  }
  return (
    <>
      <Head title="Push | Create Push" />
      <FeatureMenu menuoptions={features} />
      <CustomBox>
        <Box className="create-campaign-con">
          <Box display="flex" justifyContent="space-between" className="ljjPdH">
            <Header title="Create Campaign" subtitle="New Push Notification" />
            <div>
              <div>
                <DropDownTest
                  options={options}
                  menutype="ShortCutMenuOption"
                  style={{ right: 0 }}
                />
              </div>
            </div>
          </Box>
          <CampaignTabs />
          {datan.length > 0 ? <Table data={datan} /> : <Emptycampaign />}
        </Box>
      </CustomBox>
    </>
  );
};

export default CreatePush;
