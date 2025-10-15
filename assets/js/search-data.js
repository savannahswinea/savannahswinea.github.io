// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-savannah-swinea-university-human-resources-news",
        
          title: 'Savannah Swinea | University Human Resources News <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Savannah Swinea is a postdoctoral researcher in the Department of Applied Ecology.",
        section: "Posts",
        handler: () => {
          
            window.open("https://news.hr.ncsu.edu/2025/08/savannah-swinea/", "_blank");
          
        },
      },{id: "post-restoring-the-natural-world-hp-bagpipe",
        
          title: 'Restoring the Natural World – HP Bagpipe <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Long before the Pacific Coast Highway, the Hollywood sign, or any of the other landmarks that are synonymous with southern California, the area was home to native American tribes who lived in harmony with the land, through the eco-friendly utilization of the Chaparral biome’s natural resources. Centuries later, the area, now known as the Pacific...",
        section: "Posts",
        handler: () => {
          
            window.open("https://hpbagpipe.com/20376/2025-issues-issue/restoring-the-natural-world/", "_blank");
          
        },
      },{id: "post-youarewelcomehere-a-safe-space-for-all-northeastern-university-college-of-science",
        
          title: '#YouAreWelcomeHere - A Safe Space For All - Northeastern University College of Science... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The You Are Welcome Here (YAWH) campaign is an initiative to display acceptance and support for LGBTQIA+ members of the Marine and Environmental Sciences (MES)  community.",
        section: "Posts",
        handler: () => {
          
            window.open("https://cos.northeastern.edu/news/youarewelcomehere-a-safe-space-for-all/", "_blank");
          
        },
      },{id: "post-how-can-counting-amberjack-fish-help-safeguard-coastal-ecosystems",
        
          title: 'How Can Counting Amberjack Fish Help Safeguard Coastal Ecosystems? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Scyphers and scientists will team up with anglers to count greater amberjack, a reef fish prized by anglers and chefs alike.",
        section: "Posts",
        handler: () => {
          
            window.open("https://news.northeastern.edu/2021/09/13/protecting-coastal-ecosystem-health/", "_blank");
          
        },
      },{id: "post-a-solution-for-seagrass-unc-research-stories",
        
          title: 'A Solution for Seagrass - UNC Research Stories <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Seagrasses are vital habitats in North Carolina coastal waters, but their numbers have dwindled over the years. A team at the UNC Institute of Marine Sciences is exploring what type of seagrass structure marine life prefer in order to best approach restoring these important aquatic environments.",
        section: "Posts",
        handler: () => {
          
            window.open("https://endeavors.unc.edu/a-solution-for-seagrass/", "_blank");
          
        },
      },{id: "post-savannah-swinea-unc-research-stories",
        
          title: 'Savannah Swinea - UNC Research Stories <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Rising senior Savannah Swinea is an undergraduate researcher within the UNC College of Arts &amp; Sciences majoring in environmental science, with a minor in marine science. Her research focuses on the effects of streambed clogging on water exchange, which she studies in the UNC fluids lab via a racetrack flume.",
        section: "Posts",
        handler: () => {
          
            window.open("https://endeavors.unc.edu/savannah-swinea/", "_blank");
          
        },
      },{id: "post-go-with-the-flow-the-university-of-north-carolina-at-chapel-hill",
        
          title: 'Go with the flow - The University of North Carolina at Chapel Hill... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Streambeds act as natural water filters by trapping particles and pollutants. To better understand the dynamics of these small yet complex systems, a Carolina hydrologist is creating (and clogging) her own stream.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.unc.edu/discover/go-with-the-flow/", "_blank");
          
        },
      },{id: "post-idea-2-0-students-stand-out-at-undergraduate-pipeline-research-symposium-unc-institute-for-the-environment",
        
          title: 'IDEA 2.0 students stand out at Undergraduate Pipeline Research Symposium - UNC Institute... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "By Rachel Greene On July 28, 2017 hundreds of people filed into the Sonja Hayes Stone Center at UNC-Chapel Hill for the annual Undergraduate Pipeline Research Symposium. Nearly 150 undergraduates from UNC and universities around the country presented posters at … Read more",
        section: "Posts",
        handler: () => {
          
            window.open("https://ie.unc.edu/news/idea-2-0-students-stand-out-at-undergraduate-pipeline-research-symposium/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-first-dissertation-chapter-published-linked-here",
          title: 'First dissertation chapter published! Linked here.',
          description: "",
          section: "News",},{id: "news-graduation-my-phd-is-in-marine-and-environmental-sciences-with-a-concentration-in-sustainability-sciences",
          title: 'Graduation! My PhD is in Marine and Environmental Sciences with a concentration in...',
          description: "",
          section: "News",},{id: "news-first-day-of-my-postdoc-at-nc-state-wolf",
          title: 'First day of my postdoc at NC State :wolf:',
          description: "",
          section: "News",},{id: "projects-shifting-habitats-and-ecosystem-services",
          title: 'Shifting habitats and ecosystem services',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-subsistence-fishing-patterns-near-food-deserts",
          title: 'Subsistence fishing patterns near food deserts',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-fish-and-fisheries-resilience-to-disturbances",
          title: 'Fish and fisheries resilience to disturbances',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fishdisturbance/";
            },},{id: "projects-social-dynamics-of-landscape-change",
          title: 'Social dynamics of landscape change',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/residentsmangroves/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%73%77%69%6E%65%61@%6E%63%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=f3GTzVIAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
