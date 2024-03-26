"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { BlogSingleImageFilename } from "@/atom/global-state";
import { UploadDropzone } from "@/components/uploader";
import { LoaderIcon } from "lucide-react";
import { Toast } from "./ui/toast";

interface SingleImageUploaderProps {
  isEdit: boolean;
  src: string;
  title: string;
  isFormSubmitted: boolean;
}

export default function SingleUploader({
  isEdit,
  src,
  title,
  isFormSubmitted,
}: SingleImageUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(src);
  const [isUploadBegin, setIsUploadBegin] = useState(false);
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedImageName, setSelectedImageName] = useState<string | null>(
    src
  );
  const [imageSrc, setImageSrc] = useRecoilState(BlogSingleImageFilename);

  const [isImageSelected, setIsImageSelected] = useState(!!src);

  const handleSelectClick = () => {
    setError(false);
    setIsUploadBegin(false);
  };

  useEffect(() => {
    if (isEdit) {
      setSelectedImage(src);
      setImageSrc(src);
    }
  }, []);

  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-[#82A0CA]">Thumbnail Photo (Only 1 photo)</p>

      <UploadDropzone
        appearance={{
          label: `${isUploadBegin ? "hidden" : ""}`,
          uploadIcon: "hidden",
          button: `${isUploadBegin ? "h-full" : ""}`,
          container: `glass-no-border glow lg:cursor-pointer rounded-[20px] flex items-center justify-center w-full h-[150px] px-5 py-[10px] border ${
            !isImageSelected && isFormSubmitted
              ? "border-red-500"
              : "border-dashed border-white"
          }`,
          allowedContent: "hidden",
        }}
        content={{
          button({ ready }) {
            if (ready)
              return (
                <div className="text-center ">
                  <p
                    className={`text-[16px]  ${
                      isUploadBegin ? "hidden" : "flex"
                    } ${error ? "hidden" : "flex"}`}
                  >
                    Click here to upload selected file
                  </p>
                  {error && (
                    <span className="text-xs text-red-400">
                      {errorMsg} select another file.
                    </span>
                  )}

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
                  Click or Drop Photo
                </div>
              );
            }
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
            setSelectedImage(res[0].url);
            setSelectedImageName(res[0].name);
            setIsUploadBegin(false);
            setIsUploadComplete(false);
            setShowToast(true);
            setToastMessage("Upload Successfully");
            setImageSrc(res[0].url);
          }
        }}
        onUploadError={(error: Error) => {
          if (error) {
            setError(true);
            setErrorMsg(error.message);
            setShowToast(true);
            setToastMessage(error.message);
          }
        }}
      />
      {selectedImage && (
        <>
          {/* <div className="relative flex items-center justify-center w-full h-[400px] overflow-hidden">
            <Image
              className="object-cover w-full h-full rounded-[30px] brightness-50"
              src={selectedImage}
              alt={""}
              width={1520}
              height={400}
            />
            <p className="font-geologica text-shadow-sm absolute text-[36px] font-bold  p-[40px]">
              {title}
            </p>
          </div> */}
          <div className="relative flex justify-center text-center items-center w-full h-[400px] overflow-hidden">
            <Image
              className="object-cover w-full h-full rounded-[30px] brightness-50"
              src={selectedImage}
              alt={""}
              width={1520}
              height={400}
            />
            <p className="absolute font-geologica text-[28px] lg:text-[36px] font-bold text-shadow-sm p-[40px]">
              <span style={{ wordWrap: "break-word", lineHeight: "1.1" }}>
                {title}
              </span>
            </p>
          </div>
        </>
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
