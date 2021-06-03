import React from 'react'
import { HorizontalBar } from "react-chartjs-2";
import {GraphsStyle} from '../../Css/Styles'

const lablesExemplo = ["Label 1", "Label 2", "Label 3"];
const dataExemplo = [53, 20, 10, 80, 100, 45];
export default function GraficoBarrasDeitado({values}) {
    

    let chartScheme = {
        data: canvas => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
          gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
          gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
      
          return {
            labels: values? values.labels: lablesExemplo,
            datasets: [
              {
                label: values ? values.label: "Label Exemplo",
                fill: true,
                backgroundColor: 'black',
                hoverBackgroundColor: gradientStroke,
                borderColor: "#fff",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: values ? values.data: dataExemplo
              }
            ]
          };
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(225,78,202,0.1)",
                  zeroLineColor: "rgba(225,78,202,0.1)"
                },
                ticks: {
                  suggestedMin: values ? values.min : 0,
                  suggestedMax: values ? values.max : 100,
                  padding: 20,
                  fontColor: "#fff"
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(225,78,202,0.1)",
                  zeroLineColor: "rgba(225,78,202,0.1)"
                },
                ticks: {
                  padding: 20,
                  fontColor: "#fff",
                }
              }
            ]
          }
        }
      }; 


    
    return (
        <div style={GraphsStyle} className='col s12 m6 card grey darken-4'>
            <HorizontalBar
                data={chartScheme.data}
                options={chartScheme.options}
            />
        </div>
    )
}
