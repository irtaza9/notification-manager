import { features } from "../../Utils/constants";
import FeatureNotAvailable from "../../components/FeatureNotAvailable";
import FeatureMenu from "../../components/globals/Navbar/FeatureMenu/FeatureMenu";

const Templates = () => {
  return (
    <>
      <FeatureMenu menuoptions={features} />
      <FeatureNotAvailable />
    </>
  );
};

export default Templates;
