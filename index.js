

 const users = [
  {
    name: "Mintu Kumar",
    username: "@mintu-78",
    location: "Jharkhand",
    phone: "9263315778",
    status: "active",
    image: "logo.jpg"
  },
  {
    name: "Priya Sharma",
    username: "@priya23",
    location: "Mumbai",
    phone: "9876543210",
    status: "inactive",
    image: "logo.jpg"
  },
  {
    name: "Rahul Verma",
    username: "@rahulv",
    location: "Delhi",
    phone: "9123456789",
    status: "active",
    image: "logo.jpg"
  },
   {
    name: "Mintu Kumar",
    username: "@mintu-78",
    location: "Jharkhand",
    phone: "9263315778",
    status: "active",
    image: "logo.jpg"
  },
   {
    name: "Mintu Kumar",
    username: "@mintu-78",
    location: "Jharkhand",
    phone: "9263315778",
    status: "active",
    image: "logo.jpg"
  }
];


const show_user_btn = document.getElementById("show_user_btn");
 const userList = document.querySelector('.list');

 show_user_btn.addEventListener('click', () => {

     userList.innerHTML = "";
     users.forEach(user  => {
        const userCard = document.createElement("div");
        userCard.classList.add("line");

        userCard.innerHTML = `
      <div class="user">
        <div class="profile">
          <img src="${user.profile}" alt="">
        </div>
        <div class="details">
          <h1 class="name">${user.name}</h1>
          <h3 class="username">${user.username}</h3>
        </div>
      </div>
      <div class="status">
        <span></span>
        <p>${user.status}</p>
      </div>
      <div class="location">
        <p>${user.location}</p>
      </div>
      <div class="phone">
        <p>${user.phone}</p>
      </div>
      <div class="content">
        <a href="#" class="btn">contact</a>
      </div>
      <div class="action">
        <div class="icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;

    userList.appendChild(userCard);

     });

    userList.style.display = 'block'
 })





