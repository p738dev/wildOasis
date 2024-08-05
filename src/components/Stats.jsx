import { formatCurrency } from "../utils/helpers";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import Stat from "./Stat";

const Stats = ({ bookings }) => {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.total_price, 0);

  return (
    <>
      <Stat
        title="Rezerwacje"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Kwota łącznie"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
    </>
  );
};

export default Stats;
