fetch('https://shivamdubey3.github.io/course-api/course.json')
  .then(res => res.json())  
  .then(data => {
    const container = document.getElementById("course-container");

    // Loop through courses and render them
    data.forEach(course => {
      // create card wrapper
      const card = document.createElement("div");
      card.className = "card"; // Bootstrap card class
      card.style.width = "18rem"; // optional inline style

      // add inner HTML
      card.innerHTML = `
        <img src="${course.image}" alt="Not Found" class="card-img-top"/>
        <div class="card-body">
          <h2 class="card-title">${course.title}</h2>
          <p class="card-text">${course.describe}</p>
          <div class="card-small">
            <p class="card-text"><b>⏱:</b> ${course.duration}</p>
            <a href="#" data-bs-toggle="modal" data-bs-target="#coursemodal">Go SomeWhere</a>
          </div>
        </div>
      `;

      // append to container
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error:', err);
    document.getElementById("course-container").innerHTML =
      "<p style='color:red;'>⚠️ Failed to load courses.</p>";
  });
