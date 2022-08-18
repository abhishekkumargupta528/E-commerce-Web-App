import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'dme9k2sm',
    dataset: 'production',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
  });
  
  const builder=imageUrlBuilder(client);
  export const urlFor=(source)=>builder.image(source);