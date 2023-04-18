import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import PricingCodeComponent from "./components/pricingComponent";
import TestimonialCarousel from "./components/testimonialCarousel";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      // id: "8VtBq1uAF8x37koERPKh2w",
      // token: "7prlbmGvH364QS3dmQ94jLoCcW3tBOBSI9Dk1MLgNVeOiTgFG9ZL475o2s6kk9m1c2EHfYU6WByNkFAJqJg",
      id: "aLmnRmimxnTz9jYhsdVbG1", // ID of a project you are using
      token:
        "wg1sMNsklxuyTOfSHWSH1U7k4ul5dC40RuWgaVazEaEJklKjCgEclezGMCz4GVpt6Qa83dxDMSMzG4rsR4RQ", // API token for that project
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

PLASMIC.registerComponent(PricingCodeComponent, {
  name: "Pricing Code Component",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});

// PLASMIC.registerComponent(TestimonialCarousel, {
//   name: "Testimonial Carousel",
//   props: {
//     verbose: "boolean",
//     children: "slot",
//   },
// });

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
