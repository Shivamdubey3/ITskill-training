// Your dataset
const courses = [
    {
        Id: "1",
        image: "/Image/Courses-1.jpg",
        title: "Web Development",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "1800 Hours"
    },
    {
        Id: "2",
        image: "/Image/Courses-2.jpg",
        title: "Data Science",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: " 900 Hours"
    },
    {
        Id: "3",
        image: "/Image/Courses-3.jpg",
        title: "Python Development",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "1000 Hours"
    },
    {
        Id: "4",
        image: "/Image/Courses-4.jpg",
        title: "Graphic Design",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "1100 Hours"
    },
    {
        Id: "5",
        image: "/Image/Courses-5.jpg",
        title: "Java Development",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: " 1500 Hours"
    },
    {
        Id: "6",
        image: "/Image/Courses-1.jpg",
        title: "React Development",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "600 Hours"
    },
    {
        Id: "7",
        image: "/Image/Courses-2.jpg",
        title: "Angular Development",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "800 Hours"
    },
    {
        Id: "8",
        image: "/Image/Courses-3.jpg",
        title: "Full Stack web Development",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "2500 Hours"
    },
    {
        Id: "9",
        image: "/Image/Courses-4.jpg",
        title: "Digital Marketing",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "700 Hours"
    },
    {
        Id: "10",
        image: "/Image/Courses-5.jpg",
        title: "SQL Developer",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "1500 Hours"
    },
     {
        Id: "11",
        image: "/Image/Courses-1.jpg",
        title: "Database Developer",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: "1800 Hours"
    },
    {
        Id: "12",
        image: "/Image/Courses-2.jpg",
        title: "Data Science & Data Analytics",
        describe: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        duration: " 2900 Hours"
    },
];

// Select container
const container = document.getElementById("course-container");


// Loop through courses and render them
courses.forEach(course => {
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


