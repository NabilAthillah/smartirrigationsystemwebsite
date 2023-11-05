import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
)

export default function LineDiagram(){
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
            label: 'Kelembaban Tanah',
            data: [20,30,40,50,60,80,90,],
            backgroundColor: '#E88751',
            borderColor: '#E88751',
            pointRadius: 0,
            fill: true,
            tension: 0.1,
            pointStyle: 'line',
            pointStyleHeight: 5
        },
        {
            label: 'Suhu Udara',
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: '#769CFF',
            borderColor: '#769CFF',
            pointRadius: 0,
            fill: true,
            tension: 0.1,
            pointStyle: 'line',
            pointStyleHeight: 5
        },
        {
            label: 'Lux',
            data: [0, 10, 20, 30, 40, 50, 60],
            backgroundColor: '#FFC046',
            borderColor: '#FFC046',
            pointRadius: 0,
            fill: true,
            tension: 0.1,
            pointStyle: 'line',
            pointStyleHeight: 5
        }
    ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Line Diagram',
            },
            legend: {
                labels: {
                    usePointStyle: false,
                },
                position: "bottom",
            }
        },
        scales: {
            y: {
                display: true,
                min: -50,
                max: 100
            },
            x:{
                display: true
            }
        }
    }

    return(
            <Line
                data={data}
                options={options}
                className="max-w-[600px] max-h-[346px]"
            ></Line>
    )
}