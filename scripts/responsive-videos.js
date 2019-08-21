/**
 * Responsive video iframes
 *
 * Usage:
 *   import {responsiveVideos} from '@elkfox/shopify-theme/scripts/responsive-videos';
 *
 *   responsiveVideos();
 */

export function responsiveVideos() {
  document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.getElementsByTagName('iframe');

    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];
      const players = /www.youtube.com|player.vimeo.com/;

      if (iframe.src.search(players) > 0) {
        const videoRatio = (iframe.height / iframe.width) * 100;
        const wrap = document.createElement('div');
        const iframeParent = iframe.parentNode;

        wrap.className = 'responsive-video';
        wrap.style.paddingTop = `${videoRatio}%`;
        iframeParent.insertBefore(wrap, iframe);
        wrap.appendChild(iframe);
      }
    }
  });
}
