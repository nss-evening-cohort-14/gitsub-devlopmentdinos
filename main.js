
// *** Data Types *** //


// *** DOM Printer *** //


// *** HTML Builder Functions *** //

// Function to build list of pinned repositories and print to DOM
const pinnedRepoBuilder = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += ` <div class="card pinned-repo-card mt-4">
                      <div class="card-header">Repo Name</div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus quae fugit, perferendis dignissimos repudiandae consequuntur soluta similique expedita excepturi molestiae eaque adipisci, fuga sapiente facere doloremque eius laudantium maiores.</p>
                         <button type="button" class="btn btn-secondary">Repo Tag</button>
                      </div>
                    </div>
                          `;
  });
  printToDom('#pinnedRepos', domString);
};
// ********** END **********

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

// ***  Event Handlers *** //


// *** Event Listeners *** //


// *** Initializers *** //
