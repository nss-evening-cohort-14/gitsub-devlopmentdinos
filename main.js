console.log('CONNECTED!');

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
]

// *** DOM Printer *** //
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

}

// *** HTML Builder Functions *** //
// Get Package Form Info
const packageForm = (e) => {
  e.preventDefault();

  const packName = document.querySelector('#package-form').value;
  const packDescription = document.querySelector('#option-package').value;
  
const obj = {
  packName,
  packDescription,
};

users.push(obj);
createPackage(users.packages);

  document.querySelector('#add-package').addEventListener('click', packageForm);
  document.querySelector('form-control').reset();
};
// End Get Package Form Info

// Create Package Card
const createPackage = (taco) => {
  let domString = "";
  taco.forEach((element) => {
    element.packages.forEach((arg) => {
    domString += `<div class="card border-dark mb-3" style="width: 25rem">
    <div class="card-header">Package Name</div>
    <div class="text">${arg.packageName}</div>
    <div class="card-body">
      <p class="card-text">Package Description</p>
      <div class="text">${arg.packageDescription}</div>
      <button type="button" class="btn btn-secondary">Delete</button>
    </div>
  </div>
  <hr />`
      });
      printToDom('#package-card', domString);
  });

};

// ***  Event Handlers *** //


// *** Event Listeners *** //


// *** Initializers *** //
const init = () => {

}

init();
