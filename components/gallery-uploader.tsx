"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import {
  BlogGalleryImageFilenames,
  BlogSingleImageFilename,
} from "@/atom/global-state";
import { UploadDropzone } from "@/components/uploader";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { Toast } from "./ui/toast";

interface UploadFileResponse {
  url: string;
  name: string;
  // Add any other properties if necessary
}

interface SingleImageUploaderProps {
  isEdit: boolean;
  src: string[];
}

export default function GalleryUploader({
  isEdit,
  src,
}: SingleImageUploaderProps) {
  // const [selectedImage, setSelectedImage] = useState<string | null>(src);
  const [selectedImages, setSelectedImages] = useState<UploadFileResponse[]>(
    []
  );
  const [isUploadBegin, setIsUploadBegin] = useState(false);
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [selectedImageName, setSelectedImageName] = useState<string | null>();
  const [imageSrc, setImageSrc] = useRecoilState(BlogGalleryImageFilenames);

  const [isImageSelected, setIsImageSelected] = useState(!!src);

  const handleSelectClick = () => {
    if (selectedImages.length >= 5) {
      setIsUploadBegin(false);
      setError(true);
      setErrorMsg("Maximum limit of 5 uploads reached.");
      setShowToast(true);
      setToastMessage("Maximum limit of 5 uploads reached.");
    } else {
      setError(false);
      setIsUploadBegin(false);
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (isEdit) {
      const initialImages: UploadFileResponse[] = src.map((url) => ({
        url,
        name: "",
      }));
      setSelectedImages(initialImages);
    }
  }, [isEdit, src]);

  // Load selectedImages from local storage on component mount
  useEffect(() => {
    const storedImages = localStorage.getItem("selectedImages");
    if (storedImages) {
      setSelectedImages(JSON.parse(storedImages));
    }
  }, []);

  // Update local storage whenever selectedImages change
  useEffect(() => {
    localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
  }, [selectedImages]);

  // Update BlogGalleryImageFilenames whenever selectedImages change
  useEffect(() => {
    const imageUrls = selectedImages.map((image) => image.url);
    setImageSrc(imageUrls);
  }, [selectedImages]);

  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-[#82A0CA]">
        Gallery (You can upload up to 5 images only)
      </p>

      <UploadDropzone
        config={{
          mode: "manual",
        }}
        appearance={{
          label: ` ${isUploadBegin ? "hidden" : ""}`,
          uploadIcon: "hidden",
          button: ` ${isUploadBegin ? "h-0" : ""} ${error ? "hidden" : "flex"}`,
          container: `glass-no-border glow lg:cursor-pointer rounded-[20px] flex items-center justify-center w-full h-[150px] px-5 py-[10px] border ${
            !isImageSelected ? "border-red-500" : "border-dashed border-white"
          }`,
          allowedContent: `${isUploadBegin ? "" : "mt-[10px]"}`,
        }}
        content={{
          button({ ready }) {
            if (ready)
              return (
                <div className={`text-center`}>
                  <p
                    className={`text-[16px] ${
                      isUploadBegin ? "hidden" : "flex"
                    } ${error ? "hidden" : "flex"}`}
                  >
                    Click here to upload selected file
                  </p>
                </div>
              );
            return "Getting ready...";
          },

          label({ ready }) {
            if (ready) {
              return (
                <div
                  onClick={handleSelectClick}
                  className={`text-base text-[#82A0CA]`}
                >
                  Click or Drop Photo (Upload Photo one at a time)
                </div>
              );
            }
          },

          allowedContent({ ready }) {
            if (ready)
              return (
                <>
                  {isUploadBegin && (
                    <div className="flex flex-col gap-[20px]">
                      <div className="flex gap-[10px] items-center justify-center">
                        <p className="text-[18px]">Uploading</p>
                        <LoaderIcon
                          className={`${
                            isUploadComplete ? "animate-spin" : ""
                          } h-5 w-5 text-white`}
                        />
                      </div>
                      <p className="text-xs">{selectedImageName}</p>
                    </div>
                  )}
                  {error && (
                    <span className="text-xs text-red-400">{errorMsg}</span>
                  )}
                </>
              );
          },
        }}
        endpoint="imageUploader"
        onUploadBegin={(res) => {
          if (res) {
            setSelectedImageName(res);
            setIsUploadBegin(true);
            setIsImageSelected(true);
            setIsUploadComplete(true);
          }
        }}
        onUploadProgress={(res) => {
          if (res) {
            setIsUploadComplete(true);
          }
        }}
        onClientUploadComplete={(res) => {
          if (res) {
            const newImage = res[0];
            // if (selectedImages.length < 5) {
            // Check if maximum limit of 5 uploads is not reached
            setSelectedImages((prevImages) => [...prevImages, newImage]); // Append new image to existing images
            // setSelectedImage(newImage.url); // Set selected image
            setSelectedImageName(newImage.name); // Set selected image name
            setIsUploadBegin(false);
            setIsUploadComplete(false);
            setShowToast(true);
            setToastMessage("Upload Successfully");
            // } else {
            //   // Display an error message indicating that the maximum limit is reached
            //   setIsUploadBegin(false);
            //   setError(true);
            //   setErrorMsg("Maximum limit of 5 uploads reached.");
            //   setShowToast(true);
            //   setToastMessage("Maximum limit of 5 uploads reached.");
            // }
          }
        }}
        onUploadError={(error: Error) => {
          if (error) {
            setError(true);
            setErrorMsg(error.message + " " + "select one file only.");
            setShowToast(true);
            setToastMessage(error.message + " " + "select one file only.");
          }
        }}
      />

      {selectedImages.length > 0 && (
        <div className="mt-5">
          <div className="flex flex-wrap justify-center gap-2">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative w-[296px] h-[296px]">
                <Image
                  className="object-cover w-full h-full"
                  src={image.url}
                  alt={""}
                  width={296}
                  height={296}
                />
                <Trash2Icon
                  onClick={() => removeImage(index)}
                  className="w-[30px] h-[30px] absolute right-[10px] bottom-[10px] lg:cursor-pointer text-red-500"
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Toast
        erroMsg={errorMsg}
        message={toastMessage}
        show={showToast}
        setShow={setShowToast}
      />
    </div>
  );
}
