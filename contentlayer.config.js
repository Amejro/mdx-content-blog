import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md*`,
  contentType:'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    subtitle: {
        type: 'string',
        description: 'The subtitle of the post',
        required: true,
      },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    
  },
  computedFields: {
    slug:{
      type:'string',
      resolve:(doc)=>doc._raw.flattenedPath
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    image: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`+".jpg",
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})