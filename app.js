import { profile } from "./data/profile.js";
import { projects, projectFilters } from "./data/projects.js";
import { certs } from "./data/certs.js";
import { skills } from "./data/skills.js";
import { experience, experienceFilters } from "./data/experience.js";
import { contact } from "./data/contact.js";
import { renderProjects } from "./components/renderProjects.js";
import { renderCerts } from "./components/renderCerts.js";
import { renderSkills } from "./components/renderSkills.js";
import { renderStats } from "./components/renderStats.js";
import { renderExperience } from "./components/renderExperience.js";
import { initChart } from "./utils/chart.js";
import { initFilters } from "./utils/filters.js";
import { initAnimations } from "./utils/animations.js";
import { initParticles } from "./utils/particles.js";

const byId = (id) => document.getElementById(id);

// Profile data
if (byId("profile-name"))     byId("profile-name").textContent     = profile.name;
if (byId("profile-nickname")) byId("profile-nickname").textContent = profile.nickname;
if (byId("profile-summary"))  byId("profile-summary").textContent  = profile.summary;

// About text (paragraphs)
const aboutContainer = byId("about-text-container");
if (aboutContainer && profile.aboutParagraphs) {
  aboutContainer.innerHTML = profile.aboutParagraphs.map(p => `<p>${p}</p>`).join("");
} else if (byId("profile-about")) {
  byId("profile-about").textContent = profile.about;
}

// Tech Profile & Bento Cards
if (profile.techProfile) {
  if (byId("tech-status")) byId("tech-status").textContent = profile.techProfile.status || "Active";
  if (byId("tech-callsign")) byId("tech-callsign").textContent = profile.techProfile.callsign;
  if (byId("tech-base")) byId("tech-base").textContent = profile.techProfile.base;
  if (byId("tech-institution")) byId("tech-institution").textContent = profile.techProfile.institution;
  if (byId("tech-specialty")) byId("tech-specialty").textContent = profile.techProfile.specialty;

  const chipsContainer = byId("tech-toolkit-chips");
  if (chipsContainer) {
    const tools = Array.isArray(profile.techProfile.toolkit)
      ? profile.techProfile.toolkit
      : (profile.techProfile.toolkit || "").split(",").map(t => t.trim());
    chipsContainer.innerHTML = tools.map(tool => `<span class="toolkit-chip">${tool}</span>`).join("");
  }
}

// Render sections
renderStats(byId("stats-grid"),       profile.stats);
renderSkills(byId("skills-list"),     skills);
renderCerts(byId("certs-list"),       certs);
renderProjects(byId("projects-grid"), projects);
renderExperience(byId("experience-grid"), experience);

// Contact info
if (byId("contact-email-val"))      byId("contact-email-val").textContent    = contact.email;
if (byId("contact-email-link"))     byId("contact-email-link").href          = contact.emailLink;
if (byId("contact-github-val"))     byId("contact-github-val").textContent   = contact.github;
if (byId("contact-github-link"))    byId("contact-github-link").href         = contact.githubLink;
if (byId("contact-linkedin-val"))   byId("contact-linkedin-val").textContent = contact.linkedin;
if (byId("contact-linkedin-link"))  byId("contact-linkedin-link").href       = contact.linkedinLink;
if (byId("contact-instagram-val"))  byId("contact-instagram-val").textContent= contact.instagram;
if (byId("contact-instagram-link")) byId("contact-instagram-link").href      = contact.instagramLink;
if (byId("contact-status-val"))     byId("contact-status-val").textContent   = contact.status;

// Init utilities
initFilters(byId("project-filters"), projectFilters, projects, byId("projects-grid"));
initFilters(byId("experience-filters"), experienceFilters, experience, byId("experience-grid"));
initChart(byId("skillsChart"), skills);
initAnimations();

// Sunset particle system — floating amber embers
initParticles(byId("hero-particles"));
