
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import style from "./netchange.module.sass";
Chart.register(...registerables)

const NetChangeChart =({dates, prices}:any)=> {
  const data = {
    labels: dates.map((el:any)=>{
      return el
    }),
    extended: dates,
    datasets: [
      {
        data: prices,
        fill: true,
        backgroundColor:"#e6e2fd",
        pointBorderColor:"#9571cf",
        borderColor: '#9571cf',
        borderWidth: 5,
        pointBorderWidth:6,
        pointRadius: 4,
        tension: 0.1
      },
   
    ],
    
  };
  
  const options = {
    
    plugins:{
      legend:{display:false},
     
    
    },
    
    scales: {
      y:{
        ticks:{
          color:"black",
          font:{
            size:12
          }
        },
        grid:{
          color:"#F3EDFB"
        }
      },
      x:{
        ticks:{
          color:"black",
          font:{
            size:12
          }
        }
      }
      
    },
  };
  return (
    <div className={style.container}>
      <h1>Net Changes chart</h1>
      <Line data={data} options={options}/>
    </div>
  );
}

export default NetChangeChart;
