import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'meii8vlz',
    dataset: 'production',
    apiVersion: '2022-07-31',
    useCdn: true,
    token: 'skLkKWFsNuvIAESTbGGTmLzRK7w0O6cmEshYbR0acJ7Xi0h1wnmqCbvxeYzYFYRJwWxNhhIbTrsgauSlIZnWu2gu2fexvD8wQaXtXrow6DPdmSWGfELvEuM0bnuNSvcOO37zGiSvngdwVWMudLCRqVIofpNP4UGH7Qp9vCHw8CqB8ZG5pmTl'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) =>  { return builder.image(source) }

// export const urlFor = (source) => {
// 	return builder.image(source);
// }