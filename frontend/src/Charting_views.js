import React, { Component } from 'react';

import './Charting_views.scss';
import Charting from "../src/components/Charting"



class Charting_views extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Money Heist', 'squid game', 'Lucifer,', 'The Witcher', 'Good Doctor','suits','Friends','The Office','SherLock'],
        datasets:[
          {
            label:'Views',
            data:[
              211514,
              181045,
              193060,
              176519,
              185162,
              235072,
              112344,
              234354,
              234554
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="Charting_views">
        <div className="Charting_views-header">
          
          <h2>Trending Movies on Movieflix</h2>
        </div>
        <Charting chartData={this.state.chartData} />
      </div>
    );
  }
}

export default Charting_views;

