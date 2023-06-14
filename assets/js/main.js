// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

/*=============================================
=            SIDEBAR            
=============================================*/

// Remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

/*=============================================
=            Search Mountain           
=============================================*/
// Mendapatkan elemen input pencarian gunung
const mountainSearch = document.getElementById("mountain-search");

// Mendapatkan elemen-elemen feed gunung
const feeds = Array.from(document.getElementsByClassName("feed"));

// Fungsi untuk mencari gunung
const searchMountain = () => {
  const val = mountainSearch.value.toLowerCase();
  feeds.forEach((feed) => {
    let name = feed.querySelector("h3").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      feed.style.display = "flex";
    } else {
      feed.style.display = "none";
    }
  });
};

// Menambahkan event listener pada input pencarian gunung
mountainSearch.addEventListener("keyup", searchMountain);

// Menambahkan event listener pada dokumen untuk menangani klik di luar area pencarian
document.addEventListener("click", (event) => {
  if (!event.target.closest("#mountain-search")) {
    mountainSearch.value = "";
    feeds.forEach((feed) => {
      feed.style.display = "flex";
    });
  }
});

//  Membersihkan search dan menunjukan semua gunung
document.addEventListener("click", (event) => {
  if (!event.target.closest("#mountain-search")) {
    mountainSearch.value = "";
    mountain.forEach((feed) => {
      feed.style.display = "flex";
    });
  }
});

/*=============================================
=                  SEARCH MOUNTAIN           
=============================================*/
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  const mountainNames = document.querySelectorAll(".feeds h3");

  for (let i = 0; i < mountainNames.length; i++) {
    const mountainName = mountainNames[i].textContent.toLowerCase();
    const feed = mountainNames[i].closest(".feed");

    if (mountainName.includes(searchTerm)) {
      feed.style.display = "block";
    } else {
      feed.style.display = "none";
    }
  }
});
