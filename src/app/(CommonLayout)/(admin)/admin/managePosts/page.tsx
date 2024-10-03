"use client";

import { DeleteIcon, EditIcon, EyeIcon } from "@/src/components/icons";
import { Tooltip } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

const users = [
  {
    _id: "66fbc07ebbad01bb546e6fb6",
    name: "Nabiur Siddique",
    email: "nabiursiddique01@gmail.com",
    role: "admin",
    profileImage:
      "https://res.cloudinary.com/dsjcyymsd/image/upload/v1727774843/tn6ivdhukv12urq7il6t.jpg",
    createdAt: "2024-10-01T09:27:26.802Z",
    updatedAt: "2024-10-03T04:41:08.460Z",
  },
  {
    _id: "66fcf79f227e05f5e3506fda",
    name: "Zisan Islam",
    email: "zisan@gmail.com",
    role: "user",
    profileImage:
      "https://res.cloudinary.com/dsjcyymsd/image/upload/v1727854493/p4mpkbjvxr1ikdt6nhyc.jpg",
    createdAt: "2024-10-02T07:34:55.540Z",
    updatedAt: "2024-10-02T07:34:55.540Z",
  },
];

const MangePosts = () => {
  return (
    <div className="relative overflow-x-auto">
      <Table aria-label="Product Table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              {/* actions */}
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Details">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EyeIcon />
                    </span>
                  </Tooltip>
                  <Tooltip content="Edit user">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MangePosts;
