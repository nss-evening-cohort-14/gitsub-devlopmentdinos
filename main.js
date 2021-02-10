
// *** Data Types *** //
const users = [ 
  {
    userName: 'Dino Dinosaurus',
    repos: [
      {
      repoName: 'Repo 1',
      repoDescription: 'Repo Description',
      repoTags: ['Tag 1', 'Tag 2', 'Tag 3'],
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
        projectDescription: 'Description 1'
      }, 
      {
        projectName: 'Project 2',
        projectDescription: 'Description 2'
      }, 
      {
        projectName: 'Project 3',
        projectDescription: 'Description 3'
      }, 
      {
        projectName: 'Project 4',
        projectDescription: 'Description 4'
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

// Function to build list of pinned repositories and print to DOM
const pinnedRepoBuilder = (array) => {
  let domString = '';
  array.forEach((element) => {
    element.repos.forEach((arg) => {
      if (arg.isPinned) {
        domString += ` <div class="card pinned-repo-card mt-4">
                          <div class="card-header">${arg.repoName}</div>
                          <div class="card-body">
                           <p class="card-text">${arg.repoDescription}</p>
                           <button type="button" class="btn btn-secondary">Repo Tag</button>
                        </div>
                      </div>
                      `;
      } 
    });
    printToDom('#pinnedRepos', domString);
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
  
  const form = document.querySelector('#pinnedReposForm');
  const name = document.querySelector('#pinnedRepoName').value;
  const description = document.querySelector('#pinnedReposDescription').value;
  const pinned = true;

  const obj = {
    name,
    description,
    pinned,
  };

  users.push(obj);

  pinnedRepoBuilder(users.repos);

  form.reset();
};


// *** Event Listeners *** //


// *** Initializers *** //
const init = () => {
if (window.location.pathname === '/index.html')
pinnedRepoBuilder(users);
else if (window.location.pathname === '/repositories.html')
 repoBuilders(users);
};

init();
