/**
 * Responsive video iframes
 *
 * Usage: import '../tools/responsive-videos';
 */

function responsiveVideos() {
  const iframes = document.getElementsByTagName('iframe');
  for (let i = 0; i < iframes.length; i++) {
    const iframe = iframes[i];
    const players = /www.youtube.com|player.vimeo.com/;
    if (iframe.src.search(players) > 0) {
      const videoRatio = (iframe.height / iframe.width) * 100;
      const wrap = document.createElement('div');
      wrap.className = 'responsive-video';
      wrap.style.paddingTop = `${videoRatio}%`;
      const iframeParent = iframe.parentNode;
      iframeParent.insertBefore(wrap, iframe);
      wrap.appendChild(iframe);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  responsiveVideos();
});
