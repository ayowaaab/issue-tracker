"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const Filter = () => {
  const statuses: { label: string; value?: Status }[] = [
    { label: "All" },
    { label: "Open", value: "OPEN" },
    { label: "In Progresse", value: "IN_PROGRESS" },
    { label: "closed", value: "CLOSED" },
  ];
  const router = useRouter();
  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status ? `?status=${status}` : "";
        router.push(`/issues${query}`);
      }}
      size={"2"}
      defaultValue="all"
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content position="popper">
        {statuses.map((statue) => (
          <Select.Item key={statue.label} value={statue.value || "all"}>
            {statue.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default Filter;
