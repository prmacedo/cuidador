import React from 'react';
import { Line } from 'react-chartjs-2';

import './styles.css';

export default function MultipleLineChart() {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Atividades diárias',
        data: [1, 9, 3, 5, 2, 3],
        backgroundColor: 'rgb(187, 107, 217)',
        borderColor: 'rgba(187, 107, 217, 0.2)',
      },
      {
        label: 'Relações interpessoais',
        data: [5, 6, 3, 4, 5, 8],
        backgroundColor: 'rgb(84, 125, 226)',
        borderColor: 'rgba(84, 125, 226, 0.2)',
      },
      {
        label: 'Sono',
        data: [9, 5, 6, 2, 6, 3],
        backgroundColor: 'rgb(242, 201, 76)',
        borderColor: 'rgba(242, 201, 76, 0.2)',
      },
      {
        label: 'Comportamento sexual',
        data: [3, 5, 8, 4, 7, 6],
        backgroundColor: 'rgb(39, 174, 96)',
        borderColor: 'rgba(39, 174, 96, 0.2)',
      },
      {
        label: 'Autoestima',
        data: [8, 6, 8, 3, 2, 5],
        backgroundColor: 'rgb(239, 89, 122)',
        borderColor: 'rgba(239, 89, 122, 0.2)',
      },
      {
        label: 'Trabalho',
        data: [7, 5, 2, 6, 2, 8],
        backgroundColor: 'rgb(86, 204, 242)',
        borderColor: 'rgba(86, 204, 242, 0.2)',
      },
      {
        label: 'Disposição para andar',
        data: [7, 6, 5, 8, 4, 3],
        backgroundColor: 'rgb(111, 207, 151)',
        borderColor: 'rgba(111, 207, 151, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Escolha os parâmetros'
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        reverse: true,title: {
        display: false,
      },
        max: 10
      }
    }
  };

  return (
    <div id="multiLineChartContainer">
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