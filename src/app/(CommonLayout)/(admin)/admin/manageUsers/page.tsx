"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "@/src/components/icons";
import { IUser } from "@/src/types";
import { useGetAllUser } from "@/src/hooks/user.hook";
import Loading from "@/src/components/UI/Loading";

// User data based on the provided structure
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

// Table columns
const columns = [
  { name: "NAME", uid: "name" },
  { name: "EMAIL", uid: "email" },
  { name: "ROLE", uid: "role" },
  { name: "ACTIONS", uid: "actions" },
];

const ManageUsers = () => {
  //* get users data
  const { data, isLoading, isPending } = useGetAllUser();
  console.log(data?.data);

  const renderCell = React.useCallback(
    (user: IUser, columnKey: keyof IUser | "actions") => {
      if (columnKey === "actions") {
        return (
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
        );
      }

      const cellValue = user[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: user.profileImage }}
              description={user.email}
              name={user.name}
            />
          );
        case "email":
          return <p>{user.email}</p>;
        case "role":
          return <p className="text-bold text-sm capitalize">{user.role}</p>;
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Table aria-label="Manage Users">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof IUser | "actions")}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ManageUsers;
