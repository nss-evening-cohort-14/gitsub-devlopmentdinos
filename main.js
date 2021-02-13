// *** Data Types *** //
const users = [ 
  {
    userName: 'Dino Dinosaurus',
    repos: [
      {
      repoName: 'Repo 1',
      repoDescription: 'Repo Description',
      repoTags: ['Tag 2', 'Tag 3'],
      isPinned: true
    },
    {
      repoName: 'Repo 2',
      repoDescription: '2nd Description',
      repoTags: ['Tag Button 1', 'Tag Button 2'],
      isPinned: true
    },
    {
      repoName: 'Repo 3',
      repoDescription: '3rd descript',
      repoTags: ['Tag 1', 'Tag 2'],
      isPinned: false
    },
    {
      repoName: 'Repo 4',
      repoDescription: '4th descript',
      repoTags: ['Tag 1', 'Tag 2'],
      isPinned: false
    },
  ],
    projects: [
      {
        projectName: 'Project 1',
        projectDescription: 'Fancy project'
      }, 
      {
        projectName: 'Project 2',
        projectDescription: 'Fancier project'
      }, 
      {
        projectName: 'Project 3',
        projectDescription: 'Fantastic project'
      }, 
      {
        projectName: 'Project 4',
        projectDescription: 'Boss project'
      }, 
      {
        projectName: 'Project 5',
        projectDescription: 'Awesome project'
      },
    ],
    packages: [
      {
        packageName: 'Package 1',
        packageDescription: 'Description 1'
      },
      {
        packageName: 'Package 2',
        packageDescription: 'Description 2'
      },
      {
        packageName: 'Package 3',
        packageDescription: 'Description 3'
      },
      {
        packageName: 'Package 4',
        packageDescription: 'Description 4'
      },
    ]
  },
];

// *** DOM Printer *** //
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

};

// *** HTML Builder Functions *** //
// Get Package Form Info
// const packageForm = (e) => {
//   e.preventDefault();

// Function to build list of created projects and print to DOM
const projectBuilder = (array) => {
  let domString = '';
  array.forEach ((element) => {
    element.projects.forEach((arg) => {
      domString += `<div class="card mt-3">
                      <div class="card-header">${arg.projectName}</div>
                      <div class="card-body">
                        <p class="card-text">${arg.projectDescription}</p>
                      </div>
                    </div>`;
    });
    printToDom('#projectCards', domString);
  });
};
// Profile Builder function
const profileCardBuilder = () => {
  let domString = `
  <img
  class="dino-logo img-fluid"
  src="./dinoslogo.jpg"
  alt="picture of a dinosaur"
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
<ul class="profile-links">
  <li>
    <img
      class="icon-image"
      src="./iconfinder_location_115718.png"
      alt=""
    />Pangea, Earth
  </li>
  <li>
    <img
      class="icon-image"
      src="./iconfinder_mail_115714.png"
      alt=""
    />D1n0boi74@paleogeographic.mail
  </li>
  <li>
    <img
      class="icon-image"
      src="./iconfinder_Dinosaur_367624.png"
      alt=""
    />Genus: Tyrannosaurus
  </li>
</ul>

  `;
  printToDom('#profile-container', domString);
};

// Create Package Card
const createPackage = (taco) => {
  let domString = "";
  taco.forEach((element) => {
      element.packages.forEach((arg) => {
      domString += `<div class="card border-dark mb-3" style="width: 25rem">
                       <div class="card-header">${arg.packageName}</div>
                       <div class="card-body">
                       <p class="card-text">${arg.packageDescription}</p>
                       <button type="button" class="btn btn-secondary">Delete</button>
                       </div>
                    </div>`
    });
       printToDom('#packageCard', domString);
  });
};
// ********** END **********

// Function to build list of pinned repositories and print to DOM
const pinnedRepoBuilder = (array) => {
  let domString = '';
  array.forEach((element) => {
    element.repos.forEach((arg, i) => {
      if (arg.isPinned) {
        domString += ` <div class="card pinned-repo-card mt-4">
                          <div class="card-header">${arg.repoName}</div>
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
    printToDom('#pinnedRepos', domString);
   
    // Checks if a tag is empty/undefined and hides it if so
    const tag = document.querySelectorAll("button.tag");
    for(i = 0; i < tag.length; i++) {
      if (tag[i].innerHTML === typeof undefined) {
        tag[i].classList.add('hidden');
      }
      
    }
    
  });
};
  
// ********** END **********

// Function build list of repos

const repoBuilders = (user) => {
  let domString = '';
  user.forEach(element => {
    element.repos.forEach(taco => {
      domString += `<div class="card">
      <div class="card-header">${taco.repoName}</div>
      <div class="card-body">
        <p class="card-text">${taco.repoDescription}</p>
        <button type="button" class="btn btn-secondary tag">${taco.repoTags[0]}</button>
        <button type="button" class="btn btn-secondary tag">${taco.repoTags[1]}</button>
        <button type="button" class="btn btn-secondary tag">${taco.repoTags[2]}</button>
      </div>
    </div>
    <hr />`
    })
    printToDom('#repoContainer', domString);

    const repoTag = document.querySelectorAll("button.tag");
    for (let i=0; i < repoTag.length; i++) {
      if (repoTag[i].innerHTML === typeof undefined) {
        repoTag[i].classList.add('hidden');
      }
    }
  })
  };
// ********** END **********
  

// ***  Event Handlers *** //

// Function to add pinned repos
const getPinnedRepoFormInfo = (e) => {
  e.preventDefault();
    const checkBoxes = [];
    const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    
    for (let checkbox of markedCheckbox) {
        checkBoxes.push(checkbox.value);
    }

  const form = document.querySelector('#pinnedReposForm');
  const repoName = document.querySelector('#pinnedRepoName').value;
  const repoDescription = document.querySelector('#pinnedReposDescription').value;
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

  const projectName = document.querySelector('#projectName').value;
  const projectDescription = document.querySelector('#projectDescription').value;
 
  const projectsObj = {
    projectName,
    projectDescription,
  };

  if (projectDescription.length === 0) {
    projectsObj.projectDescription = 'No description';
  };
  
  users[0].projects.push(projectsObj);
  projectBuilder(users);
  document.querySelector("#projectsForm").reset();
};
// End Projects form info
// Start Projects search bar function

const projectSearch = (e) => {
  let newDomString = '';
  const filteredArray = [];
  const searchString = e.target.value.toLowerCase();
  const filteredUsers = users[0].projects.filter( project => {
    return (
      project.projectName.toLowerCase().includes(searchString) || 
      project.projectDescription.toLowerCase().includes(searchString)
      
    );
    
  });
  filteredArray.push(filteredUsers);
  filteredArray.forEach ((element) => {
    for (let i = 0; i < element.length; i++) {
      newDomString += `<div class="card mt-3">
                      <div class="card-header">${element[i].projectName}</div>
                      <div class="card-body">
                        <p class="card-text">${element[i].projectDescription}</p>
                      </div>
                    </div>`;
    }
    });
    printToDom('#projectCards', newDomString);
};

// Function to submit new Repo Form 
const newRepoForm = (e) => {
  e.preventDefault();

  const repoName = document.querySelector('#repoName').value;
  const repoDescription = document.querySelector('#repoDescription').value;
  const repoTags = ['Test'];
  const isPinned = false;

  // Store form data in obj

  const repoObj = {
    repoName,
    repoDescription,
    repoTags,
    isPinned
  }
  users[0].repos.push(repoObj);

  // Re-render the repos on DOM //
  repoBuilders(users);

  // Reset the form //
  document.querySelector('form').reset();
}

// Get Package Form Info
const packageForm = (e) => {
  e.preventDefault();
  
  const packageName = document.querySelector('#package-add').value;
  const packageDescription = document.querySelector('#option-package').value;
  
const packObj = {
  packageName,
  packageDescription,
};

users[0].packages.push(packObj);

createPackage(users);

  document.querySelector('#package-form').reset();
};
// End Get Package Form Info

// *** Event Listeners *** //

// Package Event Listener
  const handleButtonPackages = () => {
    document.querySelector('#package-form').addEventListener('submit', packageForm);
  };

  // Index Event Listener //
const handleButtonEventsIndex = () => {
  document.querySelector('#pinnedReposForm').addEventListener('submit',getPinnedRepoFormInfo);
};
  // Repos Event Listener //
const handleButtonEventsRepos = () => {
  document.querySelector('#reposForm').addEventListener('submit', newRepoForm)
};  

  // Projects Event Listener //
const handleButtonEventsProjects = () => {
  document.querySelector('#projectsForm').addEventListener('submit', getProjectsFormInfo);
  document.querySelector('#projSearch').addEventListener('keyup', projectSearch);
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
    } else if (window.location.pathname === '/projects.html') {
    projectBuilder(users);
    handleButtonEventsProjects();
    profileCardBuilder();
    } else {
    pinnedRepoBuilder(users);
    handleButtonEventsIndex();
    profileCardBuilder();
    }
  };

init();
