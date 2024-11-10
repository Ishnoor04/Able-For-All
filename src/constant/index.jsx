import {
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  Slider6,
  Slider7,
  Slider8,
  PartComm1,
  PartComm2,
  PartComm3,
  PartComm4,
  PartComm5,
  HouseHold1,
  HouseHold2,
  HouseHold3,
  HouseHold4,
  HouseHold5,
  GroupCenter1,
  GroupCenter2,
  GroupCenter3,
  GroupCenter4,
  GroupCenter5,
  DailyTask1,
  DailyTask2,
  DailyTask3,
  DailyTask4,
  DailyTask5,
  CommNurs1,
  CommNurs2,
  CommNurs3,
  CommNurs4,
  Travel2,
  Travel3,
  Travel4,
  Travel5,
  Travel6,
  Respite1,
  Respite2,
  Respite3,
  Respite4,
  Respite5,
} from "../assets";

export const servicesData = {
  mainServices: [
    {
      id: "daily-living",
      title: "Daily Living Support",
      description:
        "Comprehensive assistance with everyday activities and personal care.",
      icon: "home-outline",
      subservices: ["Personal Care", "Domestic Assistance", "Meal Preparation"],
      link: "/services/daily-living",
    },
    {
      id: "community-participation",
      title: "Community Participation",
      description: "Support to engage in social and community activities.",
      icon: "people-outline",
      subservices: [
        "Social Activities",
        "Community Access",
        "Transport Support",
      ],
      link: "/services/community-participation",
    },
    {
      id: "therapy-services",
      title: "Therapy Services",
      description: "Professional therapeutic support for improved wellbeing.",
      icon: "fitness-outline",
      subservices: ["Physiotherapy", "Occupational Therapy", "Speech Therapy"],
      link: "/services/therapy-services",
    },
    {
      id: "support-coordination",
      title: "Support Coordination",
      description:
        "Assistance in managing and coordinating your NDIS supports.",
      icon: "git-network-outline",
      subservices: ["Plan Management", "Service Coordination", "Goal Setting"],
      link: "/services/support-coordination",
    },
  ],

  detailedServices: {
    "daily-living": {
      title: "Daily Living Support",
      description:
        "Empowering independence through comprehensive daily living assistance",
      icon: "home-outline",
      features: [
        {
          title: "Personal Care",
          description:
            "Assistance with personal hygiene, dressing, and grooming",
          icon: "person-outline",
        },
        {
          title: "Domestic Assistance",
          description: "Help with household tasks, cleaning, and organization",
          icon: "home-outline",
        },
        {
          title: "Meal Preparation",
          description: "Support with meal planning, preparation, and cooking",
          icon: "restaurant-outline",
        },
      ],
      process: [
        {
          step: 1,
          title: "Initial Assessment",
          description: "Understanding your specific needs and preferences",
        },
        {
          step: 2,
          title: "Care Plan Development",
          description: "Creating a personalized support plan",
        },
        {
          step: 3,
          title: "Support Matching",
          description: "Matching you with suitable support workers",
        },
        {
          step: 4,
          title: "Regular Support",
          description: "Providing consistent, reliable assistance",
        },
        {
          step: 5,
          title: "Progress Review",
          description: "Regular reviews and plan adjustments",
        },
      ],
      benefits: [
        "Enhanced independence",
        "Improved quality of life",
        "Personalized support",
        "Flexible scheduling",
        "Skilled support workers",
      ],
    },
    "community-participation": {
      title: "Community Participation",
      description:
        "Supporting meaningful community engagement and social connections",
      icon: "people-outline",
      features: [
        {
          title: "Social Activities",
          description:
            "Support to participate in group activities and social events",
          icon: "calendar-outline",
        },
        {
          title: "Community Access",
          description: "Assistance to access community facilities and services",
          icon: "map-outline",
        },
        {
          title: "Transport Support",
          description: "Help with transportation to and from activities",
          icon: "car-outline",
        },
      ],
      process: [
        {
          step: 1,
          title: "Interest Assessment",
          description: "Exploring your interests and goals",
        },
        {
          step: 2,
          title: "Activity Planning",
          description: "Planning suitable community activities",
        },
        {
          step: 3,
          title: "Support Arrangement",
          description: "Organizing necessary support and transport",
        },
        {
          step: 4,
          title: "Activity Participation",
          description: "Supporting you during activities",
        },
        {
          step: 5,
          title: "Regular Review",
          description: "Evaluating and adjusting support as needed",
        },
      ],
      benefits: [
        "Increased social connections",
        "Community integration",
        "Skill development",
        "Greater independence",
        "Enhanced wellbeing",
      ],
    },
    // Add more detailed services as needed
  },
};

export const serviceCategories = [
  {
    id: "core",
    title: "Core Supports",
    description: "Essential supports for everyday life activities",
    services: ["daily-living", "community-participation"],
  },
  {
    id: "capacity",
    title: "Capacity Building",
    description: "Supports to build your independence and skills",
    services: ["therapy-services", "support-coordination"],
  },
];

export const serviceDetails = [
  {
    id: "daily-living",
    title: "Daily Living Support",
    link: "/services/daily-living",
    description:
      "Empowering independence through comprehensive daily living assistance",
    subServices: [
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "daily-living",
    title: "Daily Living Support",
    link: "/services/daily-living",
    description:
      "Empowering independence through comprehensive daily living assistance",
    subServices: [
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "daily-living",
    title: "Daily Living Support",
    link: "/services/daily-living",
    description:
      "Empowering independence through comprehensive daily living assistance",
    subServices: [
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "daily-living",
    title: "Daily Living Support",
    link: "/services/daily-living",
    description:
      "Empowering independence through comprehensive daily living assistance",
    subServices: [
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "personal-care",
        title: "Personal Care",
        description: "Assistance with personal hygiene, dressing, and grooming",
        img: "https://images.unsplash.com/photo-1517849845516-4c590e423509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

export const serviceSliderData = [
  {
    name: "Participate Community",
    content: `Our Participate Community service is designed to foster a sense of belonging and engagement within local communities. Through various activities, clients can connect with others, build social skills, and enjoy meaningful community participation. We offer personalized support to help clients take part in events, classes, and groups that align with their interests.`,
    link: "/participate-community",
    img: Slider1,
  },
  {
    name: "Household Tasks",
    content: `Our Household Tasks support service assists clients with daily chores and home upkeep, promoting a safe and comfortable living space. From cleaning and organizing to meal preparation, laundry, and more, our team provides the help needed to maintain a well-organized and welcoming home environment.`,
    link: "/household-tasks",
    img: Slider2,
  },
  {
    name: "Group Centre Based Activities",
    content: `Our Group Centre Based Activities offer clients a range of enriching and socially engaging programs. These center-based activities include skill-building workshops, social gatherings, and recreational pursuits, all designed to promote independence, friendship, and personal growth.`,
    link: "/group-centre-based-activities",
    img: Slider3,
  },
  {
    name: "Daily Task Shared Living",
    content: `Daily Task Shared Living is designed for clients who enjoy the independence of shared accommodation with the added support for day-to-day tasks. Our service provides assistance with household chores, meal planning, and personal care in a shared, supportive environment that promotes both autonomy and social interaction.`,
    link: "/daily-task-shared-living",
    img: Slider4,
  },
  // {
  //   name: "Daily Personal Activities",
  //   content: `Our Daily Personal Activities service supports clients in completing essential daily routines with confidence and ease. From personal hygiene and meal planning to managing mobility and social interactions, we provide comprehensive assistance tailored to each client's individual needs.`,
  //   link: "/daily-personal-activities",
  //   img: Slider5,
  // },
  {
    name: "Community Nursing Care",
    content: `Community Nursing Care provides essential medical and health-related support directly within the community. Our skilled nurses offer assistance with medication management, wound care, health monitoring, and other healthcare needs, ensuring clients receive compassionate and professional care.`,
    link: "/community-nursing-care",
    img: Slider6,
  },
  {
    name: "Assist Travel Transport",
    content: `Our Assist Travel and Transport service ensures that clients have access to safe and reliable transportation options. Whether attending appointments, social gatherings, or running errands, our team provides dependable travel support to help clients maintain an active and connected lifestyle.`,
    link: "/assist-travel-transport",
    img: Slider7,
  },
  {
    name: "Respite Care",
    content: `Our Respite Care service offers clients a relaxing, supportive environment to recharge, while also giving primary caregivers a much-needed break. With personalized activities, attentive care, and a comfortable stay, clients can enjoy a temporary retreat tailored to their preferences and needs.`,
    link: "/respite-care",
    img: Slider8,
  },
];

export const participateCommunity = {
  name: "Participate Community",
  content: `Our Participate Community service fosters belonging and engagement. We offer support to help clients connect with others, develop social skills, and enjoy meaningful activities that promote interaction within the local community.`,
  link: "/participate-community",
  img: Slider1,
  whatWeProvide: [
    {
      img: PartComm1,
      title: "Community Events",
      content:
        "We provide clients with access to a wide range of local community events, from fairs and festivals to social meet-ups and cultural gatherings. These events encourage clients to immerse themselves in the community, fostering meaningful social connections and enhancing a sense of belonging. Our support team ensures clients feel comfortable and confident in these settings, making socializing enjoyable and accessible.",
    },
    {
      img: PartComm2,
      title: "Social Skills Development",
      content:
        "Our services include tailored activities and workshops focused on enhancing interpersonal and communication skills. Through guided practice in real-life scenarios, clients build confidence in engaging with others, learn effective ways to express themselves, and develop techniques for building friendships. Our team is here to support each step, ensuring clients feel empowered and prepared to thrive in social environments.",
    },
    {
      img: PartComm3,
      title: "Interest-Based Groups",
      content:
        "Clients are encouraged to join groups aligned with their personal interests, such as arts, sports, music, and other hobbies. These groups provide a welcoming space to explore passions, develop new skills, and bond with like-minded individuals. Our team assists in matching clients with groups that best fit their interests, promoting lasting friendships and ongoing engagement in activities they love.",
    },
    {
      img: PartComm4,
      title: "Personal Growth Activities",
      content:
        "We offer programs designed to encourage personal growth, focusing on activities that promote self-expression, independence, and confidence. Clients participate in activities such as art therapy, journaling, or mindfulness exercises that allow them to explore their thoughts and emotions constructively. These activities aim to empower clients by nurturing a positive self-image and a strong sense of self-worth.",
    },
    {
      img: PartComm5,
      title: "Volunteer Opportunities",
      content:
        "Our service includes opportunities for clients to volunteer within the community, fostering a sense of purpose and fulfillment. Volunteering allows clients to give back, develop new skills, and build connections while feeling valued and appreciated. Our team provides guidance in finding volunteer roles that match clients' interests and abilities, ensuring a rewarding experience that strengthens their community ties.",
    },
  ],
};

export const householdTasks = {
  name: "Household Tasks",
  content: `Our Household Tasks service assists clients with essential daily chores, ensuring a safe, organized, and comfortable home environment. We offer support with cleaning, meal prep, laundry, and more to promote independent living.`,
  link: "/household-tasks",
  img: Slider2,
  whatWeProvide: [
    {
      img: HouseHold1,
      title: "Cleaning and Organizing",
      content:
        "We offer support with regular cleaning tasks like dusting, vacuuming, and tidying up to ensure a comfortable and clean living environment. Our team assists clients in organizing spaces to reduce clutter, helping to create a more functional and welcoming home that promotes peace of mind and efficiency.",
    },
    {
      img: HouseHold2,
      title: "Meal Preparation",
      content:
        "Our service includes assistance with meal planning and preparation, ensuring clients enjoy balanced, nutritious meals. We help clients plan meals, shop for ingredients, and prepare food, making healthy eating convenient and accessible. This support fosters independence in the kitchen and encourages clients to make informed choices about their diet.",
    },
    {
      img: HouseHold3,
      title: "Laundry Services",
      content:
        "We provide help with all laundry-related tasks, from washing and drying to folding and organizing clothing. Our team ensures clients have clean, fresh clothes ready to wear, promoting personal hygiene and independence. This service also supports clients in managing their wardrobes, keeping items well-maintained and orderly.",
    },
    {
      img: HouseHold4,
      title: "Home Safety Upkeep",
      content:
        "Our team assists with regular home safety checks, ensuring that clients' homes remain safe and hazard-free. We provide guidance on basic maintenance and can help with minor repairs or coordinating further assistance if needed. This service promotes a secure home environment where clients can feel confident and comfortable.",
    },
    {
      img: HouseHold5,
      title: "Basic Pet Care",
      content:
        "For clients with pets, we offer support in managing essential pet care tasks such as feeding, basic grooming, and cleaning up after pets. This ensures that clients can enjoy the companionship of their pets while maintaining a tidy and well-cared-for home environment for both themselves and their pets.",
    },
  ],
};

export const groupCentreBasedActivities = {
  name: "Group Centre Based Activities",
  content: `Our Group Centre Based Activities offer a range of programs that promote skill-building, social interaction, and personal growth in a supportive environment. Clients participate in workshops, gatherings, and recreational activities that encourage independence and friendship.`,
  link: "/group-centre-based-activities",
  img: Slider3,
  whatWeProvide: [
    {
      img: GroupCenter1,
      title: "Skill-Building Workshops",
      content:
        "Our skill-building workshops are designed to teach new abilities in areas such as cooking, budgeting, job readiness, and more. These hands-on sessions are conducted in a group setting, allowing clients to learn at their own pace while gaining confidence in their independence and abilities. The supportive environment ensures everyone feels empowered to succeed and thrive.",
    },
    {
      img: GroupCenter2,
      title: "Social Gatherings",
      content:
        "Regular social gatherings provide opportunities for clients to meet new people, build meaningful friendships, and enhance their social skills. These events are designed to foster a sense of community and belonging while helping individuals improve their communication and relationship-building abilities in a relaxed, fun atmosphere.",
    },
    {
      img: GroupCenter3,
      title: "Recreational Activities",
      content:
        "We offer a variety of recreational activities such as games, team-building exercises, and outdoor adventures, all aimed at enhancing both physical and mental well-being. These activities help clients stay active, engaged, and healthy while encouraging teamwork and fostering positive relationships within the group.",
    },
    {
      img: GroupCenter4,
      title: "Art and Music Therapy",
      content:
        "Art and music therapy sessions are creative outlets that help clients express themselves, improve emotional health, and enhance cognitive function. These therapeutic activities allow individuals to connect with their emotions, explore new forms of self-expression, and gain a sense of accomplishment and personal growth.",
    },
    {
      img: GroupCenter5,
      title: "Physical Fitness Sessions",
      content:
        "Our physical fitness sessions are designed to improve physical health and promote enjoyment through activities such as group exercises, dancing, yoga, and more. These sessions are tailored to various fitness levels, ensuring clients can participate safely and effectively. Fitness not only promotes physical health but also boosts mental well-being and energy levels.",
    },
  ],
};


export const dailyTaskSharedLiving = {
  name: "Daily Task Shared Living",
  content: `Our Daily Task Shared Living service supports clients in shared living arrangements, providing a balanced environment of independence and communal support for daily activities like cooking, cleaning, and personal care.`,
  link: "/daily-task-shared-living",
  img: Slider4,
  whatWeProvide: [
    {
      img: DailyTask1,
      title: "Supportive Shared Spaces",
      content:
        "We offer shared living spaces that provide a balanced environment for clients to maintain independence while benefiting from communal support. Our team helps clients with daily tasks, creating a safe and welcoming atmosphere where social connections are encouraged, and residents can interact and share experiences in a comfortable setting.",
    },
    {
      img: DailyTask2,
      title: "Household Task Assistance",
      content:
        "Our team provides assistance with various household chores such as cleaning, organizing, and maintaining a tidy living environment. This support ensures that shared spaces remain clean and comfortable for all residents, while fostering a sense of responsibility and cooperation among the group.",
    },
    {
      img: DailyTask3,
      title: "Personal Care Support",
      content:
        "We offer personal care assistance tailored to each client's needs, helping with tasks such as grooming, hygiene, and dressing. This support allows clients to maintain their independence within a shared living environment while ensuring they receive the help they need to manage daily personal care tasks.",
    },
    {
      img: DailyTask4,
      title: "Community Engagement Activities",
      content:
        "Organized community engagement activities provide clients with opportunities to interact with others and strengthen social bonds. These activities are designed to enhance community involvement, promote social connections, and create meaningful experiences that contribute to clients' personal growth and sense of belonging.",
    },
    {
      img: DailyTask5,
      title: "Shared Meals and Cooking",
      content:
        "We encourage communal living through shared meal preparation and cooking sessions. Our team provides guidance and support in preparing nutritious meals that all residents can enjoy together, promoting a sense of community and shared responsibility. This also offers an opportunity to develop cooking skills and build lasting connections with others in the household.",
    },
  ],
};

// export const dailyPersonalActivities = {
//   name: "Daily Personal Activities",
//   content: `Our Daily Personal Activities service helps clients confidently complete essential daily routines. From personal hygiene and mobility support to social interactions, we offer tailored assistance for a comfortable and fulfilling daily life.`,
//   link: "/daily-personal-activities",
//   whatWeProvide: [
//     {
//       img: "/images/personal-hygiene.png",
//       title: "Personal Hygiene Support",
//       content:
//         "Support with hygiene routines, helping clients feel clean, fresh, and confident.",
//     },
//     {
//       img: "/images/mobility-support.png",
//       title: "Mobility Assistance",
//       content:
//         "Help with mobility needs, promoting safety and ease of movement.",
//     },
//     {
//       img: "/images/social-interactions.png",
//       title: "Social Interaction Guidance",
//       content:
//         "Support with social interactions to build confidence and social skills.",
//     },
//     {
//       img: "/images/nutritional-support.png",
//       title: "Nutritional and Meal Assistance",
//       content:
//         "Assistance with nutritional planning and meal support to maintain a balanced diet.",
//     },
//     {
//       img: "/images/daily-routine-management.png",
//       title: "Daily Routine Management",
//       content:
//         "Structured support to help clients manage and organize their daily routines effectively.",
//     },
//   ],
// };

export const communityNursingCare = {
  name: "Community Nursing Care",
  content: `Our Community Nursing Care provides essential medical support in the comfort of the client’s home, offering professional healthcare services such as medication management, wound care, and health monitoring.`,
  link: "/community-nursing-care",
  img: Slider6,
  whatWeProvide: [
    {
      img: CommNurs1,
      title: "Medication Management",
      content:
        "Our expert nursing team assists with organizing and managing medication regimens. This includes ensuring proper dosages, administering medications, and providing education on how to safely take prescribed drugs. Our goal is to reduce the risk of medication errors and improve adherence to treatment plans for optimal health outcomes.",
    },
    {
      img: CommNurs2,
      title: "Wound Care",
      content:
        "We provide specialized wound care to ensure proper healing and avoid infections or complications. Our nurses are trained in treating all types of wounds, including surgical wounds, ulcers, and burns. We use advanced techniques and medical supplies to ensure wounds are treated effectively and heal properly, supporting overall health recovery.",
    },
    {
      img: CommNurs3,
      title: "Health Monitoring",
      content:
        "Our nursing team performs regular health checks, including vital sign monitoring (blood pressure, heart rate, temperature), and other health assessments as required. This monitoring helps to identify early signs of health issues, allowing for timely interventions and personalized care plans tailored to the client’s health needs.",
    },
    {
      img: CommNurs4,
      title: "Chronic Disease Management",
      content:
        "We offer ongoing support for clients managing chronic conditions such as diabetes, hypertension, and respiratory issues. Our nurses assist in developing and implementing care plans to manage symptoms, monitor condition progression, and educate clients on maintaining their health and preventing complications associated with chronic diseases.",
    },
  ],
};


export const assistTravelTransport = {
  name: "Assist Travel Transport",
  content: `Our Assist Travel and Transport service provides clients with reliable travel assistance for appointments, errands, and social gatherings. This service supports clients in maintaining an active and connected lifestyle.`,
  link: "/assist-travel-transport",
  img: Slider7,
  whatWeProvide: [
    {
      img: Travel2,
      title: "Appointment Transport",
      content:
        "We offer safe and reliable transportation to medical and therapy appointments. Our team ensures that clients are picked up on time and comfortably transported to their destination, allowing them to focus on their health and well-being. Whether it's a routine check-up or a specialized appointment, we provide dependable support every step of the way.",
    },
    {
      img: Travel3,
      title: "Social Gathering Transportation",
      content:
        "Our service offers convenient and punctual transportation for clients attending social gatherings, community events, or other outings. We help ensure clients stay connected with their social circles, promoting mental well-being through active participation in social activities. Our vehicles are equipped for comfort, and we ensure clients’ needs are met during the journey.",
    },
    {
      img: Travel4,
      title: "Errand Assistance",
      content:
        "We provide transportation for clients to run essential errands, such as grocery shopping, picking up prescriptions, or attending other necessary appointments. Our service makes it easier for clients to complete their day-to-day tasks, contributing to their independence and reducing stress related to transportation logistics.",
    },
    {
      img: Travel5,
      title: "Mobility and Accessibility Support",
      content:
        "For clients with mobility challenges, we provide accessible vehicles equipped to meet their specific transport needs. This includes assistance with getting in and out of vehicles, and ensuring that clients travel in a safe, comfortable, and dignified manner. We cater to a wide range of mobility requirements to ensure that every journey is as smooth as possible.",
    },
    {
      img: Travel6,
      title: "Travel Companionship",
      content:
        "Our travel companionship service offers clients the comfort and reassurance of a companion during their journey. Whether it’s for medical visits, social outings, or daily errands, our companions are there to provide emotional support, help with navigation, and ensure a stress-free travel experience, promoting safety and peace of mind throughout the journey.",
    },
  ],
};


export const respiteCare = {
  name: "Respite Care",
  content: `Our Respite Care service provides a comfortable and supportive temporary retreat, allowing caregivers a break while clients enjoy personalized activities and attentive care.`,
  link: "/respite-care",
  img: Slider8,
  whatWeProvide: [
    {
      img: Respite1,
      title: "Relaxing Environment",
      content:
        "We provide a serene and peaceful environment designed for relaxation. Clients can unwind in a calm space that promotes mental and physical rejuvenation. The atmosphere is carefully curated with comfort in mind, ensuring that clients feel safe, relaxed, and at ease during their respite stay.",
    },
    {
      img: Respite2,
      title: "Attentive, Personalized Care",
      content:
        "Each client receives one-on-one care from experienced professionals who tailor their services to individual preferences and needs. Whether it's help with personal hygiene, medication management, or simply providing companionship, we ensure that clients are fully supported throughout their stay.",
    },
    {
      img: Respite3,
      title: "Recreational and Leisure Activities",
      content:
        "We offer a variety of fun and engaging activities that cater to clients' hobbies and interests. Whether it's arts and crafts, music, or light exercise, these activities encourage relaxation and enjoyment, contributing to a positive and fulfilling respite experience.",
    },
    {
      img: Respite4,
      title: "Socialization Opportunities",
      content:
        "In addition to personalized care, we provide group activities that foster socialization with others in a supportive environment. These activities offer clients the chance to form connections, make new friends, and engage in meaningful interactions with others who share similar interests or experiences.",
    },
    {
      img: Respite5,
      title: "Customized Meal Preparation",
      content:
        "We ensure that each client’s dietary preferences and requirements are met by offering customized meal planning and preparation. Whether it’s for specific health needs or personal tastes, our meals are nutritious, delicious, and prepared with care to enhance the comfort and enjoyment of every client.",
    },
  ],
};


export const overnightSupport = {
  name: "Overnight Support",
  content: `Our Overnight Support service provides clients with essential care and security throughout the night. This service includes health monitoring, personal care, and mobility assistance, ensuring a restful night in the client’s home.`,
  link: "/overnight-support",
  whatWeProvide: [
    {
      img: "/images/night-monitoring.png",
      title: "Overnight Health Monitoring",
      content:
        "Continuous monitoring of vital signs and health conditions for safety and well-being.",
    },
    {
      img: "/images/personal-care.png",
      title: "Nighttime Personal Care",
      content: "Support with nighttime routines to ensure comfort and rest.",
    },
    {
      img: "/images/emergency-support.png",
      title: "Emergency Assistance",
      content:
        "Immediate assistance for any health issues or emergencies during the night.",
    },
    {
      img: "/images/mobility-help.png",
      title: "Nighttime Mobility Help",
      content:
        "Assistance with nighttime movements, ensuring safety when moving around the home.",
    },
    {
      img: "/images/reassurance.png",
      title: "Comfort and Reassurance",
      content:
        "Providing peace of mind for clients through on-hand support throughout the night.",
    },
  ],
};
