import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  isDisabled?: boolean;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  profileImage: string;
}

export interface IPost {
  _id: string;
  title: string;
  category: string;
  isPremium: boolean;
  content: string;
  image: string;
  upVotes: number;
  downVotes: number;
  isPublished: boolean;
  author: string;
  authorId: string;
  authorProfileImage: string;
  authorEmail: string;
  comments: any[];
  voters: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
