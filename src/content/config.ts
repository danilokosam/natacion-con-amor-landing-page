import { defineCollection, z } from 'astro:content';

const jsonDataCollection = defineCollection({
  type: 'data',
  schema: z.object({
    //Define JSON-file structure
    profileImage: z.string(),
    profileAlt: z.string(),
    profileLink: z.string(),
    profileTitle: z.string(),
    profileName: z.string(),
    email: z.string().email(),
    instagram: z.string().url(),
    youtube: z.string().url(),
    alias: z.string(),
    contactSectionTitle: z.string(),
    contactSectionSubtitle: z.string(),
    contactSectionButtonText: z.string(),
    contactSectionButtonIcon: z.string(),
    instagramIconName: z.string(),
    youtubeIconName: z.string(),
    emailIconName: z.string(),
    hobbies: z.array(z.string()),
    pageTitle: z.string(),
    pageDescription: z.string(),
    classesImage: z.string(),
    pricingPlanOneTitle: z.string(),
    pricingPlanOneSubtitle: z.string(),
    pricingPlanTwoTitle: z.string(),
    pricingPlanTwoSubtitle: z.string(),
    pricingButtonText: z.string(),
    github: z.string().url(),
    githubText: z.string(),
  }),
});

export const collections = {
  staticData: jsonDataCollection,
};
