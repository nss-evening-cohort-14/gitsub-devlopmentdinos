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
//   const packName = document.querySelector('#package-form').value;
//   const packDescription = document.querySelector('#option-package').value;
  
// const obj = {
//   packName,
//   packDescription,
// };

// users.push(obj);
// // createPackage(users.packages);

//   document.querySelector('#add-package').addEventListener('click', packageForm);
//   document.querySelector('form-control').reset();
// };
// End Get Package Form Info

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
      console.log(tag[i].innerHTML);
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
        <button type="button" class="btn btn-secondary">Repo Tag</button>
        <button type="button" class="btn btn-secondary">Repo Tag</button>
        <button type="button" class="btn btn-secondary">Repo Tag</button>
      </div>
    </div>
    <hr />`
    })
    printToDom('#repoContainer', domString);
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

// Get Package Form Info
// const packageForm = (e) => {
//   e.preventDefault();

//   const packName = document.querySelector('#package-form').value;
//   const packDescription = document.querySelector('#option-package').value;
  
// const obj = {
//   packName,
//   packDescription,
// };

// users.push(obj);
// // createPackage(users.packages);

//   document.querySelector('#add-package').addEventListener('click', packageForm);
//   document.querySelector('form-control').reset();
// };
// End Get Package Form Info
// *** Event Listeners *** //

  const handleButtonEvents = () => {
    document.querySelector('#pinnedReposForm').addEventListener('submit',getPinnedRepoFormInfo);
  };


// *** Initializers *** //
const init = () => {
    if (window.location.pathname === "/packages.html") {
    createPackage(users);
    } else if (window.location.pathname === "/repositories.html") {
    repoBuilders(users);
    } else if (window.location.pathname === '/projects.html') {
    projectBuilder(users);
    } else {
    pinnedRepoBuilder(users);
    handleButtonEvents();
    }
  };

init();
