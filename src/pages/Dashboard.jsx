import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import { useRecentBookings } from "../features/dashboard/hooks/useRecentBookings";
import { Heading } from "../styles/Heading.css";
import { Row } from "../styles/Row.css";
import Spinner from "../styles/Spinner.css";

const Dashboard = () => {
  const { bookings, isLoading } = useRecentBookings();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
};

export default Dashboard;
