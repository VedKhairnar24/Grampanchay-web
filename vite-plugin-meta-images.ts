import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Vite plugin that updates `og:image` and `twitter:image` meta tags
 * to point to the app's OpenGraph image with the detected deployment origin.
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-meta-images',
    transformIndexHtml(html) {
      const baseUrl = getDeploymentUrl();
      if (!baseUrl) {
        log('[meta-images] no deployment domain found, skipping meta tag updates');
        return html;
      }

      // Check if opengraph image exists in public directory
      const publicDir = path.resolve(process.cwd(), 'client', 'public');
      const opengraphPngPath = path.join(publicDir, 'opengraph.png');
      const opengraphJpgPath = path.join(publicDir, 'opengraph.jpg');
      const opengraphJpegPath = path.join(publicDir, 'opengraph.jpeg');

      let imageExt: string | null = null;
      if (fs.existsSync(opengraphPngPath)) {
        imageExt = 'png';
      } else if (fs.existsSync(opengraphJpgPath)) {
        imageExt = 'jpg';
      } else if (fs.existsSync(opengraphJpegPath)) {
        imageExt = 'jpeg';
      }

      if (!imageExt) {
        log('[meta-images] OpenGraph image not found, skipping meta tag updates');
        return html;
      }

      const imageUrl = `${baseUrl}/opengraph.${imageExt}`;

      log('[meta-images] updating meta image tags to:', imageUrl);

      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
        `<meta property="og:image" content="${imageUrl}" />`
      );

      html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
        `<meta name="twitter:image" content="${imageUrl}" />`
      );

      return html;
    },
  };
}

function ensureUrlWithProtocol(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

function getDeploymentUrl(): string | null {
  // Keep backward compatibility with Replit vars if present
  if (process.env.REPLIT_INTERNAL_APP_DOMAIN) {
    const url = ensureUrlWithProtocol(process.env.REPLIT_INTERNAL_APP_DOMAIN);
    log('[meta-images] using internal app domain:', url);
    return url;
  }

  if (process.env.REPLIT_DEV_DOMAIN) {
    const url = ensureUrlWithProtocol(process.env.REPLIT_DEV_DOMAIN);
    log('[meta-images] using dev domain:', url);
    return url;
  }

  // Vercel sets `VERCEL_URL` without protocol
  if (process.env.VERCEL_URL) {
    const url = ensureUrlWithProtocol(process.env.VERCEL_URL);
    log('[meta-images] using Vercel URL:', url);
    return url;
  }

  // Common generic vars used by various hosts
  const generic = process.env.PUBLIC_URL || process.env.SITE_URL || process.env.DEPLOYMENT_URL || process.env.APP_URL;
  if (generic) {
    const url = ensureUrlWithProtocol(generic);
    log('[meta-images] using generic deployment URL:', url);
    return url;
  }

  return null;
}

function log(...args: any[]): void {
  if (process.env.NODE_ENV === 'production') {
    console.log(...args);
  }
}
