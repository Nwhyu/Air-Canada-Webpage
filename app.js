// Modifications function for Buttons 1, 2, 3, 4, 5, 6, 7
document.addEventListener("DOMContentLoaded", function () {
    const likeBtn = document.getElementById("likeBtn");
    const dislikeBtn = document.getElementById("dislikeBtn");
    const resetBtn = document.getElementById("resetBtn");
    const counterElement = document.getElementById("counter");
    const changeColorSchemeBtn = document.getElementById("changeColorScheme");
    const employeeBtn = document.getElementById("employeeBtn");
    const specialBtn = document.getElementById("specialBtn");
    const navbar = document.getElementById("navbar");
  
    const startBtn = document.querySelector(".start-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const endBtn = document.querySelector(".end-btn");
  
    const employeeSection = document.querySelector('.employee-section');
    const personImg = document.getElementById("person-img");
    const authorElement = document.getElementById("author");
    const jobElement = document.getElementById("job");
    const infoElement = document.getElementById("info");
  
    let counter = 0;
    let employeeIndex = 0;
  
    // Info for Buttons 5 + 6 
    const employeeStatements = [
      {
        name: 'Christopher Diaz-Revueltag',
        title: 'Managing Director, Application, Development and Maintenance',
        img: 'https://media.licdn.com/dms/image/C5603AQFzv4obwmt4hA/profile-displayphoto-shrink_800_800/0/1594417440880?e=1712188800&v=beta&t=7XHpSoVX_Ap7Bhy_-XeqnKP6xj3fPyNfqtIOwl55T6k'
      },
      {
        name: 'Amos Kazzaz',
        title: 'Executive Vice President and Chief Financial Officer',
        img: 'https://mma.prnewswire.com/media/1386538/Air_Canada_Air_Canada_Announces_Amos_Kazzaz_as_Executive_Vice_Pr.jpg?p=publish&w=950'
      },
      {
        name: 'Jean francois raudin',
        title: 'Directur general Air Canada',
        img: 'https://s3.amazonaws.com/media.mixrank.com/profilepic/c8433b92206ab9c5730f7e23a567df37'
      }
    ];
  
    // Initial hide of the employee statement section
    if (employeeSection) {
      employeeSection.style.display = 'none';
    }
  
    likeBtn.addEventListener("click", () => {
      updateCounter(1);
    });
  
    dislikeBtn.addEventListener("click", () => {
      updateCounter(-1);
    });
  
    resetBtn.addEventListener("click", () => {
      resetCounter();
    });
  
    changeColorSchemeBtn.addEventListener("click", changeColorScheme);
  
    employeeBtn.addEventListener("click", () => {
      showEmployeeStatement();
    });
  
    specialBtn.addEventListener("click", () => {
      showSpecialConfetti();
    });
  
    startBtn.addEventListener("click", () => {
      showStartEmployee();
    });
  
    prevBtn.addEventListener("click", () => {
      showPrevEmployee();
    });
  
    nextBtn.addEventListener("click", () => {
      showNextEmployee();
    });
  
    endBtn.addEventListener("click", () => {
      showEndEmployee();
    });
  
    // Functions for Buttons 1 + 2 + 3
    function updateCounter(value) {
      counter += value;
      renderCounter();
    }
  
    function resetCounter() {
      counter = 0;
      renderCounter();
    }
  
    function renderCounter() {
      if (counterElement) {
        counterElement.textContent = `Counter: ${counter}`;
        counterElement.style.color = counter > 0 ? "green" : counter < 0 ? "red" : "black";
      }
    }
  
    // Functions for Button 4 - To change the different colors
    function changeColorScheme() {
      const colorSchemes = [
        "red", "orange", "yellow", "green", "blue", "pink", "purple"
      ];
      const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
      document.body.style.backgroundColor = randomColor;
    }
  
    // Functions for Buttons 5 + 6 - How to show the employee
    function showEmployeeStatement() {
      // Hide all elements with class "box-container"
      const boxContainers = document.querySelectorAll('.box-container');
      boxContainers.forEach(container => {
        container.style.display = 'none';
      });
  
      const currentEmployee = employeeStatements[employeeIndex];
      personImg.src = currentEmployee.img;
      authorElement.textContent = currentEmployee.name;
      jobElement.textContent = currentEmployee.title;
      infoElement.textContent = currentEmployee.thought;
  
      // Toggle the display property of the employee section
      if (employeeSection) {
        employeeSection.style.display = 'block';
      }
    }
  
    function showStartEmployee() {
      employeeIndex = 0;
      showEmployeeStatement();
    }
  
    function showPrevEmployee() {
      employeeIndex = (employeeIndex - 1 + employeeStatements.length) % employeeStatements.length;
      showEmployeeStatement();
    }
  
    function showNextEmployee() {
      employeeIndex = (employeeIndex + 1) % employeeStatements.length;
      showEmployeeStatement();
    }
  
    function showEndEmployee() {
      employeeIndex = employeeStatements.length - 1;
      showEmployeeStatement();
    }
  
    // Functions for Button 7
    function showSpecialConfetti() {
      alert("Have a Nice Trip");
      confetti();
    }
  
    function toggleNavbar() {
      if (navbar) {
        navbar.classList.toggle("show");
      }
    }
  
    // Initial render
    renderCounter();
  });// Modifications function for Buttons 1, 2, 3, 4, 5, 6, 7
document.addEventListener("DOMContentLoaded", function () {
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  const resetBtn = document.getElementById("resetBtn");
  const counterElement = document.getElementById("counter");
  const changeColorSchemeBtn = document.getElementById("changeColorScheme");
  const employeeBtn = document.getElementById("employeeBtn");
  const specialBtn = document.getElementById("specialBtn");
  const navbar = document.getElementById("navbar");

  const startBtn = document.querySelector(".start-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const endBtn = document.querySelector(".end-btn");

  const employeeSection = document.querySelector('.employee-section');
  const personImg = document.getElementById("person-img");
  const authorElement = document.getElementById("author");
  const jobElement = document.getElementById("job");
  const infoElement = document.getElementById("info");

  let counter = 0;
  let employeeIndex = 0;

  // Info for Buttons 5 + 6 
  const employeeStatements = [
    {
      name: 'Christopher Diaz-Revueltag',
      title: 'Managing Director, Application, Development and Maintenance',
      img: 'https://media.licdn.com/dms/image/C5603AQFzv4obwmt4hA/profile-displayphoto-shrink_800_800/0/1594417440880?e=1712188800&v=beta&t=7XHpSoVX_Ap7Bhy_-XeqnKP6xj3fPyNfqtIOwl55T6k'
    },
    {
      name: 'Amos Kazzaz',
      title: 'Executive Vice President and Chief Financial Officer',
      img: 'https://mma.prnewswire.com/media/1386538/Air_Canada_Air_Canada_Announces_Amos_Kazzaz_as_Executive_Vice_Pr.jpg?p=publish&w=950'
    },
    {
      name: 'Jean francois raudin',
      title: 'Directur general Air Canada',
      img: 'https://s3.amazonaws.com/media.mixrank.com/profilepic/c8433b92206ab9c5730f7e23a567df37'
    }
  ];

  // Initial hide of the employee statement section
  if (employeeSection) {
    employeeSection.style.display = 'none';
  }

  likeBtn.addEventListener("click", () => {
    updateCounter(1);
  });

  dislikeBtn.addEventListener("click", () => {
    updateCounter(-1);
  });

  resetBtn.addEventListener("click", () => {
    resetCounter();
  });

  changeColorSchemeBtn.addEventListener("click", changeColorScheme);

  employeeBtn.addEventListener("click", () => {
    showEmployeeStatement();
  });

  specialBtn.addEventListener("click", () => {
    showSpecialConfetti();
  });

  startBtn.addEventListener("click", () => {
    showStartEmployee();
  });

  prevBtn.addEventListener("click", () => {
    showPrevEmployee();
  });

  nextBtn.addEventListener("click", () => {
    showNextEmployee();
  });

  endBtn.addEventListener("click", () => {
    showEndEmployee();
  });

  // Functions for Buttons 1 + 2 + 3
  function updateCounter(value) {
    counter += value;
    renderCounter();
  }

  function resetCounter() {
    counter = 0;
    renderCounter();
  }

  function renderCounter() {
    if (counterElement) {
      counterElement.textContent = `Counter: ${counter}`;
      counterElement.style.color = counter > 0 ? "green" : counter < 0 ? "red" : "black";
    }
  }

  // Functions for Button 4 - To change the different colors
  function changeColorScheme() {
    const colorSchemes = [
      "red", "orange", "yellow", "green", "blue", "pink", "purple"
    ];
    const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    document.body.style.backgroundColor = randomColor;
  }

  // Functions for Buttons 5 + 6 - How to show the employee
  function showEmployeeStatement() {
    // Hide all elements with class "box-container"
    const boxContainers = document.querySelectorAll('.box-container');
    boxContainers.forEach(container => {
      container.style.display = 'none';
    });

    const currentEmployee = employeeStatements[employeeIndex];
    personImg.src = currentEmployee.img;
    authorElement.textContent = currentEmployee.name;
    jobElement.textContent = currentEmployee.title;
    infoElement.textContent = currentEmployee.thought;

    // Toggle the display property of the employee section
    if (employeeSection) {
      employeeSection.style.display = 'block';
    }
  }

  function showStartEmployee() {
    employeeIndex = 0;
    showEmployeeStatement();
  }

  function showPrevEmployee() {
    employeeIndex = (employeeIndex - 1 + employeeStatements.length) % employeeStatements.length;
    showEmployeeStatement();
  }

  function showNextEmployee() {
    employeeIndex = (employeeIndex + 1) % employeeStatements.length;
    showEmployeeStatement();
  }

  function showEndEmployee() {
    employeeIndex = employeeStatements.length - 1;
    showEmployeeStatement();
  }

  // Functions for Button 7
  function showSpecialConfetti() {
    alert("Have a Nice Trip");
    confetti();
  }

  function toggleNavbar() {
    if (navbar) {
      navbar.classList.toggle("show");
    }
  }

  // Initial render
  renderCounter();
});