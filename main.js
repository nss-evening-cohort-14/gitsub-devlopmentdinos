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
const projectBuilder = (array) => {
  let domString = '';

array.forEach ((element) => {
  domString += `<div class="card text-center my-2" style="width: 14rem;" id=${i}>
        <img src="${element.crestImgUrl}" class="card-img-top object-fit: contain" alt="Hogwarts House Crest">
        <div class="card-body">
          <h4 class="card-title">${element.house}</h4>
          <h5 class="card-student">${element.name}</h5>
          <p class="card-attributes">${element.attribute}</p>
          <button type="button" id=${taco[i].id} class="btn btn-primary">Expel</button>
        </div>
      </div>`;
  });
  printToDom('#student-cards', domString);
};

// ***  Event Handlers *** //


// *** Event Listeners *** //


// *** Initializers *** //
const init = () => {

}

init();
