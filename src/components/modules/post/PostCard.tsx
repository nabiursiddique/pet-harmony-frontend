import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/react";
import { FaThumbsUp, FaComment, FaShare, FaPaperPlane } from "react-icons/fa";
import { Input } from "@nextui-org/input";

const PostCard = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Card className="max-w-2xl w-full rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <div className="p-4">
          {/* Header: User info */}
          <div className="flex items-start">
            <Avatar
              src="https://i.pravatar.cc/300"
              alt="User Avatar"
              size="lg"
              className="mr-3"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 dark:text-white">
                Jane Smith
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Senior Software Engineer at TechCorp
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                1 hour ago • San Francisco, CA
              </span>
            </div>
          </div>

          {/* Post Content */}
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Excited to share that I’ve started a new position as Senior
              Software Engineer at TechCorp! Looking forward to this new
              adventure and the amazing opportunities ahead. 🚀 #newbeginnings
            </p>
          </div>

          {/* Image (optional) */}
          <div className="mt-4">
            <Image
              alt="Post Image"
              className="object-cover rounded-md"
              src="https://i.ibb.co/D7vdvxQ/laptop-2.webp"
            />
          </div>

          {/* Interaction Buttons */}
          <div className="mt-4">
            <Divider className="mb-4" />
            <div className="flex justify-around items-center space-x-4 text-sm">
              <Button
                variant="flat"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-blue-500 dark:hover:text-blue-400"
                size="sm"
              >
                <FaThumbsUp className="mr-1" /> Like
              </Button>
              <Button
                variant="flat"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-green-500 dark:hover:text-green-400"
                size="sm"
              >
                <FaComment className="mr-1" /> Comment
              </Button>
              <Button
                variant="flat"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-purple-500 dark:hover:text-purple-400"
                size="sm"
              >
                <FaShare className="mr-1" /> Share
              </Button>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-6">
            <Divider />
            <div className="mt-4 flex items-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=5"
                alt="Commenter Avatar"
                size="sm"
                className="mr-3"
              />
              <Input
                aria-label="Comment Input"
                placeholder="Add a comment..."
                classNames={{
                  inputWrapper:
                    "bg-gray-100 dark:bg-gray-700 rounded-full flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
                  input: "p-2 text-sm",
                }}
              />
              <Button
                className="ml-3 flex items-center justify-center rounded-full bg-blue-500 dark:bg-blue-400 text-white p-2 transition duration-200 hover:bg-blue-600 dark:hover:bg-blue-500"
                size="sm"
              >
                <FaPaperPlane />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
