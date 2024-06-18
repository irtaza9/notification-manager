import { useParams } from "react-router-dom";
import Head from "../../components/Head/Head";
import Header from "../../components/PageHeader/Header";
import CustomBox from "../../components/Layout/Dashboard/Box";

const NotificationHistory = () => {
  const { id } = useParams();
  return (
    <CustomBox>
      <Head title="Push | Notification History" />
      <Header title="Notification History" subtitle="Reports" />
      {id}
    </CustomBox>
  );
};

export default NotificationHistory;
