import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Bar, Line } from "react-chartjs-2";

class WeightChart extends Component {
  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: "bottom",
  };

  render() {
    const data = {
      chartData: {
        labels: this.props.weightpoints.map((weightpoint) => weightpoint.date),
        datasets: [
          {
            label: "Progress",
            data: this.props.weightpoints.map(
              (weightpoint) => weightpoint.weight
            ),
            backgroundColor: ["rgba(255,99,132,0.6)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 2,
          },
        ],
      },
    };
    return (
      <div className="chart">
        <Line
          // data={this.state.chartData}
          data={data.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Weight Progress",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            maintainAspectRatio: false,
          }}
          width={500}
          height={400}
          // options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weightpoints: state.weightpoints.weightpoints,
});

export default connect(mapStateToProps)(WeightChart);
