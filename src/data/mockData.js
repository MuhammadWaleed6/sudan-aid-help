// Mock data for Sudan Aid Platform
export const newsUpdates = [
  {
    id: 1,
    title: "Sudan: 10.7 Million People Need Humanitarian Assistance",
    summary: "UN agencies report that more than half of Sudan's population requires immediate humanitarian aid as conflict continues to displace millions.",
    date: "2024-01-20",
    source: "UN OCHA",
    link: "https://www.unocha.org/sudan",
    urgent: true
  },
  {
    id: 2,
    title: "Cross-Border Humanitarian Corridor Established",
    summary: "New humanitarian corridor from Chad enables delivery of critical aid to West Darfur, reaching 50,000 displaced families.",
    date: "2024-01-18",
    source: "WFP",
    link: "https://www.wfp.org/countries/sudan"
  },
  {
    id: 3,
    title: "Cholera Outbreak Confirmed in Multiple States",
    summary: "Health authorities confirm cholera cases in Blue Nile, Gedaref, and Kassala states, highlighting urgent need for clean water and sanitation.",
    date: "2024-01-15",
    source: "WHO",
    link: "https://www.who.int/emergencies/disease-outbreak-news/item/2024-DON504",
    urgent: true
  },
  {
    id: 4,
    title: "Education Crisis: 7 Million Children Out of School",
    summary: "UNICEF reports that conflict has disrupted education for 7 million children, with many schools damaged or occupied.",
    date: "2024-01-12",
    source: "UNICEF",
    link: "https://www.unicef.org/sudan"
  }
];

export const statistics = [
  { label: "People Need Humanitarian Aid", value: "10.7M", icon: "MdHelp", source: "UN OCHA" },
  { label: "Internally Displaced People", value: "5.1M", icon: "MdPeople", source: "IOM" },
  { label: "Children Requiring Assistance", value: "5.4M", icon: "MdChildCare", source: "UNICEF" },
  { label: "Refugees in Neighboring Countries", value: "1.5M", icon: "MdPublic", source: "UNHCR" }
];

export const ngos = [
  {
    name: "UNHCR",
    description: "UN Refugee Agency providing emergency shelter, protection, and legal assistance to displaced families",
    donateLink: "https://donate.unhcr.org/int/en/sudan-emergency",
    logo: "FaBuilding",
    impact: "Assisted 1.2M refugees",
    verified: true
  },
  {
    name: "World Food Programme",
    description: "Providing life-saving food assistance and nutrition support to vulnerable populations",
    donateLink: "https://www.wfp.org/support-us/stories/sudan-emergency",
    logo: "FaSeedling",
    impact: "Fed 2.1M people monthly",
    verified: true
  },
  {
    name: "Médecins Sans Frontières",
    description: "Emergency medical care, surgery, and healthcare in conflict-affected areas",
    donateLink: "https://www.msf.org/sudan",
    logo: "FaHospital",
    impact: "50+ medical facilities",
    verified: true
  },
  {
    name: "Save the Children",
    description: "Child protection, education, and emergency response for displaced children",
    donateLink: "https://www.savethechildren.org/us/where-we-work/sudan",
    logo: "FaGraduationCap",
    impact: "Protected 800K children",
    verified: true
  },
  {
    name: "Islamic Relief",
    description: "Emergency aid, water, sanitation, and livelihood support for affected communities",
    donateLink: "https://www.islamic-relief.org/sudan-crisis/",
    logo: "FaMoon",
    impact: "Reached 500K beneficiaries",
    verified: true
  },
  {
    name: "Sudanese Red Crescent",
    description: "Local humanitarian response, first aid, and community support across Sudan",
    donateLink: "https://www.icrc.org/en/where-we-work/africa/sudan",
    logo: "FaHeart",
    impact: "Community-based aid",
    verified: true
  }
];

export const mapData = [
  {
    id: 1,
    name: "North Darfur",
    coordinates: [24.8, 25.3],
    displaced: "2.1M",
    status: "critical",
    description: "Highest concentration of displaced families"
  },
  {
    id: 2,
    name: "Khartoum",
    coordinates: [15.5, 32.5],
    displaced: "1.8M",
    status: "urgent",
    description: "Capital region facing severe humanitarian crisis"
  },
  {
    id: 3,
    name: "West Darfur",
    coordinates: [23.4, 22.9],
    displaced: "1.2M",
    status: "urgent",
    description: "Cross-border displacement to Chad"
  }
];