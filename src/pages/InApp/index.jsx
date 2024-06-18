import { features } from "../../Utils/constants";
import FeatureNotAvailable from "../../components/FeatureNotAvailable";
import FeatureMenu from "../../components/globals/Navbar/FeatureMenu/FeatureMenu";

const InAPP = () => {
  return (
    <>
      <FeatureMenu menuoptions={features} />
      <FeatureNotAvailable />
    </>
  );
};

export default InAPP;
