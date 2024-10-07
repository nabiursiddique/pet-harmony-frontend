"use client";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  FaComment,
  FaShare,
  FaPaperPlane,
  FaAngleDoubleDown,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { IPost } from "@/src/types";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/react";
import { formatDate } from "./FormatDate";
import { useUser } from "@/src/context/user.provider";
import { upvotePost } from "@/src/services/PostService";
import { toast } from "sonner";

const PostCard = ({ post }: { post: IPost }) => {
  // getting the current user
  const { user } = useUser();
  // handle up vote post
  const handleUpVotePost = async (postId: string) => {
    const alreadyUpvoted = post?.voters?.some(
      (voter: { userId: string | undefined; voteType: string }) =>
        voter.userId === user?._id && voter.voteType === "up"
    );

    if (alreadyUpvoted) {
      toast.error("You have already upvoted this post.");
      return;
    }

    try {
      await upvotePost(postId);
      toast.success("post up voted successfully");
    } catch (err) {
      toast.error("Could not upvote post");
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <Card className="max-w-2xl w-full rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <div className="p-4">
          {/* Header: User info */}
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <Avatar
                src={post.authorProfileImage}
                alt="User Avatar"
                size="lg"
                className="mr-3"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 dark:text-white">
                  {post?.author}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post?.authorEmail}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {formatDate(post.createdAt)}
                </span>
              </div>
            </div>

            {/* Premium Chip */}
            {post.isPremium ? (
              <Chip
                color="warning"
                variant="flat"
                className="text-xs font-semibold"
              >
                Premium
              </Chip>
            ) : (
              <Chip
                color="success"
                variant="flat"
                className="text-xs font-semibold"
              >
                Free
              </Chip>
            )}
          </div>

          {/* Post Content */}
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
          </div>

          {/* Image (optional) */}
          <div className="mt-4">
            <Image
              alt="Post Image"
              className="object-cover rounded-md"
              src={post.image}
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
                onClick={() => handleUpVotePost(post._id)}
              >
                <FaAngleDoubleUp /> UpVote
                <span>{post.upVotes}</span>
              </Button>
              <Button
                variant="flat"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-blue-500 dark:hover:text-blue-400"
                size="sm"
              >
                <FaAngleDoubleDown /> DownVote
                <span>{post.downVotes}</span>
              </Button>
              <Button
                variant="flat"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-green-500 dark:hover:text-green-400"
                size="sm"
              >
                <FaComment className="mr-1" /> Comment
                <span>{post?.comments.length}</span>
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
