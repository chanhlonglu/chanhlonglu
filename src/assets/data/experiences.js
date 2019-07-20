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
        responsibilities: [],
        technologies: []
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
        responsibilities: [],
        technologies: []
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
        responsibilities: [],
        technologies: []
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
        responsibilities: [],
        technologies: []
      }
    ]
  }
];
