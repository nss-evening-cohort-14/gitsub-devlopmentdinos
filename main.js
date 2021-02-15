// *** Data Types *** //
const users = [
  {
    userName: "Dino Dinosaurus",
    repos: [
      {
        repoName: "ColorFlipper",
        repoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        repoTags: ["Javascript", "Learning"],
        isPinned: true,
      },
      {
        repoName: "SortingHat",
        repoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        repoTags: ["Application", "Learning", "Classwork"],
        isPinned: true,
      },
      {
        repoName: "pet-adoption",
        repoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        repoTags: ["Javascript", "Bootstrap"],
        isPinned: false,
      },
      {
        repoName: "pieBuilder",
        repoDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        repoTags: ["Learning", "Bootstrap", "Fun", "CSS"],
        isPinned: false,
      },
    ],
    projects: [
      {
        projectName: "my-goals",
        projectDescription: "I want to keep my progress on track. I am keeping my goals up to date and organized with this project.",
        updatedTime: new Date("Feb 11, 2021"),
      },
      {
        projectName: "Sorting Hat",
        projectDescription: "A little fun inside the fictional world of Herry Porter. Users can find out what social club they belong to. Fun for all ages.",
        updatedTime: new Date("Oct 31, 2020"),
      },
      {
        projectName: "Personal Bio",
        projectDescription: "Working on my personal bio page. Showing off my best work.",
        updatedTime: new Date("Jan 28,2021"),
      },
      {
        projectName: "Damage Control",
        projectDescription: "This project is a simple page to keep users calm in the event of a missed appointment. Everyone can use a damage control page.",
        updatedTime: new Date("Nov 8,2020"),
      },
      {
        projectName: "Sexy Code",
        projectDescription: "Dinos love to look their best. Dino code projects are also expected to uphold the Dino appearance standard. Sexy Dinos have sexy code.",
        updatedTime: new Date("Feb 21,2020"),
      },
    ],
    packages: [
      {
        packageName: "JavaScript",
        packageDescription: "Node Package Manager",
      },
      {
        packageName: "Ruby",
        packageDescription: "RubyGems Pacakage Manager",
      },
      {
        packageName: "Java",
        packageDescription: "Gradle build Automation Tool for Java",
      },
      {
        packageName: ".NET",
        packageDescription: "NuGet Package Management for .NET",
      },
    ],
  },
];
// *** DOM Printer *** //
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// *** HTML Builder Functions *** //

// Function to build list of created projects and print to DOM
const projectBuilder = (array) => {
  let domString = "";
  array.forEach((element) => {
    element.projects.forEach((arg) => {
      domString += `<div class="card mt-3">
                      <div class="card-header">${arg.projectName}</div>
                      <div class="card-body">
                        <p class="card-text">${arg.projectDescription}</p>
                        <p class="card-text">Updated ${arg.updatedTime}</p>
                      </div>
                      
                    </div>`;
    });
    printToDom("#projectCards", domString);
  });
};
// Profile Builder function
const profileCardBuilder = () => {
  let domString = `
  <img
  class="dino-logo img-fluid"
  src="./img/dinoprofile.png"
  alt="picture of a dinosaur"
  id="aboutMeOpen"
/>
<h3 class="h4">Dino Dinosaurus</h3>
<h5 class="text-muted">D1n0boi74</h5>
<p>
  Coding since the paleolithic era. Avoiding meteorites. Father of 34.
</p>
<div class="btn-group">
  <button class="btn btn-primary m-1 profile-btn" type="submit">Follow</button>
  <button class="btn btn-primary m-1 profile-btn" type="submit">Share</button>
  <button class="btn btn-primary m-1 profile-btn" type="submit">Like</button>
</div>
<div class="profile-followers p-2 d-flex flex-row justify-content-evenly align-items-flex-end">
<div>1.5b <span class="text-muted">followers</span></div>
<b>&middot;</b>
<div>324 <span class="text-muted">following</span></div>
<b>&middot;</b>
<div class="text-center"><span class="material-icons profile-star">star_border</span></div>47k
</div>
<ul class="profile-links">
  <li>
  <span class="material-icons material-icons-profile">
  location_on
  </span>Pangea, Earth
  </li>
  <li>
  <span class="material-icons material-icons-profile">
  email
  </span>D1n0boi74@paleo.mail
  </li>
  <li>
  <span class="material-icons material-icons-profile">
  verified
  </span> 
  Tyrannosaurus
  </li>
</ul>
<hr>
<span class="badge">PRO</span>
  `;
  printToDom("#profile-container", domString);
};
// Opens the about me section in index.html
const aboutMeOpen = (e) => {
  let domString;
  if (Object.values(e.target.classList).includes("open")) {
    domString = "";
    e.target.classList.toggle("open");
  } else {
    e.target.classList.toggle("open");
    domString = `<div class="about-me m-3 p-4" id="about"><h5 class="about-me-file-text text-muted">d1n0boi/README.md</h5>
  <h4 class="about-me-title">Hi, I'm Dino &#129430 &#129429</h4>
  <hr>
  <div class="card mb-3 p-3">
    <div class="aboutme-background-image-container card-img-top p-5">
      <h2 class="fs-1">Dino Dinosaurus</h2>
      <h4 class="text-muted">Software Engineer, Content Creator, Prehistoric Lizard</h4>
    </div>
    <div class="card-body">
    <p class="card-text">Jainosaurus Diclonius Dongbeititan Talos Ojoraptorsaurus Lufengosaurus Majungasaurus Tanystropheus Duriatitan Dryptosauroides <a href="https://en.wikipedia.org/wiki/Fukuiraptor" target="_blank">Fukuiraptor</a> Manidens Avalonia Procerosaurus Supersaurus Auroraceratops Jubbulpuria Koreaceratops Aristosuchus Gorgosaurus Itemirus Dandakosaurus Tawa Ilokelesia Anatotitan Procompsognathus Sellosaurus Onychosaurus Centemodon Rayososaurus. Jainosaurus Diclonius Dongbeititan Talos Ojoraptorsaurus Lufengosaurus Majungasaurus Tanystropheus Duriatitan Dryptosauroides Fukuiraptor Manidens Avalonia Procerosaurus Supersaurus Auroraceratops Jubbulpuria Koreaceratops  Aristosuchus <a href="https://en.wikipedia.org/wiki/Gorgosaurus" target="_blank">Gorgosaurus</a> Itemirus Dandakosaurus Tawa Ilokelesia   Anatotitan Procompsognathus Sellosaurus Onychosaurus Centemodon Rayososaurus.</p>
    </div>
    <div class="mb-3 aboutme-bottom">
      <div class="row g-0">
        <div class="col-md-4">
        <img src="./img/klipartz.com (1).png" style="width: 250px; height: 200px;" alt="chibi-rex" class="me-5">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Find me around the globe &#127758 &#127756 :</h5>
            <hr>
            <ul>
            <li>Streaming on <a href="">Twitch.tv</a></li>
            <li>Tinkering with Javascript on <a href="https://jsfiddle.net/" target="_blank">jsfiddle</a></li>
            <li>Creating exciting new tech on <a href="https://github.com/nashville-software-school" target="_blank">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  printToDom("#aboutMe", domString);
};
// Create Package Card
const createPackage = (taco) => {
  let domString = "";
  taco.forEach((element) => {
    element.packages.forEach((arg, i) => {
      domString += `<div id="${i}" class="card bg-light mb-3" style="width: 25rem">
                       <div class="card-header">${arg.packageName}</div>
                       <div class="card-body">
                       <p class="card-text">${arg.packageDescription}</p>
                       <button type="button" id="${i}" class="btn btn-secondary">Delete</button>
                       </div>
                    </div>`;
    });
    printToDom("#packageCard", domString);
  });
};
// ********** END **********

// Function to build list of pinned repositories and print to DOM
const pinnedRepoBuilder = (array) => {
  let domString = "";
  array.forEach((element) => {
    element.repos.forEach((arg, i) => {
      if (arg.isPinned) {
        domString += ` <div class="card pinned-repo-card mt-4" id="${i}">
                          <div class="card-header d-flex pinned-repo-card-header">${arg.repoName} <button type="submit" class="btn btn-outline-danger delete-btn" id="${i}">X</button></div>
                          <div class="card-body">
                           <p class="card-text">${arg.repoDescription}</p>
                           <button type="button" class="btn btn-secondary tag">${arg.repoTags[0]}</button>
                           <button type="button" class="btn btn-secondary tag">${arg.repoTags[1]}</button>
                           <button type="button" class="btn btn-secondary tag">${arg.repoTags[2]}</button>
                        </div>
                      </div>
                      `;
      }
    });
    printToDom("#pinnedRepos", domString);

    // Checks if a tag is empty/undefined and hides it if so
    const tag = document.querySelectorAll("button.tag");
    for (i = 0; i < tag.length; i++) {
      if (tag[i].innerHTML === typeof undefined) {
        tag[i].classList.add("hidden");
      }
    }
    if (document.querySelector("#pinnedRepos").innerHTML === "") {
      document.querySelector("#pinnedRepos").innerHTML =
        "You have no pinned repositories.";
    }
  });
};

// ********** END **********

// Function build list of repos

const repoBuilders = (user) => {
  let domString = "";
  user.forEach((element) => {
    element.repos.forEach((taco, i) => {
      domString += `<div class="card">
      <div class="card-header repo-ch d-flex">
      <span class="material-icons align-items-end star" id="star${i}">star_border</span>
      ${taco.repoName}
      </div>
      <div class="card-body repo-cb">
        <p class="card-text">${taco.repoDescription}</p>
        <button type="button" class="btn btn-secondary tag repo-btn">${taco.repoTags[0]}</button>
        <button type="button" class="btn btn-secondary tag repo-btn">${taco.repoTags[1]}</button>
        <button type="button" class="btn btn-secondary tag repo-btn">${taco.repoTags[2]}</button>
      </div>
    </div>
    <hr />`;
    });
    printToDom("#repoContainer", domString);

    const repoTag = document.querySelectorAll("button.tag");
    for (let i = 0; i < repoTag.length; i++) {
      if (repoTag[i].innerHTML === typeof undefined) {
        repoTag[i].classList.add("hidden");
      }
    }
  });
};
// ********** END **********

// ***  Event Handlers *** //
const deletePinnedRepo = (e) => {
  const targetType = e.target.type;
  let targetId = e.target.id;
  if (targetType === "submit") {
    users[0].repos.splice(targetId, 1);
    pinnedRepoBuilder(users);
  }
};
// Function to add pinned repos
const getPinnedRepoFormInfo = (e) => {
  e.preventDefault();
  const checkBoxes = [];
  const markedCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  for (let checkbox of markedCheckbox) {
    checkBoxes.push(checkbox.value);
  }
  const form = document.querySelector("#pinnedReposForm");
  const repoName = document.querySelector("#pinnedRepoName").value;
  const repoDescription = document.querySelector("#pinnedReposDescription")
    .value;
  const repoTags = checkBoxes;
  const isPinned = true;

  const obj = {
    repoName,
    repoDescription,
    repoTags,
    isPinned,
  };

  users[0].repos.push(obj);

  pinnedRepoBuilder(users);

  form.reset();
};
// *** Function to gather Projects form info
const getProjectsFormInfo = (e) => {
  e.preventDefault();

  const projectName = document.querySelector("#projectName").value;
  const projectDescription = document.querySelector("#projectDescription")
    .value;
  const updatedTime = new Date();

  const projectsObj = {
    projectName,
    projectDescription,
    updatedTime,
  };

  if (projectDescription.length === 0) {
    projectsObj.projectDescription = "No description";
  }

  users[0].projects.push(projectsObj);
  projectBuilder(users);
  document.querySelector("#projectsForm").reset();
};
// End Projects form info
// Start Projects search bar function

const projectSearch = (e) => {
  let newDomString = "";
  const filteredArray = [];
  const searchString = e.target.value.toLowerCase();
  const filteredUsers = users[0].projects.filter((project) => {
    return (
      project.projectName.toLowerCase().includes(searchString) ||
      project.projectDescription.toLowerCase().includes(searchString)
    );
  });
  filteredArray.push(filteredUsers);
  filteredArray.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      newDomString += `<div class="card mt-3">
                      <div class="card-header">${element[i].projectName}</div>
                      <div class="card-body">
                        <p class="card-text">${element[i].projectDescription}</p>
                        <p class="card-text">Updated ${element[i].updatedTime} minutes ago</p>
                      </div>
                    </div>`;
    }
  });
  printToDom("#projectCards", newDomString);
};
//  End Projects Search Bar function
// Start Projects Sort Feature
// Sort by Name
const sortProjectsName = () => {
  let sortNameString = "";
  const sortedNameArray = [];

  const sortedOrder = users[0].projects.sort((a, b) => {
    if (a.projectName.toLowerCase() < b.projectName.toLowerCase()) {
      return -1;
    }
    if (a.projectName.toLowerCase() > b.projectName.toLowerCase()) {
      return 1;
    } 
    return 0;
  });
  

  sortedNameArray.push(sortedOrder);
  sortedNameArray.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      sortNameString += `<div class="card mt-3">
                      <div class="card-header">${element[i].projectName}</div>
                      <div class="card-body">
                        <p class="card-text">${element[i].projectDescription}</p>
                        <p class="card-text">Updated ${element[i].updatedTime}</p>
                      </div>
                    </div>`;
    };
  printToDom("#projectCards", sortNameString);
  });
};
// Sort by Time Updated Oldest first
const sortProjectsTime = (e) => {
  let sortTimeString = "";
  const sortedTimeArray = [];

  const buttonId = e.target.id;

  if (buttonId === "sortTimeByOldest") {
    const sortedOrder = users[0].projects.sort((a, b) =>{
      return a.updatedTime - b.updatedTime;
    });
    sortedTimeArray.push(sortedOrder);
    sortedTimeArray.forEach((element) => {
      for (let i = 0; i < element.length; i++) {
        sortTimeString += `<div class="card mt-3">
                            <div class="card-header">${element[i].projectName}</div>
                            <div class="card-body">
                            <p class="card-text">${element[i].projectDescription}</p>
                            <p class="card-text">Updated ${element[i].updatedTime}</p>
                            </div>
                            </div>`;
      };
      printToDom("#projectCards", sortTimeString);
    });
  } 
  if (buttonId === "sortTimeByNewest") {
    const sortedOrder = users[0].projects.sort((a, b) =>{
      return b.updatedTime - a.updatedTime;
    });
    sortedTimeArray.push(sortedOrder);
    sortedTimeArray.forEach((element) => {
      for (let i = 0; i < element.length; i++) {
        sortTimeString += `<div class="card mt-3">
                          <div class="card-header">${element[i].projectName}</div>
                          <div class="card-body">
                          <p class="card-text">${element[i].projectDescription}</p>
                          <p class="card-text">Updated ${element[i].updatedTime}</p>
                          </div>
                          </div>`;
      };
      printToDom("#projectCards", sortTimeString);
    });
  }
};
// End Project Sort Feature
// Function to submit new Repo Form
const newRepoForm = (e) => {
  e.preventDefault();

  const repoName = document.querySelector("#repoName").value;
  const repoDescription = document.querySelector("#repoDescription").value;
  const isPinned = false;
  let repoTag1 = document.querySelector("#tag1").value;
  let repoTag2 = document.querySelector("#tag2").value;
  let repoTag3 = document.querySelector("#tag3").value;
  let repoTags = [];

  // Conditionals to check if input tags are populated
  if (repoTag1.length > 0) {
    repoTags.push(repoTag1);
  }

  if (repoTag2.length > 0) {
    repoTags.push(repoTag2);
  }

  if (repoTag3.length > 0) {
    repoTags.push(repoTag3);
  }

  // Store form data in obj
  const repoObj = {
    repoName,
    repoDescription,
    repoTags,
    isPinned,
  };
  users[0].repos.push(repoObj);

  // Re-render the repos on DOM //
  repoBuilders(users);

  // Reset the form //
  document.querySelector("form").reset();
  repoStar();
};

// Repos Searchbar Builder Function
const repoSearchBuilder = (taco) => {
  let newDomString = "";
  taco.forEach((element, i) => {
    newDomString += `<div class="card">
  <div class="card-header repo-ch">
  <span class="material-icons align-items-end star" id="star${i}">star_border</span>
  ${element.repoName}
  </div>
  <div class="card-body repo-cb">
    <p class="card-text">${element.repoDescription}</p>
    <button type="button" class="btn btn-secondary tag repo-btn">${element.repoTags[0]}</button>
    <button type="button" class="btn btn-secondary tag repo-btn">${element.repoTags[1]}</button>
    <button type="button" class="btn btn-secondary tag repo-btn">${element.repoTags[2]}</button>
  </div>
</div>
<hr />`;
  });
  printToDom("#repoContainer", newDomString);
  const repoTag = document.querySelectorAll("button.tag");
  for (let i = 0; i < repoTag.length; i++) {
    if (repoTag[i].innerHTML === typeof undefined) {
      repoTag[i].classList.add("hidden");
    }
  }
};

// Function to search and filter through repos
const repoSearch = (e) => {
  const searchResult = e.target.value.toLowerCase();
  const filteredRepos = users[0].repos.filter((repo) => {
    return (
      repo.repoName.toLowerCase().includes(searchResult) ||
      repo.repoDescription.toLowerCase().includes(searchResult)
    );
  });
  repoSearchBuilder(filteredRepos);
  repoStar();
};

// Function to target the Repo Form Star
const repoStar = () => {
  const repoStarId = document.querySelectorAll(".material-icons");
  for (let i = 0; i < repoStarId.length; i++) {
    repoStarId[i].addEventListener("click", function () {
      if (repoStarId[i].innerHTML === "star_border") {
        repoStarId[i].innerHTML = "star";
      } else {
        repoStarId[i].innerHTML = "star_border";
      }
    });
  }
};
// Search Packages
const searchPackages = (e) => {
  let domString = "";
  const packArray = [];
  const searchCriteria = e.target.value.toLowerCase();
  const filterPackages = users[0].packages.filter((package) => {
    return (
      package.packageName.toLowerCase().includes(searchCriteria) ||
      package.packageDescription.toLowerCase().includes(searchCriteria)
    );
  });

  packArray.push(filterPackages);
  packArray.forEach((element) => {
    for (let i = 0; i < element.length; i++)
      domString += `<div class="card border-dark mb-3" style="width: 25rem">
    <div class="card-header">${element[i].packageName}</div>
    <div class="card-body">
    <p class="card-text">${element[i].packageDescription}</p>
    <button type="button" class="btn btn-secondary">Delete</button>
    </div>
 </div>`;
  });
  printToDom("#packageCard", domString);
};

// Get Package Form Info
const packageForm = (e) => {
  e.preventDefault();

  const packageName = document.querySelector("#package-add").value;
  const packageDescription = document.querySelector("#option-package").value;

  const packObj = {
    packageName,
    packageDescription,
  };

  users[0].packages.push(packObj);

  createPackage(users);

  document.querySelector("#package-form").reset();
};
// End Get Package Form Info

// Delete Package
const deletePackage = (e) => {
  const targetType = e.target.type;
  let targetId = e.target.id;

  if (targetType === "button") {
    users[0].packages.splice(targetId, 1);
    createPackage(users);
  }
};

// *** Event Listeners *** //

// Package Event Listener
const handleButtonPackages = () => {
  document
    .querySelector("#package-form")
    .addEventListener("submit", packageForm);
  document
    .querySelector("#packageCard")
    .addEventListener("click", deletePackage);
  document
    .querySelector("#packSearch")
    .addEventListener("keyup", searchPackages);
};

// Index Event Listener //
const handleButtonEventsIndex = () => {
  document
    .querySelector("#pinnedRepos")
    .addEventListener("click", deletePinnedRepo);
  document
    .querySelector("#pinnedReposForm")
    .addEventListener("submit", getPinnedRepoFormInfo);
  document.querySelector("#aboutMeOpen").addEventListener("click", aboutMeOpen);
};
// Repos Event Listener //
const handleButtonEventsRepos = () => {
  document.querySelector("#reposForm").addEventListener("submit", newRepoForm);
  document.querySelector("#searchBar").addEventListener("keyup", repoSearch);
};

// Projects Event Listener //
const handleButtonEventsProjects = () => {
  document
    .querySelector("#projectsForm")
    .addEventListener("submit", getProjectsFormInfo);
  document
    .querySelector("#projSearch")
    .addEventListener("keyup", projectSearch);
  document.querySelector("#sortName").addEventListener("click", sortProjectsName);
  document.querySelector("#sortTimeByOldest").addEventListener("click", sortProjectsTime);
  document.querySelector("#sortTimeByNewest").addEventListener("click", sortProjectsTime);
};
// *** Initializers *** //
const init = () => {
  if (window.location.pathname === "/packages.html") {
    createPackage(users);
    handleButtonPackages();
    profileCardBuilder();
  } else if (window.location.pathname === "/repositories.html") {
    repoBuilders(users);
    handleButtonEventsRepos();
    profileCardBuilder();
    repoStar();
  } else if (window.location.pathname === "/projects.html") {
    projectBuilder(users);
    handleButtonEventsProjects();
    profileCardBuilder();
  } else {
    profileCardBuilder();
    pinnedRepoBuilder(users);
    handleButtonEventsIndex();
  }
};

init();
