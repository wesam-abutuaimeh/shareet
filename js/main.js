const logoutBtn = document.getElementById(".logout-btn");
logoutBtn.addEventListener("click", function () {
  // logout action here,
  // making an API call to log the user out.
});

var currentPage = 1;
var totalPages = 10;

document
  .querySelector(".previous-button")
  .addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updatePager();
    }
  });

document.querySelector(".next-button").addEventListener("click", function () {
  if (currentPage < totalPages) {
    currentPage++;
    updatePager();
  }
});

function updatePager() {
  document.querySelector(".page-number").textContent = currentPage;
  if (currentPage === 1) {
    document.querySelector(".previous-button").disabled = true;
  } else {
    document.querySelector(".previous-button").disabled = false;
  }
  if (currentPage === totalPages) {
    document.querySelector(".next-button").disabled = true;
  } else {
    document.querySelector(".next-button").disabled = false;
  }
}

updatePager();
