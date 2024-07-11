"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const statuses: { label: string; value?: Status }[] = [
    { label: "All" },
    { label: "Open", value: "OPEN" },
    { label: "In Progresse", value: "IN_PROGRESS" },
    { label: "closed", value: "CLOSED" },
  ];

  const router = useRouter();
  const search = useSearchParams();
  const sorted = useSearchParams().get("sortedBy");
  return (
    <Select.Root
      defaultValue={search.get('status') || ''}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (sorted) params.append("sortedBy", sorted);
        const query = params.size ? "?" + params : "";
        router.push(`/issues${query}`);
      }}
      size={"2"}
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
