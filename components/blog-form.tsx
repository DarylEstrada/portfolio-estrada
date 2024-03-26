"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronUp, LoaderIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  BlogGalleryImageFilenames,
  BlogSingleImageFilename,
} from "@/atom/global-state";
import SingleUploader from "@/components/single-uploader";
import GalleryUploader from "@/components/gallery-uploader";
import { Toast } from "@/components/ui/toast";

interface IBlog {
  id: number;
  date: string;
  title: string;
  tags: string;
  desc: string;
  thumbnailSrc: unknown;
  gallerySrc: string[];
  featured: boolean;
  externalBlog: boolean;
  externalBlogUrl: string;
}

export default function BlogForm() {
  const router = useRouter();
  const params = useParams();
  const menuRef = useRef<HTMLDivElement>(null);
  const [blog, setBlog] = useState<IBlog[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isExternal, setIsExternal] = useState(false);
  const [externalURLHasErr, setExternalURLHasErr] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("General Post");
  const [formattedDate, setFormattedDate] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [saveBtnTLabel, setSaveBtnTLabel] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFilename, setImageFilename] = useRecoilState(
    BlogSingleImageFilename
  );
  const [filename, setFilename] = useRecoilState<string[]>(
    BlogGalleryImageFilenames
  );
  const [blogData, setBlogData] = useState({
    title: "",
    desc: "",
    thumbnailSrc: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    desc: false,
    thumbnailSrc: false,
  });

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  const options = ["General Post", "Appreciation", "News"];

  const generateRandomNumber = () => {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomSixDigitNumber = generateRandomNumber();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleExternalClick = () => {
    setIsExternal(!isExternal);
  };

  const handleFeaturedClick = () => {
    setIsFeatured(!isFeatured);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
    setExternalURLHasErr(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const blogData = {
      id: randomSixDigitNumber,
      date: formattedDate,
      title: String(e.target.title?.value),
      tags: selectedOption,
      desc: String(e.target.desc?.value),
      thumbnailSrc: imageFilename,
      gallerySrc: filename,
      featured: isFeatured,
      externalBlog: isExternal,
      externalBlogUrl: isExternal ? String(e.target.externalUrl?.value) : "",
    };

    if (!isExternal) {
      if (blogData.title && blogData.desc && isFormSubmitted) {
        setBlog([blogData]);
        const response = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });
        if (response.ok) {
          setSaveBtnTLabel("Saving...");
          setIsLoading(true);
          setTimeout(() => {
            setShowToast(true);
            setToastMessage("Blog Posted Successfully");
          }, 1000);
          setTimeout(() => {
            setSaveBtnTLabel("Redirecting...");
          }, 3000);
          setTimeout(() => {
            onNavigate("/admin/dashboard");
          }, 4000);
        }

        if (!response.ok) {
          setShowToast(true);
          setToastMessage("Blog Post Failed");
        }
      }
    } else {
      if (blogData.externalBlogUrl === "") {
        setExternalURLHasErr(true);
      }
      if (
        blogData.title &&
        blogData.desc &&
        isFormSubmitted &&
        blogData.externalBlogUrl
      ) {
        setBlog([blogData]);
        const response = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });
        if (response.ok) {
          setSaveBtnTLabel("Saving...");
          setIsLoading(true);
          setTimeout(() => {
            setShowToast(true);
            setToastMessage("Blog Posted Successfully");
          }, 1000);
          setTimeout(() => {
            setSaveBtnTLabel("Redirecting...");
          }, 3000);
          setTimeout(() => {
            onNavigate("/admin/dashboard");
          }, 4000);
        }

        if (!response.ok) {
          setShowToast(true);
          setToastMessage("Blog Post Failed");
        }
      }
    }
  };

  const handleSubmitBlogData = () => {
    let newErrors = {
      title: false,
      desc: false,
      thumbnailSrc: false,
    };

    let hasError = false;

    for (const [key, value] of Object.entries(blogData)) {
      if (value.trim() === "") {
        newErrors = { ...newErrors, [key]: true };
        hasError = true;
      }
    }

    setIsFormSubmitted(true);
    setErrors(newErrors);

    if (!hasError) {
      setIsFormSubmitted(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [blog]);

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString("en-US", { month: "long" });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formatted = `${month} ${day}, ${year}`;
    setFormattedDate(formatted);
  }, []);

  return (
    <>
      <p className="text-2xl font-bold text-start mb-[15px]">
        Form w/ Image Uploader
      </p>
      <form onSubmit={handleSubmit}>
        <div className="glass p-[50px] flex flex-col gap-[50px]">
          <div className="flex gap-[20px] text-base">
            <button
              type="submit"
              onClick={handleSubmitBlogData}
              className="glass rounded-[20px] px-[50px] py-[15px] text-center cursor-pointer glow hover:bg-[#7db1f5] hover:text-black"
            >
              <p className={`${isLoading ? "hidden" : "flex"}`}>Save Post</p>

              {isLoading && (
                <div className="flex gap-[10px]">
                  <span>{saveBtnTLabel}</span>
                  <LoaderIcon className="animate-spin h-5 w-5 text-white" />
                </div>
              )}
            </button>
            <div className="flex items-center gap-[10px]">
              <div
                onClick={handleFeaturedClick}
                className={`lg:cursor-pointer w-[20px] h-[20px] rounded-[5px] flex items-center justify-center border border-white ${
                  isFeatured ? "bg-white" : ""
                }`}
              >
                {isFeatured && (
                  <Check width={14} height={14} className="text-[#2E7BE1]" />
                )}
              </div>
              <p>Mark as Featured Post</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-[50px] text-base">
              <div className="text-[#82A0CA] flex">
                <p>
                  Date Posted: <span>{formattedDate}</span>
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#82A0CA]">Title</p>
                <Input
                  autoComplete="off"
                  name="title"
                  onChange={handleInputChange}
                  value={blogData.title}
                  placeholder="Title"
                  className={`glass-no-border glow placeholder:text-[#82A0CA] rounded-full h-[60px] px-5 py-[10px] ${
                    errors.title ? "border border-red-500" : ""
                  }`}
                />
              </div>
              <div ref={menuRef} className="flex flex-col gap-[10px]">
                <p className="text-[#82A0CA]">Tags</p>
                <div
                  className="relative lg:cursor-pointer glass glow h-[60px] w-full flex items-center px-[20px] py-[10px] rounded-full"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex w-full justify-between items-center">
                    <p>{selectedOption}</p>
                    <ChevronUp
                      className={`transform duration-300 transition-transform ml-[10px]  ${
                        isOpen ? "rotate-0" : "rotate-180"
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute p-5 top-[70px] right-0 flex flex-col gap-[10px] bg-black w-full rounded-[20px]">
                      {options.map((option, index) => (
                        <div
                          onClick={() => handleOptionClick(option)}
                          className="flex items-center gap-[10px]"
                          key={index}
                        >
                          <div>{option}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-[10px] text-[#82A0CA]">
                <div
                  onClick={handleExternalClick}
                  className={`lg:cursor-pointer w-[20px] h-[20px] rounded-[5px] border border-[#82A0CA] flex items-center justify-center ${
                    isExternal ? "bg-white" : ""
                  }`}
                >
                  {isExternal && (
                    <Check width={14} height={14} className="text-[#2E7BE1]" />
                  )}
                </div>
                <p>External Blog Post</p>
              </div>

              {isExternal && (
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#82A0CA]">
                    URL (The blog post will redirect to this url)
                  </p>
                  <Input
                    autoComplete="off"
                    name="externalUrl"
                    // value={blogData.externalBlogUrl}
                    onChange={handleInputChange}
                    placeholder="Paste the url you want to embed on this post"
                    className={`glass placeholder:text-[#82A0CA] rounded-full h-[60px] px-5 py-[10px] ${
                      isExternal && externalURLHasErr
                        ? "border border-red-500"
                        : ""
                    }`}
                  />
                </div>
              )}

              <div className="flex flex-col gap-[10px]">
                <p className="text-[#82A0CA]">Content</p>
                <Textarea
                  autoComplete="off"
                  name="desc"
                  value={blogData.desc}
                  onChange={handleInputChange}
                  placeholder="Write your blog post here..."
                  className={`glass-no-border glow placeholder:text-[#82A0CA] rounded-[20px] h-[150px] p-5 py-[10px] ${
                    errors.desc ? "border border-red-500" : ""
                  }`}
                />
              </div>

              <SingleUploader
                isEdit={false}
                src={""}
                title={blogData.title}
                isFormSubmitted={isFormSubmitted}
              />
              <GalleryUploader isEdit={false} src={[""]} />
            </div>
          </div>
        </div>
      </form>

      <Toast
        erroMsg={"Blog Post Failed"}
        message={toastMessage}
        show={showToast}
        setShow={setShowToast}
      />
    </>
  );
}
