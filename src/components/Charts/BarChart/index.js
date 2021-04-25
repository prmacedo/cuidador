import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import info from '../../../assets/images/icons/info.svg';
import close from '../../../assets/images/icons/close.svg';
import corpoNumerado from '../../../assets/images/Corpo_numerado.png';

import './styles.css';

export default function BarChart() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    hideBarChart();
  }, [month]);

  const dailyAssesmentByYear = [
    {
      regions: ['1', '45', '22', '11', '23'],
      numberOfDays: [9, 8, 5, 2, 1],
    },
    {},
    {},
    {
      regions: ['1', '13', '5', '37', '11'],
      numberOfDays: [13, 8, 5, 2, 1],
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ];

  const data = {
    labels: dailyAssesmentByYear[month].regions,
    datasets: [
      {
        label: 'Nº de dias',
        data: dailyAssesmentByYear[month].numberOfDays,
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
    maintainAspectRatio: false,
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
    }
  };

  function hideBarChart() {
    const selectedMonthData = dailyAssesmentByYear[month];

    const isEmpty = (Object.keys(selectedMonthData).length) ? false : true;

    setShowChart(!isEmpty);    
  }

  function handleToggleImage() {
    document.querySelector('#numberedBody').classList.toggle('hide');
  }

  return (
    <div id="barChartContainer">
      <h3>Quantidade de dias por local de dor</h3>

      <p>Escolha o mês e o ano</p>
      
      <div className="input-group">
        <select name="month" id="month" value={month} onChange={(event) => { setMonth(event.target.value) }}>
          <option value="0">Janeiro</option>
          <option value="1">Fevereiro</option>
          <option value="2">Março</option>
          <option value="3">Abril</option>
          <option value="4">Maio</option>
          <option value="5">Junho</option>
          <option value="6">Julho</option>
          <option value="7">Agosto</option>
          <option value="8">Setembro</option>
          <option value="9">Outubro</option>
          <option value="10">Novembro</option>
          <option value="11">Dezembro</option>
        </select>

        <select name="year" id="year" value={year} onChange={(event) => { setYear(event.target.value) }}>
          <option value="2021">2021</option>
        </select>
      </div>

      {showChart ? 
      (
      <div className="chart">
        <small>Locais de dor</small>
        <Bar data={data} options={options} />
      </div>
      )
      : <p className="emptyMessage">Não há dados para o período selecionado.</p>
      }

      <p className="info" onClick={() => { handleToggleImage() }}><img src={info} alt="Informações"/> Clique aqui para ver a imagem de referência</p>
            
      <div id="numberedBody" className="hide">
        <h3>Locais do corpo numerados</h3>
        <img src={corpoNumerado} alt="Corpo humano numerado"/>
        <span onClick={() => { handleToggleImage() } }><img src={close} alt="Fechar"/></span>
      </div>
    </div>
  );
}