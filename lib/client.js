import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';



export const client = sanityClient({
    projectId: 't6uhbx7r',
    dataset: 'production',
    apiVersion: '2022-03-02',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);