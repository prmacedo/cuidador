import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import './styles.css';

export default function LineChart() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [dateLabel, setDateLabel] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [chartValues, setChartValues] = useState([]);

  const dailyAssesmentByYear = [
    {
      days: ['1', '2', '4', '5', '6', '7'],
      intensities: [6, 9, 5, 2, 3, 6]
    },
    {},
    {},
    {
      days: ['1', '2', '4', '5', '6', '7'],
      intensities: [1, 2, 3, 5, 2, 3]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  useEffect(() => {
    setDateLabel(getDaysOfMonth());
    setChartValues(formatLineChartData());
  }, []);

  useEffect(() => {
    setDateLabel(getDaysOfMonth());
    setChartValues(formatLineChartData());
  }, [month]);

  function getDaysOfMonth() {
    const yearNormal = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
    const yearBisix = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];

    const lastDayOfMonth = (year % 4 === 0) ? yearBisix[month] : yearNormal[month];

    const daysOfMonth = [];

    for (let index = 1; index <= lastDayOfMonth; index++) {
      daysOfMonth.push(index);
    }

    return daysOfMonth;
  }

  function getLineChartData() {
    const daysOfMonth = getDaysOfMonth();

    const selectedMonthData = dailyAssesmentByYear[month];

    const isEmpty = (Object.keys(selectedMonthData).length) ? false : true;

    let validDays = [];

    const formatedMonthData = [];

    if (!isEmpty) {
      validDays = selectedMonthData.days;

      for (let index = 1; index <= daysOfMonth.length; index++) {
        if ((validDays.indexOf(index.toString()) !== index - 1)
          && (validDays.length !== daysOfMonth.length)) {
          validDays.splice(index - 1, 0, index);
          selectedMonthData.intensities.splice(index - 1, 0, null);
          
        }
      }
      setShowChart(true);

      formatedMonthData.push(...selectedMonthData.intensities);

    } else {
      setShowChart(false);
    }

    return formatedMonthData;
  }

  function formatLineChartData() {
    const dataValues = getLineChartData();

    const dataFormated = [
      {
        label: '',
        data: [],
        fill: false,
        backgroundColor: '#547DE2',
        borderColor: 'rgba(84, 125, 226, 0.2)',
      }
    ];

    dataFormated[0].data = dataValues;

    return dataFormated;
  }

  const data = {
    labels: dateLabel,
    datasets: chartValues,
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      <>
        <div className="scroll">
          <div className="chart">
            <Line data={data} options={options} />
          </div>
        </div>
        <small>Arraste para o lado para ver mais →</small>
      </>
      )
      : <p className="emptyMessage">Não há dados para o período selecionado.</p>
      }
    </div>
  );

}