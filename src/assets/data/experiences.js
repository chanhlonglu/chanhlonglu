import intergen from "../images/intergen.png";
import universityOfAuckland from "../images/university-of-auckland.png";
import microsoftNz from "../images/microsoft-nz.png";
import lazywormApp from "../images/lazyworm-application.png";

export const EXPERIENCES = [
  {
    location: "Auckland, New Zealand",
    careers: [
      {
        date: "Aug 2015 - present",
        title: "Software Developer",
        company: {
          name: "Intergen",
          img: intergen,
          website: "https://www.intergen.co.nz",
          about:
            "Intergen provides information technology solutions across New Zealand, Australia and North America based exclusively on Microsoft's tools and technologies: Microsoft Dynamics CRM, Microsoft Dynamics NAV, Microsoft Dynamics AX, Microsoft SharePoint, Microsoft SQL Server, Microsoft Enterprise Mobility Suite, Microsoft Azure, Microsoft Office 365 and Microsoft System Center."
        },
        responsibilities: [
          "Develop, test and deploy. I build it, I own it.",
          "Custom build frontend and backend applications.",
          "Enhance existing applications.",
          "Projects documentation."
        ],
        technologies:
          "JavaScript, C#, TypeScript, MS SQL, HTML, Git, TeamCity, Octopus Deploy, jQuery, Pure.css, handlebar.js, hapi.js, ASP.NET, jasmine.js, jest.js"
      },
      {
        date: "Dec 2014 - Feb 2015",
        title: "IT Services, Applications Engineering Internship",
        company: {
          name: "The University of Auckland",
          img: universityOfAuckland,
          website: "https://www.auckland.ac.nz",
          about: ""
        },
        responsibilities: [
          "Prototyped with Puppet to recursively template Embedded RuBy(ERB) files for the purpose of improving configuration files management.",
          "Setup LAMP stack on RHEL 6 for in-house hosting WordPress website.",
          "Wrote Bash, Groovy and Scriptella ETL scripts for assigned tasks."
        ],
        technologies: "Embedded RuBy(ERB), Bash, Groovy, Scriptella ETL"
      },
      {
        date: "Aug 2014 - Nov 2014",
        title: "Microsoft Student Accelerator (MSA) Programme",
        company: {
          name: "Microsoft (NZ)",
          img: microsoftNz,
          website: "https://www.facebook.com/studentaccelerator",
          about:
            "The Microsoft Student Accelerator provides students with industry relevant training and partners them with a industry leading Microsoft partner over summer."
        },
        responsibilities: [
          "Programmed and developed Windows Apps with C#.",
          "Completed an individual assessment by creating an inventory management system which incorporates Azure Mobile Services and a presentation to MSA staffs.",
          "Completed a group assessment by working together with a team of 3 to implement an idea and deliver a presentation to MSA staffs."
        ],
        technologies: "C#, Windows Apps SDK"
      },
      {
        date: "Dec 2013 - Feb 2014",
        title: "Mobile Application Developer Remote Internship",
        company: {
          name: "Lazyworm Applications Ltd",
          img: lazywormApp,
          website: "http://www.lwasolutions.com",
          about:
            "We craft user-centered solutions that empower mobile workers & streamline business processes. We're also the team behind Metrotube."
        },
        responsibilities: [
          "Researched, planned and documented the game with the team.",
          "Produced low and high fidelity sketches for prototyping.",
          "Programmed the game in C# and Unity Game Engine.",
          "Designed and sketched game assets.",
          "Tested and debugged the game."
        ],
        technologies: "C#, Unity Game Engine"
      }
    ]
  }
];
