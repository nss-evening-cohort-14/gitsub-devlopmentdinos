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
        packageName: 'Package 1'
        packageDescription: 'Description 1'
      },
      {
        packageName: 'Package 2'
        packageDescription: 'Description 2'
      },
      {
        packageName: 'Package 3'
        packageDescription: 'Description 3'
      },
      {
        packageName: 'Package 44'
        packageDescription: 'Description 4'
      },
    ]
  }
]

// *** DOM Printer *** //
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

}

// *** HTML Builder Functions *** //


// ***  Event Handlers *** //


// *** Event Listeners *** //


// *** Initializers *** //
