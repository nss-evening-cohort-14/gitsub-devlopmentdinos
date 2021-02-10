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
  
  const form = document.querySelector('form');
};
