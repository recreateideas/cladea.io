export interface Stack {
  label: string;
  color: string;
  to: string;
}
export type Stacks = {
  [key: string]: Stack;
};

export const stacks: Stacks = {
  react16: {
    label: "React 16+ (hooks) | Redux",
    color: "neon",
    to: "",
  },
  react15: {
    label: "React 15 (classes) | Redux",
    color: "blue",
    to: "",
  },
  angular1: {
    label: "Angular 1.0",
    color: "yellow",
    to: "",
  },
  aws: {
    label: "AWS",
    color: "orange",
    to: "",
  },
  gcp: {
    label: "Google Cloud Platform",
    color: "orange",
    to: "",
  },
  typescript: {
    label: "Typescript",
    color: "green",
    to: "",
  },
  postgres: {
    label: "Postgres | SQL",
    color: "yellow",
    to: "",
  },
  PHP: {
    label: "PHP",
    color: "brown",
    to: "",
  },
  CICD: {
    label: "CI/CD",
    color: "orange",
    to: "",
  },
  cSharp: {
    label: "C#",
    color: "red",
    to: "",
  },
  scrum: {
    label: "Scrum",
    color: "blue",
    to: "",
  },
  "people-management": {
    label: "People Management",
    color: "purple",
    to: "",
  },
  "tcl-tk": {
    label: "Tcl / Tk",
    color: "purple",
    to: "",
  },
  "testing-automation": {
    label: "Testing Automation",
    color: "green",
    to: "",
  },
};

export const roles = [
  {
    start: "May 2022",
    end: "Present",
    shortPosition: "Senior Engineer | Lead",
    position: "Senior Full Stack Engineer | Lead",
    companyName: "Beem | Eftpos | AP+",
    details: {
      keyPoints: [
        "Architect and implement solutions using AWS SAM framework and a wide array of AWS services",
        "Provide mentoring and support to junior developers",
        "Ensure best practices are followed and implemented at every step of the development lifecycle",
      ],
      stack: [
        "aws",
        "typescript",
        "gcp",
        "CICD",
        "cSharp",
        "people-management",
      ],
    },

    logo: "beemLogo",
    location: "Sydney, Australia",
    promotion: true,
  },
  {
    start: "Nov 2021",
    end: "May 2022",
    position: "Senior Full Stack Engineer",
    companyName: "Beem | Eftpos | AP+",
    details: {
      keyPoints: [
        "Implement efficient payment flows involving AWS StepFunctions state machines",
        "Integrate and liaise with cutting edge 3rd party providers to provide secure QR payments",
        "Design and implement OAuth0, Oauth2, OIDC solutions",
        "Architect and implement solutions using AWS SAM framework and a wide array of AWS services",
        "App Prototyping utilising React | Redux, AWS Web Sockets, queues, Lambdas, DynamoDb single table architecture",
      ],
      stack: [
        "react16",
        "aws",
        "gcp",
        "cSharp",
        "postgres",
        "typescript",
        "CICD",
      ],
    },
    location: "Sydney, Australia",
    logo: "beemLogo",
  },
  {
    start: "Jul 2021",
    end: "Nov 2021",
    position: "Senior Full Stack Engineer",
    companyName: "Ooh! Media",
    details: {
      keyPoints: [
        "Work with UX designers to implement internal admin platform",
        "Design and implement backend invoicing systems via event driven architecture.",
        "Serverless implementation using Serverless frameworks",
        "Handle heavy load of production support",
      ],
      stack: ["react16", "angular1", "aws", "postgres", "typescript", "CICD"],
    },
    location: "Sydney, Australia",
    logo: "oohMediaLogo",
  },
  {
    start: "Jun 2020",
    end: "Jul 2021",
    position: "Senior Full Stack Engineer | Lead",
    companyName: "Enboarder",
    details: {
      keyPoints: [
        "Lead a team of 6 to deliver highly performant user interfaces and APIs",
        "Liase with DevOps team and overseas engineering team to ensure company targets are consistently and efficiently met",
      ],
      stack: [
        "react16",
        "angular1",
        "aws",
        "typescript",
        "scrum",
        "people-management",
        "CICD",
      ],
    },
    location: "Sydney, Australia",
    logo: "enboarderLogo",
    promotion: true,
  },
  {
    start: "Nov 2019",
    end: "Jun 2020",
    position: "Full Stack Engineer",
    companyName: "Enboarder",
    location: "Sydney, Australia",
    details: {
      keyPoints: [
        "Architect and implement from the ground up React | Redux platform",
        "Orchestrate the integration with legacy Angular 1.0 app.",
        "Maintain and developed Typescript RESTful APIs with microservices architecture.",
      ],
      stack: ["react16", "angular1", "aws", "typescript"],
    },
    logo: "enboarderLogo",
  },
  {
    start: "Jul 2021",
    end: "Nov 2019",
    position: "Full Stack Engineer",
    companyName: "Cloud.IQ",
    location: "Sydney, Australia",
    details: {
      keyPoints: [
        "Develop responsive public facing React | Redux CMS platform",
        "Maintain and developed Typescript RESTful APIs with microservices architecture.",
        "Handle heavy load of production support",
      ],
      stack: ["react16", "gcp", "postgres", "typescript"],
    },
    logo: "cloudiqLogo",
  },
  {
    start: "Mar 2015",
    end: "Oct 2017",
    position: "Full Stack Developer",
    companyName: "Vivid Social",
    location: "Sydney, Australia",
    details: {
      keyPoints: [
        "Develop responsive public facing React | Redux CMS platform",
        "Maintain and developed Typescript RESTful APIs with microservices architecture.",
        "Handle heavy load of production support",
      ],
      stack: ["react15", "gcp", "postgres", "PHP"],
    },
    logo: "vividsocialLogo",
  },
  {
    start: "Mar 2013",
    end: "Apr 2019",
    position: "Founder",
    companyName: "ReCreateideas.com",
    location: "Sydney, Australia",
    details: {
      keyPoints: [
        "Provide consultancy services to operators in the hospitality industry.",
        "Design and deliver high impact digital and analog marketing assets",
        "Web Design and SEO",
        "Graphic Design",
        "Sign Writing",
      ],
    },
    logo: "recreateLogo",
  },
  {
    start: "May 2012",
    end: "Feb 2015",
    position: "Owner, Venue Manager, Licensee",
    companyName: "Blacksmith Cafes and Bars",
    location: "Mona Vale, Australia",
    details: {
      keyPoints: [
        "Establish and operate 100 seater cafe, restaurant and cocktail bar",
        "Accounting and book keeping",
        "Mentoring and rostering",
      ],
    },
    logo: "blacksmithLogo",
  },
  {
    start: "Apr 2009",
    end: "Oct 2009",
    position: "Grad / Junior Software Developer",
    companyName: "Ericsson IT Solutions & Services SpA",
    location: "Genova, Italy",
    details: {
      keyPoints: [
        "Development of Tcl/Tk Procedures for automated tests on telephone traffic management systems.",
      ],
      stack: ["tcl-tk", "testing-automation"],
    },
    logo: "ericssonLogo",
  },
];
