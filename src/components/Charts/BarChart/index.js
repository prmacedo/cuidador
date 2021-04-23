import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import info from '../../../assets/images/icons/info.svg';
import close from '../../../assets/images/icons/close.svg';
import corpoNumerado from '../../../assets/images/Corpo_numerado.png';

import './styles.css';

export default function BarChart() {
  const [isHidden, setIsHidden] = useState(true);

  const data = {
    labels: ['37', '5', '22', '46'],
    datasets: [
      {
        label: 'Nº de dias',
        data: [13, 8, 5, 2],
        backgroundColor: [
          '#547DE2',
        ],
        borderWidth: 1,
        borderRadius: 8
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nº de dias',
          align: 'end',
          font: {
            family: 'Poppins',
            size: 12
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Locais de dor',
          align: 'center',
          font: {
            family: 'Poppins',
            size: 12
          }
        }
      }
    }
  };

  function handleToggleImage() {
    setIsHidden(!isHidden);
  }

  return (
    <div id="barChartContainer">
      <h3>Quantidade de dias por local de dor</h3>

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
        <Bar data={data} options={options} />
      </div>

      <p className="info" onClick={() => { handleToggleImage() }}><img src={info} alt="Informações"/> Clique aqui para ver a imagem de referência</p>
      
      {!isHidden &&
      <div id="numberedBody">
        <h3>Locais do corpo numerados</h3>
        <img src={corpoNumerado} alt="Corpo humano numerado"/>
        <span onClick={() => { handleToggleImage() } }><img src={close} alt="Fechar"/></span>
      </div>
      }
    </div>
  );
}