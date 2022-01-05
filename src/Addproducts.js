import React from "react";
class Addproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pcode: "",
      pname: "",
      pquantity: "",
    };
    this.add = (e) => {
      e.preventDefault();
      this.props.addData(this.state);
      this.setState({pcode:"",pname:"",pquantity:""})
      
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form onSubmit={this.add}>
              <div className="jumbotron">
                <div class="mb-3">
                  <label for="productcode" className="form-label">
                    Product Code
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="productcode"
                    id="productcode"
                    value={this.state.pcode}
                    onChange={(e) => this.setState({ pcode: e.target.value })}
                  />
                </div>
                <div class="mb-3">
                  <label for="productname" className="form-label">
                    Product name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="productname"
                    id="productname"
                    value={this.state.pname}
                    onChange={(e) => this.setState({ pname: e.target.value })}
                  />
                </div>
                <div class="mb-3">
                  <label for="quantity" className="form-label">
                    Product Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    id="quantity"
                    value={this.state.pquantity}
                    onChange={(e) =>
                      this.setState({ pquantity: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default Addproducts;
