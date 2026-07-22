import { profile } from "./data/profile.js";
import { projects, projectFilters } from "./data/projects.js";
import { certs } from "./data/certs.js";
import { skills } from "./data/skills.js";
import { blog } from "./data/blog.js";
import { renderProjects } from "./components/renderProjects.js";
import { renderCerts } from "./components/renderCerts.js";
import { renderSkills } from "./components/renderSkills.js";
import { renderStats } from "./components/renderStats.js";
import { renderBlog } from "./components/renderBlog.js";
import { initChart } from "./utils/chart.js";
import { initFilters } from "./utils/filters.js";
import { initAnimations } from "./utils/animations.js";
import { initParticles } from "./utils/particles.js";

const byId = (id) => document.getElementById(id);

// Profile data
if (byId("profile-name"))     byId("profile-name").textContent     = profile.name;
if (byId("profile-nickname")) byId("profile-nickname").textContent = profile.nickname;
if (byId("profile-summary"))  byId("profile-summary").textContent  = profile.summary;
if (byId("profile-about"))    byId("profile-about").textContent    = profile.about;

// Render sections
renderStats(byId("stats-grid"),       profile.stats);
renderSkills(byId("skills-list"),     skills);
renderCerts(byId("certs-grid"),       certs);
renderProjects(byId("projects-grid"), projects);
renderBlog(byId("blog-grid"),         blog);

// Init utilities
initFilters(byId("project-filters"), projectFilters, projects, byId("projects-grid"));
initChart(byId("skillsChart"), skills);
initAnimations();

// Sunset particle system — floating amber embers
initParticles(byId("hero-particles"));
