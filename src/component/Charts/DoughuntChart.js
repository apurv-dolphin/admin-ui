import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function DoughuntChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
    datasets: [
      {
        label: 'Apurv khalas',
        data: [25, 24, 25, 25, 3],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['#f70800',
          '#fcba03',
          '#096ced',
          '#ed5d09',
          '#9909ed'],
          hoverBackgroundColor: [
            '#f75752',
            '#f2ef2e',
            '#4254fc',
            '#e87b27',
            '#8454e3',
          ],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        borderWidth: 0,
        cutout: "80%",
      },
    ]
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Doughnut Chart',
        color: 'blue',
        font: {
          size: 34
        },
        padding: {
          top: 30,
          bottom: 30
        },
        responsive: true,
        animation: {
          animateScale: true,
        }
      }
    }

  }
  return (
    <Doughnut data={data} options={options} />
  )
}
