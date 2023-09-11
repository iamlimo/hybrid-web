import React, {useState, useEffect} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Legend,
    ArcElement,
    Tooltip,
  } from 'chart.js'
  import {Line, Doughnut} from 'react-chartjs-2'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Legend,
    ArcElement,
    Tooltip,
  );

const Chart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
      });

      const [chartOptions, setChartOptions] = useState({});

      const data = {
        labels: ["Subscribed", "Unsubscribed", "Authors"],
        datasets: [
          {
            data: [250, 100, 30],
            backgroundColor: ["#B51212", "#000000", "#9747FF"],
            borderWidth: 1,
            borderColor: 'transparent',
          }
        ]
      };

      useEffect(() => {
        setChartData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Male',
              data:[150, 240, 200, 240, 170, 250, 250],
              backgroundColor: [
                'rgba(151, 71, 255, 0.2)'
              ],
              borderWidth: 0,
              borderColor: 'rgb(85, 0, 128)',
              tension: 0.5,
              fill: true,
              pointBorderwidth: 0,
              pointBackgroundColor:'rgba(85, 0, 128, 0)',
              pointBorderColor: 'rgba(85, 0, 128, 0)'
            },{
              label: 'Female',
              data:[310, 240, 300, 190, 250, 160, 210],
              backgroundColor: [
                'rgba(240, 103, 3, 0.2)'
              ],
              borderWidth: 0,
              tension: 0.5,
              fill: true,
              pointBorderwidth: 0,
              pointBackgroundColor:'rgba(255, 153, 51, 0)',
              pointBorderColor: 'rgba(255, 153, 51, 0)'
            }
          ]
        })
        setChartOptions({
          plugins:{
            legend:{
              position:'bottom',
              labels:{
                pointStyle: 'circle'
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales:{
            x:{
              grid:{
                display: false
              }
            },
            y:{
              suggestedMin: 100,
              suggestedMax: 350,
              ticks:{
                stepSize: 50
              }
            }
          }
        })
      }, [])
  return (
    <section className='flex flex-col xl:flex-row gap-[29px] pl-6 mt-6 w-full'>
      <div className='w-[388px] xl:w-[600px] 2xl:w-[719px] h-[300px] xl:h-[388px] shadow-[-3px_4px_4px_0px_rgba(0,0,0,0.25)]'>
          <Line data={chartData} options={chartOptions}/>
      </div>
      <div className='w-[388px] h-[388px] p-10 pr-0 shadow-[-3px_4px_4px_0px_rgba(0,0,0,0.25)]'>
          <Doughnut
          data={data}
          options={{
            borderRadius: 30,
            plugins:{
              legend:{
                position:'bottom',
                labels:{
                  pointStyle: 'circle'
                }
              }
              },
            responsive: true,
            maintainAspectRatio: true,
            cutout: 110
            }}
          />
      </div>
    </section>


  )
}

export default Chart