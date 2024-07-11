"use client"
import { Card } from "@radix-ui/themes";
import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart: React.FC<Props> = ({ closed, inProgress, open }) => {
  const data = [
    { label: "Open Issue", value: open },
    { label: "Closed", value: inProgress },
    { label: "Close Issue", value: closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={"60"} style={{fill:'#0c7965'}} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
