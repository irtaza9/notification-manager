import { features } from "../../Utils/constants";
import FeatureNotAvailable from "../../components/FeatureNotAvailable";
import FeatureMenu from "../../components/globals/Navbar/FeatureMenu/FeatureMenu";

const Email = () => {
  return (
    <>
      <FeatureMenu menuoptions={features} />
      {/* <CustomBox>Email</CustomBox>; */}
      <FeatureNotAvailable />
    </>
  );
};

export default Email;
