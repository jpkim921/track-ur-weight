import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteWeightPoint } from "../../actions/weightpoints";

export class WeightPoints extends Component {
  static propTypes = {
    deleteWeightPoint: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <h2>Weight Points</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Weight</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.weightpoints
              .map((weightpoint) => (
                <tr key={weightpoint.id}>
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
              ))
              .reverse()}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default connect(null, { deleteWeightPoint })(WeightPoints);
