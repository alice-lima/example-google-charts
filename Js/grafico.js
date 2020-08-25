document.getElementById('form').addEventListener('submit', submitForm);

function getInputValue(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    var nota1 = parseInt(getInputValue('nota1'));
    var nota2 = parseInt(getInputValue('nota2'));
    var nota3 = parseInt(getInputValue('nota3'));

    e.preventDefault();
    /*Chamando a função pra criar o gráfico*/
    criarGrafico(nota1, nota2, nota3);
}

function criarGrafico(pnota1, pnota2, pnota3){
    Highcharts.chart('container',  {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Médias'
    },
    xAxis: {
        categories: ['Média1', 'Média2', 'Média3']
    },
    yAxis: {
        title: {
            text: 'Notas'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Minha Media',
        data: [pnota1, pnota2, pnota3]
    }]
    });

}
    
  
