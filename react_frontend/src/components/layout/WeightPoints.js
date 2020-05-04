import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getWeightPoints, deleteWeightPoint } from "../../actions/weightpoints";

export class WeightPoints extends Component {
  static propTypes = {
    weightpoints: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getWeightPoints();
  }

  render() {
    console.log(this.props.weightpoints);
    return (
      <Fragment>
        <h2>Weight Points</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Weight</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.weightpoints.map((weightpoint) => (
              <tr key={weightpoint.id}>
                <td>{weightpoint.id}</td>
                <td>{weightpoint.weight}</td>
                <td>{weightpoint.date}</td>
                <td>
                  <button
                    onClick={this.props.deleteWeightPoint.bind(
                      this,
                      weightpoint.id
                    )}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  weightpoints: state.weightpoints.weightpoints,
});

// const mapDispatchToProps = {
//   getWeightPoints,
// };

export default connect(mapStateToProps, { getWeightPoints, deleteWeightPoint })(
  WeightPoints
);
