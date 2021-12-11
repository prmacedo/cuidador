import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import './styles.css';


export default function MultipleLineChart() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [dateLabel, setDateLabel] = useState([]);
  const [chartValues, setChartValues] = useState([]);
  const [chartValuesFiltered, setChartValuesFiltered] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const filtersConstants = [
    {
      name: 'Atv.diárias',
      color: 'rgb(187, 107, 217)'
    },
    {
      name: 'Relações interpessoais',
      color: 'rgb(84, 125, 226)',
    },
    {
      name: 'Sono',
      color: 'rgb(242, 201, 76)',
    },
    {
      name: 'Comport.sexual',
      color: 'rgb(39, 174, 96)'
    },
    {
      name: 'Autoestima',
      color: 'rgb(239, 89, 122)'
    },
    {
      name: 'Trabalho',
      color: 'rgb(86, 204, 242)'
    },
    {
      name: 'Dispo. para andar',
      color: 'rgb(111, 207, 151)'
    },
  ];

  const dailyAssesmentByYear = [
    // Janeiro
    [
      {
        days: ['1', '2', '4', '5', '6', '7', '8', '9', '13', '14', '15', '16', '20', '21', '22', '23', '27', '28', '29', '31'],
        intensities: [6, 10, 8, 9, 2, 3, 6, 9, 5, 7, 6, 5, 10, 2, 3,  3, 5, 8, 6, 4]
      },
      {
        days: ['1', '2', '4', '5', '6', '7', '8', '9', '13', '14', '15', '16', '20', '21', '22', '23', '27', '28', '29', '31'],
        intensities: [5, 2, 3, 6, 10, 6, 9, 8, 9, 2, 3, 10, 3, 5, 8, 6, 7, 6, 5, 4]
      },
      {
        days: ['1', '2', '4', '5', '6', '7', '8', '9', '13', '14', '15', '16', '20', '21', '22', '23', '27', '28', '29', '31'],
        intensities: [1, 5, 3, 6, 8, 9, 10, 5, 7, 8, 1, 2, 6, 0, 4, 5, 10, 9, 2, 3]
      },
      {
        days: ['1', '2', '4', '5', '6', '7', '8', '9', '13', '14', '15', '16', '20', '21', '22', '23', '27', '28', '29', '31'],
        intensities: [2, 6, 0, 4, 5, 10, 9, 2, 3, 8, 9, 10, 5, 7, 8, 1, 2, 6, 10, 8]
      },
      {
        days: ['1', '2', '4', '5', '6', '7', '8', '9', '13', '14', '15', '16', '20', '21', '22', '23', '27', '28', '29', '31'],
        intensities: [10, 5, 7, 8, 1, 2, 6, 6, 5, 10, 3, 5, 8, 6, 4, 3, 6, 10, 8, 9]
      },
      {
        days: ['1', '2', '4', '5', '6', '7', '8', '9', '13', '14', '15', '16', '20', '21', '22', '23', '27', '28', '29', '31'],
        intensities: [9, 8, 5, 6, 2, 3, 1, 7, 8, 9, 10, 5, 8, 1, 0, 2, 1, 2, 3, 2, 1]
      },
      {
        days: ['1', '2', '4', '5', '6', '7', '8', '9', '13', '14', '15', '16', '20', '21', '22', '23', '27', '28', '29', '31'],
        intensities: [5, 8, 1, 0, 2, 1, 2, 3, 2, 1, 9, 2, 3, 7, 6, 5, 10, 3, 5, 8, 6]
      },
    ],
    [], // Fevereiro
    [], // Março
    // Abril
    [ 
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [1, 9, 3, 5, 2, 3]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [5, 6, 3, 4, 5, 8]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [9, 5, 6, 2, 6, 3]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [3, 5, 8, 4, 7, 6]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [8, 6, 8, 3, 2, 5]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [7, 5, 2, 6, 2, 8]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [7, 6, 5, 8, 4, 3]
      },
    ],
    [], // Maio
    [], // Junho
    [], // Julho
    [], // Agosto
    // Setembro
    [
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [1, 9, 3, 5, 2, 3]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [5, 6, 3, 4, 5, 8]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [9, 5, 6, 2, 6, 3]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [3, 5, 8, 4, 7, 6]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [8, 6, 8, 3, 2, 5]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [7, 5, 2, 6, 2, 8]
      },
      {
        days: ['1', '2', '4', '5', '6', '7'],
        intensities: [7, 6, 5, 8, 4, 3]
      },
    ], 
    [], // Outubro
    [], // Novembro
    [
      {
        days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        intensities: [1, 5, 3, 6, 8, 9, 10, 5, 7, 8, 1]
      },
      {
        days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        intensities: [5, 6, 3, 4, 5, 8, 1, 5, 3, 6, 8]
      },
      {
        days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        intensities: [9, 5, 6, 2, 6, 3, 3, 5, 8, 4, 7]
      },
      {
        days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        intensities: [3, 5, 8, 1, 5, 3, 6, 8, 4, 7, 6]
      },
      {
        days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        intensities: [8, 6, 8, 3, 2, 5, 7, 5, 2, 6, 2]
      },
      {
        days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        intensities: [7, 5, 2, 6, 2, 8, 5, 8, 4, 7, 1]
      },
      {
        days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        intensities: [6, 8, 3, 2, 7, 6, 5, 8, 4, 3, 10]
      },
    ]  // Dezembro
  ];

  useEffect(() => {
    setDateLabel(getDaysOfMonth());
    const values = formatMultiLineChartData();
    setChartValues(values);
    setChartValuesFiltered([{}, {}, {}, {}, {}, {}, {}]);
  }, []);
  
  useEffect(() => {
    setDateLabel(getDaysOfMonth());
    const values = formatMultiLineChartData();
    setChartValues(values);
    setChartValuesFiltered([{}, {}, {}, {}, {}, {}, {}]);
  }, [month]);

  useEffect(() => {
    console.log("oi");
  }, [chartValuesFiltered]);

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

  function getMultiLineChartData() {
    const daysOfMonth = getDaysOfMonth();
    
    const selectedMonthData = dailyAssesmentByYear[month];

    let validDays = [];
    
    const formatedMonthData = [];

    if (selectedMonthData.length > 0) {
      validDays = selectedMonthData[0].days;
      
      for (let index = 1; index <= daysOfMonth.length; index++) {
        if ((validDays.indexOf(index.toString()) !== index - 1) 
            && (validDays.length !== daysOfMonth.length))
        {
          validDays.splice(index - 1, 0, index);
          selectedMonthData.forEach(element => {
            element.intensities.splice(index - 1, 0, null);
          });

        }
      }
      setShowChart(true);
      
      selectedMonthData.forEach(element => {
        formatedMonthData.push(element.intensities)
      });
      
    } else {
      setShowChart(false);
    }
    
    return formatedMonthData;
  }
  
  function formatMultiLineChartData() {
    const dataValues = getMultiLineChartData();

    const dataFormated = [
      {
        label: 'Atividades diárias',
        data: [],
        backgroundColor: 'rgb(187, 107, 217)',
        borderColor: 'rgba(187, 107, 217, 0.2)',
      },
      {
        label: 'Relações interpessoais',
        data: [],
        backgroundColor: 'rgb(84, 125, 226)',
        borderColor: 'rgba(84, 125, 226, 0.2)',
      },
      {
        label: 'Sono',
        data: [],
        backgroundColor: 'rgb(242, 201, 76)',
        borderColor: 'rgba(242, 201, 76, 0.2)',
      },
      {
        label: 'Comportamento sexual',
        data: [],
        backgroundColor: 'rgb(39, 174, 96)',
        borderColor: 'rgba(39, 174, 96, 0.2)',
      },
      {
        label: 'Autoestima',
        data: [],
        backgroundColor: 'rgb(239, 89, 122)',
        borderColor: 'rgba(239, 89, 122, 0.2)',
      },
      {
        label: 'Trabalho',
        data: [],
        backgroundColor: 'rgb(86, 204, 242)',
        borderColor: 'rgba(86, 204, 242, 0.2)',
      },
      {
        label: 'Disposição para andar',
        data: [],
        backgroundColor: 'rgb(111, 207, 151)',
        borderColor: 'rgba(111, 207, 151, 0.2)',
      },
    ];

    dataFormated.forEach((element, index) => {
      element.data = dataValues[index];
    });

    return dataFormated;
  }

  const data = {
    labels: dateLabel,
    datasets: chartValuesFiltered,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,    
    plugins: {
      title: {
        display: false,
        text: 'Escolha os parâmetros',
        align: 'start'
      },
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        reverse: true,
        title: {
          display: false,
        },
        max: 10
      },
    }
  };

  function handleClickFilter(filterNumber) {
    const element = document.querySelector(`#filter-${filterNumber}`);
    const isActive = element.classList.toggle('active');
    const newValues = chartValuesFiltered;
    
    if (isActive) {
      element.style.backgroundColor = filtersConstants[filterNumber].color;
      element.style.color = '#fff';
      newValues[filterNumber] = chartValues[filterNumber];
    } else {
      element.style.backgroundColor = '#E6E6F0';
      element.style.color = '#6A6180';
      newValues[filterNumber] = {};      
    }
    
    setChartValuesFiltered(newValues);
    setRefresh(!refresh);
  }

  return (
    <div id="multiLineChartContainer">
      <h3>Influência das dores no dia a dia</h3>
      
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
          <div className="filters-container">
            {filtersConstants.map((filter, index) => (
              <div key={index} className="filter" id={"filter-"+index} onClick={() => handleClickFilter(index)}>{filter.name}</div>              
            ))}
          </div>
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