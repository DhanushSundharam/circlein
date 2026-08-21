const fs = require('fs');

function extractBlock(content, startStr, endStr) {
  const start = content.indexOf(startStr);
  if (start === -1) return '';
  const end = content.indexOf(endStr, start) + endStr.length;
  return content.substring(start, end);
}

const landing = fs.readFileSync('src/pages/Landing.jsx', 'utf-8');

const tStart = landing.indexOf('const T = {');
const tEnd = landing.indexOf('const PILL_COLORS');
const tBlock = landing.substring(tStart, tEnd);

// Extract sections
const howSection = extractBlock(landing, '{/* ── HOW IT WORKS', '</section>');
const carWashSection = extractBlock(landing, '{/* ── CAR WASH SECTION', '</section>');
const teamSection = extractBlock(landing, '{/* ── TEAM ──────────────', '</section>');

// REFACTOR LANDING.JSX
let newLanding = landing.replace(tBlock, "import { T } from '../utils/content';\n\n");
newLanding = newLanding.replace(howSection, '');
newLanding = newLanding.replace(carWashSection, '');
newLanding = newLanding.replace(teamSection, '');
fs.writeFileSync('src/pages/Landing.jsx', newLanding);

// REFACTOR SERVICES.JSX
let newServices = landing.replace(tBlock, "import { T } from '../utils/content';\n\n");
// Extract imports and generic layout
const mainStart = newServices.indexOf('<div className="landing-page"');
const mainEnd = newServices.indexOf('<main className="lp-main">') + '<main className="lp-main">'.length;
const footer = extractBlock(newServices, '{/* ── FOOTER', '</footer>');

const servicesContent = newServices.substring(0, mainStart) + 
  '<div className="services-page pt-24">\n  <main className="lp-main">\n' + 
  howSection + '\n' + carWashSection + '\n  </main>\n' + footer + '\n</div>\n);\n};\n\nexport default Landing;';
fs.writeFileSync('src/pages/Services.jsx', servicesContent.replace(/export default Landing;/g, 'export default Services;').replace(/const Landing = /g, 'const Services = '));

// REFACTOR TEAM.JSX
let newTeam = landing.replace(tBlock, "import { T } from '../utils/content';\n\n");
const teamContent = newTeam.substring(0, mainStart) + 
  '<div className="team-page pt-24">\n  <main className="lp-main">\n' + 
  teamSection + '\n  </main>\n' + footer + '\n</div>\n);\n};\n\nexport default Landing;';
fs.writeFileSync('src/pages/Team.jsx', teamContent.replace(/export default Landing;/g, 'export default Team;').replace(/const Landing = /g, 'const Team = '));

console.log('Refactoring complete');
