import React from 'react';
import { Line } from 'react-chartjs-2';

import './styles.css';

export default function LineChart() {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 9, 3, 5, 2, 3, 0, 6, 7, 8, 6, 5, 0, 4, 3, 7, 6, 3, 5, 4, 2, 1, 2, 1, 1, 3, 4, 6],
        fill: false,
        backgroundColor: '#547DE2',
        borderColor: 'rgba(84, 125, 226, 0.2)',
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'none',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        reverse: true,
        max: 10
      }
    }
  };
  
  return (
    <div id="lineChartContainer">
      <h3>Intensidade da dor mais intensa em cada dia do mês</h3>

      <p>Escolha o mês e o ano</p>

      <div className="input-group">
        <select name="month" id="month">
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>

        <select name="year" id="year">
          <option value="2021">2021</option>
        </select>
      </div>

      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );

}