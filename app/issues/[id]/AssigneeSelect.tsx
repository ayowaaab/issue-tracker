"use client";
import { issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/app/components";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });
  if (isLoading) return <Skeleton />;
  if (error) return null;

  return (
    <>
    <Toaster  />
 
      <Select.Root
        defaultValue={issue.assignedToUserId || "Unassigned"}
        onValueChange={async (userId) => {
          await axios.patch(`/api/issues/${issue.id}`, {
            assignedToUserId: userId == "Unassigned" ? null : userId,
          })
          .then(()=> toast.success('Issue Assigned Successfully'))
          .catch(()=> toast.error('Issue Could not be Assigned.'));
        }}
      >
        <Select.Trigger placeholder={"Assign..."} />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="Unassigned">Unassigned</Select.Item>
            {users?.map((u) => (
              <Select.Item key={u.id} value={u.id}>
                {u.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default AssigneeSelect;
