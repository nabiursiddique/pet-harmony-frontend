"use client";

import PHInput from "@/src/components/form/PHInput";
import PHSelect from "@/src/components/form/PHSelect";
import PHTextarea from "@/src/components/form/PHTextarea";
import Loading from "@/src/components/UI/Loading";
import { useCreatePost } from "@/src/hooks/post.hook";
import { Button } from "@nextui-org/button";
import React, { ChangeEvent, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
// import "react-quill/dist/quill.snow.css";

// const ReactQuill = dynamic(
//   () => {
//     return import("react-quill");
//   },
//   { ssr: false }
// );

const CreatePost = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const { mutate: handleCreatePost, isPending, isSuccess } = useCreatePost();

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categoryOptions = [
    { key: "tips", label: "Tips" },
    { key: "story", label: "Story" },
  ];

  const premiumOptions = [
    { key: "false", label: "Free" },
    { key: "true", label: "Premium" },
  ];

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFiles([file]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: any) => {
    const formData = new FormData();
    const postData = {
      title: data.title,
      category: data.category,
      isPremium: data.isPremium,
      content: data.content,
    };
    formData.append("data", JSON.stringify(postData));
    if (imageFiles.length > 0) {
      formData.append("image", imageFiles[0]);
    }
    // showing from data in console
    // formData.forEach((value, key) => {
    //   console.log(`${key}:`, value);
    // });

    //* sending data to the backend
    handleCreatePost(formData);

    // resetting the form
    reset();
  };

  return (
    <div>
      {isPending && !isSuccess && <Loading />}
      <div className="mb-3">
        <h1 className="text-3xl font-extrabold text-teal-600">Create Post</h1>
      </div>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input title */}
            <div className="mb-2">
              <label className="text-teal-600 font-bold mb-2">Title</label>
              <PHInput name="title" label="Title" type="text" required />
            </div>
            {/* Category selection */}
            <div className="mb-2">
              <label className="text-teal-600 font-bold mb-2">
                Select Category
              </label>
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
              <label className="text-teal-600 font-bold mb-2">
                Want to make Premium?
              </label>
              <PHSelect
                options={premiumOptions}
                name="isPremium"
                label="Select Premium / Free"
                type="text"
                required
              />
            </div>
            {/* text editor */}
            <div className="mb-2">
              <label className="text-teal-600 font-bold mb-2">
                Your Thoughts
              </label>
              <PHTextarea
                label="Write your Thoughts"
                name="content"
                type="text"
                required
              />
              {/* Getting error when using reactQuill */}
              {/* <ReactQuill
                theme="snow"
                onChange={(value) => setValue("content", value)} // Set content value directly
              /> */}
            </div>
            {/* post image */}
            <div className="min-w-fit flex-1 mb-2">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input
                className="hidden"
                id="image"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </div>
            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-20 h-auto rounded-md"
                />
              </div>
            )}

            <div className="mt-2">
              <Button
                className="my-3 w-full rounded-md bg-teal-600 text-white"
                size="lg"
                type="submit"
              >
                Create Post
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreatePost;
