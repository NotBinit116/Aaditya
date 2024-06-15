import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
 sumfetch: summary display
-----------
 ABOUT
 ${config.name}
ﰩ ${config.ps1_hostname}
 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
-----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://www.credly.com/users/aaditya-khwakhwali/badges" target="_blank">credly.com</a></u>
 <u><a href="https://np.linkedin.com/in/aaditya-khwakhwali" target="_blank">linkedin.com</a></u>
-----------
`;
  } else {
    return `
 sumfetch
-----------
 ABOUT
 ${config.name}
 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
-----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://www.credly.com/users/aaditya-khwakhwali/badges" target="_blank">credly.com</a></u>
 <u><a href="https://np.linkedin.com/in/aaditya-khwakhwali" target="_blank">linkedin.com</a></u>
-----------

`;
  }
};

export default sumfetch;
