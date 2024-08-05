import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Heading } from "../styles/Heading.css";
import { StyledSalesChart } from "../styles/SalesChart.css";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const SalesChart = ({ bookings, numDays }) => {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "dd.MM"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.total_price, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extras_price, 0),
    };
  });

  return (
    <StyledSalesChart>
      <Heading as="h2">Zestawienie kwoty całościowej i ekstra</Heading>
      <ResponsiveContainer
        height={300}
        width="100%"
      >
        <AreaChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="red"
            fill="orange"
            strokeWidth={2}
            name="Kwota łącznie"
            unit="zł"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke="red"
            fill="orange"
            strokeWidth={2}
            name="Kwota dodatkowa"
            unit="zł"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
};

export default SalesChart;
