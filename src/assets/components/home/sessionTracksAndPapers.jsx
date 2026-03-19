import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

export default function SessionAndPapers() {
  const conferenceSessions = [
  {
    id: "pharmacology",
    title: "Session 1: Pharmacology and Toxicology",
    cover: "/images/session/session 1/session-1-public-health-conference.webp",
    topics: [
      "Pharmacogenomics: Tailoring Treatment Through Genetic Profiling",
      "Pharmacokinetics, Safety and Adverse Drug Reactions",
      "Natural Products and Phytochemicals in Drug Development",
      "Impact of Environmental Exposures on Human Health",
      "Pharmaceutical Microbiology and Biotechnology",
      "Pharmaceutical Product Development and Manufacturing",
      "Pharmaceutical Safety and Global Regulatory Frameworks",
      "Pharmaceutical analysis and Quality Assurance",
    ],
  },
  {
    id: "covid",
    title: "Session 2: COVID-19",
    cover: "/images/session/session 2/session-2-medical-conference.webp",
    topics: [
      "COVID-19 Drug development",
      "COVID-19 Vaccine development",
      "Drug discovery strategies to fight COVID-19",
      "Pharmacologic treatments for COVID-19",
      "COVID-19 Drug delivery system",
      "COVID-19 impact on World-wide Pharma Companies",
    ],
  },
  {
    id: "life-sciences",
    title:
      "Session 3: Emerging Frontiers in Life Sciences and Cross-Disciplinary Innovation",
    cover: "/images/session/session 3/session-3-ai-healthcare-research-paper.webp",
    topics: [
      "Advances in Biotechnology and Genetic Engineering for Human Health",
      "Advances in Biotechnology and Genetic Engineering for Human Health",
      "Structural Biology and Biophysics: Insights into Molecular Mechanisms",
      "Environmental Biology and Their Influence on Public Health",
      "From Lab to Life: Accelerating Translational Research in Health Sciences",
    ],
  },
  {
    id: "healthcare",
    title:
      "Session 4: Smart Technologies and Digital Innovation in Healthcare and Life Sciences",
    cover: "/images/session/session 4/session-4-biotechnology-research-paper.webp",
    topics: [
      "Artificial Intelligence and Machine Learning: Transforming Biomedical Discovery",
      "AI and Big data in Infectious Disease Management",
      "Remote Healthcare Delivery: Advances, Opportunities and Challenges",
      "Smart Wearables in Health Monitoring and Chronic Disease Management",
      "Blockchain Applications in Healthcare and Data Integrity",
      "Data Privacy and Cybersecurity in Connected Healthcare Systems",
    ],
  },
  {
    id: "medicine",
    title: "Session 5: Healthcare and Medicine: A Multidisciplinary Perspective",
    cover: "/images/session/session 5/session-5-biotechnology-conference.webp",
    topics: [
      "Medicine and Genomic Approaches in Patient Care",
      "Integrative Healthcare: Merging Traditional Wisdom with Modern Science",
      "Next-Generation Diagnostics and Advanced Therapeutic Strategies",
      "Breakthroughs in Pharmaceutical Innovation: Drug Discovery and Delivery Systems",
      "Bioethics and Responsibility in Modern Healthcare Practice",
    ],
  },
  {
    id: "epidemiology",
    title: "Session 6: Public Health, Policy and Epidemiology",
    cover: "/images/session/session 6/session-6-international-biotechnology-conference.webp",
    topics: [
      "Global Health Strategies for Equitable and Sustainable Development",
      "Health Equity Through Policy: Bridging Gaps in Access and Outcomes",
      "Epidemiology in Action: Understanding Disease Patterns and Effects",
      "Preventive Health and Community-Based Intervention Models",
      "Data and Analytics for Evidence-Based Public Health",
    ],
  },
  {
    id: "climate",
    title: "Session 7: Health Impacts of Climate and Environmental Change",
    cover: "/images/session/session 7/session-7-international-journal-of-biotechnology.webp",
    topics: [
      "Global Health Challenges in a Climate Change",
      "Sustainable Practices in Healthcare and Life Sciences",
      "Biodiversity, Ecosystems and Emerging Diseases",
      "Toxic Exposures: Air, Water and Public Health Risks",
      "Climate Resilience and Adaptive Health Systems",
      "Climate change and Infectious disease",
    ],
  },
  {
    id: "food-security",
    title: "Session 8: Food Security, Nutrition and Sustainable Agriculture",
    cover: "/images/session/session 8/session-8-applied-biotechnology-journal.webp",
    topics: [
      "Cutting-Edge Agricultural Biotechnology to Enhance Global Nutrition",
      "Building Sustainable Food Systems to Promote Health and Wellbeing",
      "Role of Nutrition in Prevention and Management of Chronic Diseases",
      "Innovations and Barriers in Public Health Nutrition",
      "Global Food Safety Governance and Regulatory Challenges",
    ],
  },
  {
    id: "regenerative",
    title: "Session 9: Regenerative and Stem Cell Therapies",
    cover: "/images/session/session 9/session-9-health-innovation-summit.webp",
    topics: [
      "Stem Cell Therapies for Tissue and Organ Regeneration",
      "Next-Generation Gene Therapy Techniques",
      "Scalability and Ethics in Stem Cell Production",
      "Applications of 3D Bioprinting in Regenerative Medicine",
      "Clinical Translation and Commercialization of Stem Cell Therapies",
    ],
  },
  {
    id: "biophotonics",
    title: "Session 10: Advanced Imaging and Biophotonics",
    cover: "/images/session/session 10/session-10-conference-for-nutrition.webp",
    topics: [
      "Emerging Trends in Advanced Medical Imaging",
      "Optical Innovations in Biomedical Research and Diagnostics",
      "Nanotechnology in Bioimaging and Drug Targeting",
      "Functional Imaging in Neurosciences and Oncology Research",
      "Computational Tools for Analyzing Complex Imaging Data",
    ],
  },
  {
    id: "biomedical",
    title: "Session 11: Advances in Biomechanics and Biomedical Technologies",
    cover: "/images/session/session 11/session-11-biomedical-conference.webp",
    topics: [
      "Innovations in Prosthetics, Orthotics and Assistive Devices",
      "BioEngineering Breakthroughs in Modern Surgical Practices",
      "Frontiers in Tissue Engineering and Regenerative Therapies",
      "Biomedical Devices for Chronic Disease Management",
      "Robotics in Rehabilitation and Elderly Care",
    ],
  },
  {
    id: "neurosciences",
    title: "Session 12: Neurosciences and Mental Health",
    cover: "/images/session/session 12/session-12-mental-health-conference.webp",
    topics: [
      "Advancements in Brain-Computer Interfaces and Human Cognition",
      "Innovations in the Treatment of Neurological Disorders",
      "Interdisciplinary Approaches to Tackling Anxiety and Depression",
      "Mental Health: Challenges and Strategies in Workplace and Educational Institutions",
      "Neurogenetics and Behavioral Science",
    ],
  },
  {
    id: "strategies",
    title: "Session 13: Emerging Infectious Diseases and Integrated Health Strategies",
    cover: "/images/session/session 13/session-13-mental-health-seminar.webp",
    topics: [
      "Antimicrobial Resistance (AMR): Strategies for Global Health Security",
      "Zoonoses and Biodiversity: Protecting Health Through Conservation",
      "One Health in Action: Bridging Ecosystems, Animals and Human",
      "Innovations in Vaccine Science: From Bench to Global Delivery",
      "Rapid Response Mechanisms in Global Health Emergencies",
    ],
  },
  {
    id: "reproductive",
    title: "Session 14: Reproductive, Maternal and Pediatric Health",
    cover: "/images/session/session 14/session-14-psychology-conference.webp",
    topics: [
      "Innovations in Maternal and Neonatal Care",
      "Breakthroughs in Fertility Science and Reproductive Technologies",
      "Next-Gen Pediatric Care: Tools, Treatments and Technologies",
      "Foundations of Health: Early Childhood Nutrition and Growth",
      "Global Perspectives on Youth and Adolescent Wellbeing",
    ],
  },
  {
    id: "psychology",
    title: "Session 15: Behavioral Sciences and Healthcare Psychology",
    cover: "/images/session/session 15/session-15-international-psychology-conference.webp",
    topics: [
      "Behavioral Strategies in Managing Chronic Illness",
      "Impact of Stress on Mind-Body Health",
      "Psychosocial interventions for Chronic Disease Care",
      "Behavioral Economics: Shaping Healthcare Decisions",
      "Technology-Enabled Mental Health Care",
    ],
  },
  {
    id: "healthcare-systems",
    title: "Session 16: Healthcare Systems and Management",
    cover: "/images/session/session 16/session-16-food-security-conference.webp",
    topics: [
      "Smart Solutions for Efficient Hospital Management and Care",
      "Global Perspectives on Health Economics and Resource Allocation",
      "Data Analytics and Health Informatics",
      "Strategic Leadership and Governance in Healthcare",
      "Standards, Accreditation and Quality Assurance in Healthcare",
    ],
  },
];
  return (
    <div className="flex justify-center py-12 bg-gray-100">
      <div className="w-full mx-4 ">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[var(--color-heading)]  mb-2">
          Session Tracks / Call for Papers
        </h2>
        <h4 className="text-center text-[var(--color-primary)]">
          <b>Call for Submissions:</b> Topics of interest include, but are not
          limited to:
        </h4>
        <p className=" text-center my-5 text-gray-600">
          Explore the diverse and dynamic session tracks at ICLSMHA-2026! We
          have curated a rich blend of educational and interdisciplinary
          presentations designed to inspire innovation and foster collaboration.
          Join us to engage with cutting-edge research and vibrant discussions
          spanning a wide spectrum of life sciences and healthcare topics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conferenceSessions.map(({ id, cover,title }, index) => (
            <a
              key={index}
              href={`/session-tracks-call-for-papers`}
              className="block"
            >
              <img
                className="rounded-xl hover:scale-110 duration-500 w-full h-auto object-cover"
                src={cover}
                alt={title}
                title={title}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
