fetch("http://localhost/minxu/backend/getMenu.php")
  .then(res => res.json())
  .then(data => {
    let menu = document.getElementById("menu");

    data.forEach(item => {
      menu.innerHTML += `
        <div class="card">
          <h3>${item.name}</h3>
          <p>${item.category}</p>
          <p class="price">RM ${item.price}</p>
        </div>
      `;
    });
  });
