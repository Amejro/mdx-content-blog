// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md*`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    subtitle: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    },
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RN5KEW3C.mjs.map
