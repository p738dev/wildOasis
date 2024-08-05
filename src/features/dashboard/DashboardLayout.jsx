import React from "react";
import { StyledDashboardLayout } from "../../styles/DashboardLayout.css";
import { useRecentBookings } from "./hooks/useRecentBookings";
import { useRecentStays } from "./hooks/useRecentStays";
import Spinner from "../../styles/Spinner.css";
import Stats from "../../components/Stats";
import SalesChart from "../../components/SalesChart";

const DashboardLayout = () => {
  const { bookings, isLoading: isLoadingStay } = useRecentBookings();
  const { isLoading: isLoadingBook, numDays } = useRecentStays();

  if (isLoadingBook || isLoadingStay) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} />
      <SalesChart
        bookings={bookings}
        numDays={numDays}
      />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
