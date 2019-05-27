/**
 * Instagram feed - VERY alpha version
 *
 * Requires Instagram token, see http://instagram.pixelunion.net
 *
 * Usage:
 *   - Javascript: instagramFeed('instagramFeed');
 *   - HTML: <div id="instagramFeed" data-token="[YOUR TOKEN]" data-post-count="6"></div>
 */

 function instagramFeed(container) {
   const feedContainer = document.getElementById(container);

   if (feedContainer !== null) {
     const options = {
       token: feedContainer.getAttribute('data-token'),
       postCount: feedContainer.getAttribute('data-post-count'),
     };

     window.fetchPosts = function(data) {
       Object.keys(data.data).forEach((item) => {
         const instagramPost = data.data[item];
         feedContainer.innerHTML +=
           `<li>
             <a href="${instagramPost.link}" target="blank" rel="noopener">
               <img src="${instagramPost.images.standard_resolution.url}">
             </a>
           </li>`;
       });
     };

     const feedScript = document.createElement('script');
     feedScript.setAttribute('src', `//api.instagram.com/v1/users/self/media/recent?access_token=${options.token}&count=${options.postCount}&callback=fetchPosts`);
     document.body.appendChild(feedScript);
   }
 }
