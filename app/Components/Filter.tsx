"use client";
import { Select } from "@radix-ui/themes";

const Filter = () => {
  return (
    <Select.Root
      onValueChange={()=>console.log("")}
      size={"2"}
      defaultValue="all"
    >
      <Select.Trigger />
      <Select.Content position="popper">
        <Select.Item value="all">All</Select.Item>
        <Select.Item value="open">Open</Select.Item>
        <Select.Item value="inProgresse">In Progresse</Select.Item>
        <Select.Item value="closed">Closed</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default Filter;
