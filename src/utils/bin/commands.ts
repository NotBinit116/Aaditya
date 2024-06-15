import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let commandList = '';

  commands.forEach((command) => {
    commandList += `${command}\n`;
  });

  return `Welcome! Here are all the available commands:\n\n${commandList}\nType 'sumfetch' to display summary.\nType 'clear' to clear the page.\n`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. Welcome to my website!\nMore about me:\n'sumfetch' - short summary.\n'resume' - my latest resume.`;
};

// Resume
export const resume = async (args: string[]): Promise<string> => {
  window.open(config.resume_url);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

// Search
export const credly = async (args: string[]): Promise<string> => {
  window.open('https://www.credly.com/users/aaditya-khwakhwali/badges');
  return 'Connecting to Credly...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'I am Aaditya Khwakhwali';
};

export const education = async (args: string[]): Promise<string> => {
  return '\n<b>M.SC. IT AND APPLIED SECURITY</b>\n\nISLINGTON COLLEGE, KATHMANDU, NEPAL\n2020 - 2022\nLONDON METROPOLITAN UNIVERSITY | DISTINCTION (72.78%)\n\n--------------------------------------------------------------\n\n<b>B.SC. (HONS) COMPUTER NETWORKING AND IT SECURITY</b>\n\nISLINGTON COLLEGE, KATHMANDU, NEPAL\n2015 - 2018\nLONDON METROPOLITAN UNIVERSITY | FIRST CLASS HONORS (79.40%)';
};

export const experience = async (args: string[]): Promise<string> => {
  return '\nCURRENT EXPERIENCES\n\n<b> • INFORMATION SYSTEMS AUDITOR</b> @ <b>VAIRAV TECHNOLOGY SECURITY PVT. LTD.</b>\n<b> • MODULE LEADER & LECTURER</b> @ <b>ISLINGTON COLLEGE PVT. LTD.</b>\n\n--------------------------------------------------------------\n\n'
  + 'PAST EXPERIENCES\n\n<b> • GOVERNANCE, RISK & COMPLIANCE TECHNICAL ACCOUNT MANAGER</b> @ <b>CYBERARROW LLC</b>\n<b> • TRAINING DESIGNER & CORPORATE TRAINER</b> @ <b>DRISTI TECH PVT. LTD.</b>\n<b> • ANALYST, ONSITE TECHNOLOGY SERVICES</b> @ <b>STANDARD CHARTERED BANK LTD.</b>'
  ;
};

export const certificates = async (args: string[]): Promise<string> => {
  return '\n • ISC2 Certified in Cybersecurity\n • IRCA ISO/IEC 27001:2022 Lead Auditor\n • Cisco Certified Specialist, Security Core\n • Juniper Networks Certified Associate, Junos (JNCIA-Junos)\n • Juniper Networks Certified Associate, Cloud (JNCIA-Cloud)\n • Oracle Cloud Infrastructure Cloud Operations Certified Associate\n • Oracle Cloud Infrastructure Foundations Certified Associate\n • Cisco Certified Network Associate Routing and Switching\n • IBM QRadar Security Intelligence Engineer (Mastery) ' ;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  // Prompt for password (simulated)
  const password = prompt(`[sudo] password for ${config.name}:`);
  if (password !== null) {
    return `[sudo] incorrect password`;
  }
  return '';
};


// Crash
export const sudo_rm = async (args: string[]): Promise<string> => {
  document.body.innerHTML = '';
  document.body.style.backgroundColor = "#2e3440";
  return '';
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ░█████╗░░█████╗░██████╗░██╗████████╗██╗░░░██╗░█████╗░
  ██╔══██╗██╔══██╗██╔══██╗██║╚══██╔══╝╚██╗░██╔╝██╔══██╗
  ███████║███████║██║░░██║██║░░░██║░░░░╚████╔╝░███████║
  ██╔══██║██╔══██║██║░░██║██║░░░██║░░░░░╚██╔╝░░██╔══██║
  ██║░░██║██║░░██║██████╔╝██║░░░██║░░░░░░██║░░░██║░░██║
  ╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝
  
  ██╗░░██╗██╗░░██╗░██╗░░░░░░░██╗░█████╗░██╗░░██╗██╗░░██╗░██╗░░░░░░░██╗░█████╗░██╗░░░░░██╗
  ██║░██╔╝██║░░██║░██║░░██╗░░██║██╔══██╗██║░██╔╝██║░░██║░██║░░██╗░░██║██╔══██╗██║░░░░░██║
  █████═╝░███████║░╚██╗████╗██╔╝███████║█████═╝░███████║░╚██╗████╗██╔╝███████║██║░░░░░██║
  ██╔═██╗░██╔══██║░░████╔═████║░██╔══██║██╔═██╗░██╔══██║░░████╔═████║░██╔══██║██║░░░░░██║
  ██║░╚██╗██║░░██║░░╚██╔╝░╚██╔╝░██║░░██║██║░╚██╗██║░░██║░░╚██╔╝░╚██╔╝░██║░░██║███████╗██║
  ╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚══════╝╚═╝

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'clear' to clear the page. 
`;
};
