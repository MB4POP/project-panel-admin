function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show', visible)
  }

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

  function toggleMainMenu(visible) {
    document.querySelector('.main-menu').classList.toggle('main-show', visible)
  }

  document.querySelector('.main-hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMainMenu()
  });


  let ctx = document.getElementById('myChart').getContext('2d');

  let chart = new Chart(ctx, {
    // 1
    type: 'bar' ,
    data: {
      // 2
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
      // 3
      datasets: [{
        // 4
        label: "Singups",
        // 5
        backgroundColor: '#8DBEC8' ,
        borderColor: '#8DBEC8' ,
        // 6
        data: [350, 200, 230, 380, 430, 400, 280, 260, 300],
      },
      {
        label: "FTD",
        backgroundColor: '#F29E4E' ,
        borderColor: '#F29E4E' ,
        data: [410, 170, 310, 250, 450, 140, 210, 510, 320],
      },
      {
        label: "Earned",
        backgroundColor: '#71B374' ,
        borderColor: '#71B374' ,
        data: [120, 180, 150, 160, 220, 180, 169, 210, 140],
        // 7
        hidden: true,      
      }]
    },
    options: {
      legend: {
          display: false,
      }
    },
  });