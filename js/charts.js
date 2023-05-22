const demand = document.getElementById('demand-chart');
new Chart(demand, {
  type: 'line',
  data: {
    labels: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    datasets: [{
      label: 'Taille du marché',
      fill: true,
      data: [256.12, 265.8, 276, 286.75, 298.08, 310.03, 322.65, 335.98, 350.07, 364.96, 380.71],
      borderWidth: 2,
      borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.2
    }],
    
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
        title: {
            display: true,
            text: "Taille du marché (en millions d'euros)"
        }
      }
    },
    plugins: {

        title: {
          display: true,
          text: 'Demande dans le secteur de la métrologie',
            font: {
                size: 20,
                weight: 'bold',
                fontfamily: 'Roboto'
            }
        }
    }
  }
});

const rentability = document.getElementById('rentability-chart');
new Chart(rentability, {
  type: 'bar',
  data: {
    labels: ["Exercice avant impôts", "Resultats d'exploitation", "Financier", "Non récurrent", "Cash Flow"],
    datasets: [
      {
        label: "2021",
        backgroundColor: "rgba(255, 99, 132, 0.9)",
        data: [ -498504, -497260, 204, -1448, -458456]
      }, {
        label: "2020",
        backgroundColor: "rgba(88, 214, 141, 0.9)",
        data: [ -380598, -402013, 12672, 8743, -357631]
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
        title: {
          display: true,
          text: 'Rentabilité de l’entreprise EUCLIDES',
            font: {
                size: 20,
                weight: 'bold',
                fontfamily: 'Roboto'
            }
        }
    }
  }
});

const solvability = document.getElementById('solvability-chart');
new Chart(solvability, {
  type: 'bar',
  data: {
    labels: ["Fonds de roulement", "Besoin en fonds de roulement", "Position de trésorerie nette"],
    datasets: [
      {
        label: "2021",
        backgroundColor: "rgba(255, 99, 132, 0.9)",
        data: [ 29577, 130316, -100739]
      }, {
        label: "2020",
        backgroundColor: "rgba(88, 214, 141, 0.9)",
        data: [ 34747, 17973, 16774]
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
        title: {
          display: true,
          text: 'Solvabilité de l’entreprise EUCLIDES',
            font: {
                size: 20,
                weight: 'bold',
                fontfamily: 'Roboto'
            }
        }
    }
  }
});


const concurrent = document.getElementById('concurrent-chart');
new Chart(concurrent, {
    type: 'radar',
    data: {
        labels: ['Prix', 'Qualité', 'Publicité', 'Technologie', 'Service Client', 'Innovation', 'Gamme de produits',"Personnel",'Reputation'],
        // x axis labels

        datasets: [
            {
                label: ['SNELLIUM'],
                data: [ 17, 10, 5, 12, 14, 18, 8, 9, 11],
                backgroundColor: "rgba(255, 99, 132, 0.9)",
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)',
                fill: true,
            },
            {
                label: ['Virelux'],
                data: [ 13, 14, 16, 15, 7, 10, 12, 13, 15],
                backgroundColor: 'rgba(88, 214, 141, 0.9)',
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)',
            },
            {
                label: ['Hexagon AB'],
                data: [ 16, 17, 18, 14, 10, 16, 15, 17, 17],
                backgroundColor: 'rgb(255, 195, 0)',
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)',
            },
            {
                label: ['Zeiss'],
                data: [ 20, 19, 19, 18, 17, 19, 19, 19, 20],
                backgroundColor: 'rgb(52, 152, 219)',
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)',
            },
        ]
    },
    options: {
        scales: {
            x: {
        display: true,
        title: {
          display: true,
          text: "Prix"
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Ventes / Mois"
        }
      }
        },
        plugins: {
            title: {
              display: true,
              text: 'Concurrence dans le secteur de la métrologie',
                font: {
                    size: 20,
                    weight: 'bold',
                    fontfamily: 'Roboto'
                }
            }
        }
    }
});
