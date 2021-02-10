console.log('CONNECTED!');


const packageForm = (e) => {
  e.preventDefault();

  const packageName = document.querySelector('#package-form').value;
  const packageDescription = document.querySelector('#option-package').value;
  


  document.querySelector('form-control').reset();
}


function createPackage() {
  let domString = "";
  users.forEach((element) => {
    domString += `<div class="card border-dark mb-3" style="width: 25rem">
    <div class="card-header">Package Name</div>
    <div class="text">${element.packageName}</div>
    <div class="card-body">
      <p class="card-text">Package Description</p>
      <div class="text">${element.packageDescription}</div>
      <button type="button" class="btn btn-secondary">Delete</button>
    </div>
  </div>
  <hr />`
  })
};
