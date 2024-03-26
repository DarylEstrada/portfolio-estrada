const { atom } = require("recoil");

export const JobCount = atom({
  key: "JobCount",
  default: 0,
});

export const PageCount = atom({
  key: "PageCount",
  default: 0,
});

export const SelectedMobilePage = atom({
  key: "SelectedMobilePage",
  default: 0,
});

export const PhoneExtension = atom({
  key: "PhoneExtension",
  default: "",
});

export const Name = atom({
  key: "Name",
  default: "",
});

export const Blog = atom({
  key: "Blog",
  default: [],
});

export const BlogSingleImageFilename = atom({
  key: "BlogSingleImageFilename",
  default: "",
});

export const BlogGalleryImageFilenames = atom({
  key: "BlogGalleryImageFilenames",
  default: [],
});
