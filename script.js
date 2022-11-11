let input = document.getElementById("user_search");
let pfpDisplay = document.getElementById("pfp_div");
let namEl = document.getElementById("name");
let joinDate = document.getElementById("join_date");
let user = document.getElementById("username");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let userLocation = document.getElementById("location");
let twitter = document.getElementById("twitter");
let blog = document.getElementById("blog");
let company = document.getElementById("company");

async function getUser() {
  let userName = input.value;
  const url = `https://api.github.com/users/${userName}`;
  let response = await fetch(url);
  let userInfo = await response.json();
  return userInfo;
}
function search() {
  getUser().then(
    (userInfo) =>
      (pfpDisplay.innerHTML = `<img id="pfp" src="${userInfo.avatar_url}" />`) //(
  );
  getUser().then((userInfo) => (namEl.textContent = userInfo.name));
  getUser().then((userInfo) => (user.textContent = `@${userInfo.login}`));
  getUser().then((userInfo) => (bio.textContent = userInfo.bio));
  getUser().then(
    (userInfo) =>
      (repos.innerHTML = `<div class="rff_head">Repos</div><div class="rff_value">${userInfo.public_repos}</div>`)
  );
  getUser().then(
    (userInfo) =>
      (followers.innerHTML = `<div class="rff_head">Followers</div><div class="rff_value">${userInfo.followers}</div>`)
  );
  getUser().then(
    (userInfo) =>
      (following.innerHTML = `<div class="rff_head">Following</div><div class="rff_value">${userInfo.following}</div>`)
  );
  getUser().then(
    (userInfo) =>
      (userLocation.innerHTML = `        <svg
          class="octicon octicon-location"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
          ></path>
        </svg><div class="ltbc_value">${userInfo.location}</div>`)
  );
  getUser().then(
    (userInfo) =>
      (twitter.innerHTML = `<svg 
      viewBox="328 355 335 276" 
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg">
  <path d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
    style="fill:#3BA9EE;"/>
</svg><div class="ltbc_value">${userInfo.twitter_username}</div>`)
  );
  getUser().then(
    (userInfo) =>
      (blog.innerHTML = `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
    <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
</svg><a href="${userInfo.blog}" class="ltbc_value">${userInfo.blog}</a>`)
  );
  getUser().then(
    (userInfo) =>
      (company.innerHTML = `<svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg><div class="ltbc_value">${userInfo.company}</div>`)
  );
  input.value = "";
}
