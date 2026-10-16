import { AppState } from '../store/useAppStore';
import { platforms } from './platforms';

export const generateBloggerXML = (state: AppState): string => {
  const { profile, links, seo, theme } = state;
  const activeLinks = links.filter(link => link.isActive);

  // Generate HTML for links
  const linksHTML = activeLinks.map(link => {
    const platform = platforms[link.icon || 'custom'] || platforms['custom'];
    const isCustom = platform.id === 'custom';
    
    // Inject styles inline directly for safety inside XML/HTML
    const bgStyle = isCustom ? '' : `background: ${platform.color};`;
    const textStyle = isCustom ? '' : `color: ${platform.textColor}; border-color: transparent;`;
    const specificStyle = (!isCustom) ? `style="${bgStyle} ${textStyle}"` : '';

    let iconHTML = platform.svg;
    if (isCustom && link.customIconUrl) {
      iconHTML = `<img src='${link.customIconUrl}' loading='lazy' decoding='async' width='20' height='20' style='width: 20px; height: 20px; object-fit: contain; border-radius: 4px;' alt='Icon' />`;
    }

    return `
    <a href='${link.url}' target='_blank' rel='noopener noreferrer' class='link-btn ${isCustom ? 'custom-btn' : 'brand-btn'}' ${specificStyle} aria-label='Kunjungi tautan ${link.title || platform.name}'>
      <span class='icon-wrapper' aria-hidden='true'>${iconHTML}</span>
      <span class='link-text'>${link.title || platform.name}</span>
    </a>`;
  }).join('\n');

  // Avatar HTML
  const avatarHTML = profile.avatarUrl 
    ? `<img src='${profile.avatarUrl}' alt='Foto Profil ${profile.name}' class='avatar' loading='eager' fetchpriority='high' width='96' height='96' />`
    : `<div class='avatar-placeholder' aria-label='Inisial Profil'>${profile.name ? profile.name.charAt(0).toUpperCase() : '?'}</div>`;

  let hoverCSS = '';
  switch(theme.buttonHoverStyle) {
    case 'shift':
      hoverCSS = `transform: translateY(-4px); box-shadow: 0 6px 12px rgba(0,0,0,0.15);`; break;
    case 'glow':
      hoverCSS = `box-shadow: 0 0 15px currentColor; filter: brightness(1.1);`; break;
    case 'none':
      hoverCSS = `opacity: 0.9;`; break;
    case 'scale':
    default:
      hoverCSS = `transform: scale(1.02); opacity: 0.9;`; break;
  }

  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=5.0' name='viewport'/>
  <title>${seo.title || profile.name || 'Bio Link'}</title>
  <meta name='description' content='${seo.description || profile.bio || 'Halaman Bio Link profesional yang dibuat menggunakan BioBlogger.'}' />
  ${seo.faviconUrl ? `<link href='${seo.faviconUrl}' rel='icon' type='image/x-icon'/>` : ''}
  
  <b:skin><![CDATA[
    /* CSS RESET & VARIABLES */
    :root {
      --bg-color: ${theme.backgroundColor};
      --bg-image: ${theme.backgroundImage 
        ? (theme.backgroundImage.startsWith('http') || theme.backgroundImage.startsWith('data:') 
            ? `url('${theme.backgroundImage}')` 
            : theme.backgroundImage)
        : 'none'};
      --text-color: ${theme.textColor};
      --btn-bg: ${theme.buttonColor};
      --btn-text: ${theme.buttonTextColor};
    }
    
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    
    body {
      background-color: var(--bg-color);
      background-image: var(--bg-image);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: var(--text-color);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem 1.5rem;
      -webkit-font-smoothing: antialiased;
    }
    
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .profile-section {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .avatar {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
      border: 2px solid var(--btn-bg);
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .avatar-placeholder {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background-color: var(--btn-bg);
      color: var(--btn-text);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .name {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
    
    .bio {
      font-size: 0.875rem;
      opacity: 0.8;
      max-width: 400px;
      white-space: pre-wrap;
    }
    
    .links-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    
    .link-btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem 1.5rem;
      text-decoration: none;
      border-radius: 1rem;
      font-weight: 600;
      font-size: 0.875rem;
      transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
      border: 1px solid transparent;
    }
    
    .custom-btn {
      background-color: var(--btn-bg);
      color: var(--btn-text);
    }
    
    .link-btn:hover {
      ${hoverCSS}
    }

    .icon-wrapper {
      position: absolute;
      left: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-wrapper svg {
      width: 20px;
      height: 20px;
    }
    
    .link-text {
      padding-left: 1.5rem;
    }
    
    .watermark {
      margin-top: auto;
      font-size: 0.75rem;
      opacity: 0.5;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .watermark a {
      color: inherit;
      text-decoration: none;
      font-weight: bold;
    }
    
    /* Hide default Blogger widgets */
    .blogger-widgets { display: none !important; }
  ]]></b:skin>
</head>
<body>
  
  <div class='container'>
    <div class='profile-section'>
      ${avatarHTML}
      <h1 class='name'>${profile.name}</h1>
      <p class='bio'>${profile.bio}</p>
    </div>
    
    <div class='links-section'>
      ${linksHTML}
    </div>
    
    <div class='watermark'>
      Powered by <a href='#' target='_blank' rel='noopener noreferrer' aria-label='Dibuat dengan BioBlogger'>BioBlogger</a>
    </div>
  </div>

  <!-- Hidden Widget Section for Blogger compatibility -->
  <div class='blogger-widgets'>
    <b:section id='hidden-section'/>
  </div>

</body>
</html>`;
};
