"use client";

import PHInput from "@/src/components/form/PHInput";
import PHSelect from "@/src/components/form/PHSelect";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const methods = useForm();
  const { handleSubmit, register, setValue } = methods;

  const categoryOptions = [
    { key: "tips", label: "Tips" },
    { key: "story", label: "Story" },
  ];

  const premiumOptions = [
    { key: "false", label: "Free" },
    { key: "true", label: "Premium" },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-3xl font-extrabold text-teal-600">Create Post</h1>
      </div>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input title */}
            <div className="mb-2">
              <PHInput name="title" label="Title" type="text" required />
            </div>
            {/* Category selection */}
            <div className="mb-2">
              <PHSelect
                options={categoryOptions}
                name="category"
                label="Category"
                type="text"
                required
              />
            </div>
            {/* premium selection */}
            <div className="mb-2">
              <PHSelect
                options={premiumOptions}
                name="isPremium"
                label="Make Premium"
                type="text"
                required
              />
            </div>
            <Button
              className="my-3 w-full rounded-md bg-teal-600 text-white"
              size="lg"
              type="submit"
            >
              Create Post
            </Button>
          </form>
        </FormProvider>
      </div>
      {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
    </div>
  );
};

export default CreatePost;
