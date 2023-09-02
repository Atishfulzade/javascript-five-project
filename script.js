const friends = document.querySelectorAll(".friend");

friends.forEach((item) => {
  item.addEventListener("click", function () {
    const container = this.closest(".container_one");
    const friendstatus = container.querySelector(".status");

    if (!container) return; 

    if (container.classList.contains("friend-added")) {
      friendstatus.innerHTML = "Stranger";
      item.innerHTML = "Add friend";
      item.style.backgroundColor = "#7c096d";
      friendstatus.style.color = "black";
      container.classList.remove("friend-added");
    } else {
      friendstatus.innerHTML = "Friend";
      item.innerHTML = "Remove friend";
      item.style.backgroundColor = "red";
      friendstatus.style.color = "black";
      container.classList.add("friend-added");
    }
  });
});

const photo = document.querySelector(".box img");
const like = document.querySelector(".like");
const below = document.querySelector(".below");
// const mystyle={ "font-variation-settings":
//     'FILL' =1}
photo.addEventListener("dblclick", function () {
  like.style.scale = 1;
  like.style.opacity = 0.9;
  below.style.fontVariationSettings = "FILL =1";
  below.style.color = "red";
  // below.style.backgroundColor="red"
  setTimeout(function () {
    like.style.opacity = 0;
  }, 2000);
});

// section three

const cursor = document.querySelector(".cursor");
const screenpage = document.querySelector(".screenpage");
screenpage.addEventListener("mousemove", function (point) {
  cursor.style.left = point.x + "px";
  cursor.style.top = point.y + "px";
  //     console.log(point.clientX)
  //  cursor.style.transform=`translate(${point.clientX})px (${point.clientY})px`
});

const movie = document.querySelectorAll(".moviename");

movie.forEach((ele) => {
  const image = document.querySelector("#image");
  ele.addEventListener("mouseenter", function () {
    ele.childNodes[3].style.opacity = 1;
  });
  ele.addEventListener("mouseleave", function () {
    ele.childNodes[3].style.opacity = 0;
  });
  ele.addEventListener("mousemove", function (pt) {
    ele.childNodes[3].style.left = pt.x + "px";
    ele.childNodes[3].style.top = pt.y + "px";
  });
});

// last section
const insta = [
  {
    dp: "Images/dp1.jpg",
    icon: "Images/img2.jpg",
    user: "Henry Han",
  },
  {dp: "Images/dp2.jpg",
    icon: "Images/img5.jpg",
    user: "Pargat Dhillon",
  },
  {dp: "Images/dp3.jpg",
    icon: "Images/img6.jpg",
    user: "Ankit Sharma",
  },
  {dp: "Images/dp4.jpg",
    icon: "Images/img7.jpg",
    user: "Sanjoy Sadhukhan",
  },
  {dp: "Images/dp5.jpg",
    icon: "Images/img8.jpg",
    user: "Mahdi Bafande",
  },
  {dp: "Images/dp6.jpg",
    icon: "Images/img9.jpg",
    user: "Ajay Sadhukhan",
  },
  {dp: "Images/dp7.jpg",
    icon: "Images/img10.jpg",
    user: "Arun Prakash",
  },
  {dp: "Images/dp8.jpg",
    icon: "Images/img11.jpg",
    user: "Matthew Hamilton",
  },
];
const storyicon = document.querySelector(".storysection");
let clutter = "";
insta.forEach((sto, index) => {
  clutter += `<div class="story">
  <div class="storyicon">
      <img id="${index}" src="${sto.dp}" alt="">
  </div>
  <p>${sto.user}</p>
</div>`;
});
storyicon.innerHTML = clutter;

const fullscreen = document.querySelector(".fullscreen");
const story = document.querySelectorAll(".story");
story.forEach((pt, index) => {
  pt.addEventListener("click", function (det) {
    fullscreen.style.display = "block";
    fullscreen.style.backgroundImage = `url(${insta[det.target.id].icon})`;
    setTimeout(() => {
      fullscreen.style.display = "none";
    }, 3000)
    
  });
});
