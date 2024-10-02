"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { SearchIcon } from "../../icons";

const PostPageHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6 mt-3">
      <div className="flex space-x-4 items-center w-full max-w-2xl">
        {/* Search Input */}
        <div className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100 dark:bg-gray-700",
              input: "text-sm",
            }}
            placeholder="Search posts..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none text-lg text-default-400" />
            }
            type="text"
          />
        </div>

        {/* Dropdown Filter */}
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-gray-100 dark:bg-gray-700 text-sm">
              Filter
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Filter Options">
            <DropdownItem key="Tip">Tip</DropdownItem>
            <DropdownItem key="Story">Story</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Action Button */}
        <Button color="primary" size="md" className="text-white">
          Following
        </Button>
      </div>
    </div>
  );
};

export default PostPageHeader;
