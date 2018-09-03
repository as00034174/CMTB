import React from 'react'
import { itemAction } from '../actions/item.acion';
import { connect } from 'react-redux';

class FormAddNewItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idCard: '',
            fullName: '',
            birthDate: '',
            gender: "MALE",
            relationship: {
                fatherName: '',
                motherName: ''
            },
            address: '',
            degree: '',
        },

            this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value });

    }

    componentDidMount() {
        console.log(this.state.gender)
    }

    handleSubmit(event) {
        console.log(this.props);
        event.preventDefault();
        const { dispatch } = this.props;
        console.log("asdasd");
        dispatch(itemAction.addNewItem(this.state));
    }

    render() {
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">Credit Card</div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h3 className="text-center title-2">Pay Invoice</h3>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-6 ">
                                                <img src="/assets/images/noimage.png" className="rounded imagePerson " alt="Cinque Terre" />
                                            </div>
                                            <div className="col-6 cardMobie-320">
                                                <label className="control-label mb-1">ID card</label>
                                                <div className="input-group">
                                                    <input id="idCard" name="idCard" type="tel"
                                                        className="form-control cc-cvc input-cardID"
                                                        value={this.state.idCard} onChange={this.handleChange} />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group has-success">
                                            <label className="control-label mb-1">Full name</label>
                                            <input id="cc-name" name="fullName" type="text" className="form-control"
                                                value={this.state.fullName} onChange={this.handleChange} />
                                            <span className="help-block field-validation-valid" data-valmsg-for="cc-name"
                                                data-valmsg-replace="true"></span>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label mb-1">Date of birth</label>
                                            <input id="cc-number" name="birthDate" type="text"
                                                className="form-control cc-number identified visa" data-val="true"
                                                value={this.state.birthDate} onChange={this.handleChange} />
                                            <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                                        </div>
                                        <div className="row">
                                            <form>
                                                <div className="col-6">
                                                    <div className="form-group row customer-radio">
                                                        <label className="control-label mb-1">Gender:</label>
                                                        <div>
                                                            <input type="radio" className="gender" name="gender" value="MALE" checked={this.state.gender === "MALE"} onChange={this.handleChange} />Male
                                                    </div>
                                                        <div>
                                                            <input type="radio" className="gender" name="gender" value="FEMALE" checked={this.state.gender === "FEMALE"} onChange={this.handleChange} />Female
                                                    </div>
                                                        <span className="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <button id="payment-button" type="submit"
                                                className="btn btn-lg btn-info btn-block submit-lap-custom" onClick={this.handleSubmit}>
                                                <span id="payment-button-amount" >Submit</span>
                                                {!true && <span id="payment-button-sending">Sending…</span>}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <strong>More information</strong>
                                        <small> Form</small>
                                    </div>
                                    <div className="card-body card-block">
                                        <div className="form-group">
                                            <label className=" form-control-label">Relationship</label>
                                            <input type="text" id="company" name="fatherName" placeholder="Father name" value={this.state.fatherName || ''} onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className=" form-control-label">and</label>
                                            <input type="text" id="vat" name="motherName" placeholder="Mother name" value={this.state.motherName || ''} onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className=" form-control-label" name="address" >Adress</label>
                                            <input type="text" id="street" placeholder="Enter adress" name="address" value={this.state.address} onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className=" form-control-label">Degree</label>
                                            <textarea id="city" placeholder="Enter degree of citizen"
                                                value={this.state.degree} name="degree" onChange={this.handleChange} rows="7" className="form-control" />
                                        </div>
                                    </div>
                                    <div >
                                        <button id="payment-button" type="submit" onClick={this.handleSubmit}
                                            className="btn btn-lg btn-info btn-block submit-mobie-custom">
                                            <span id="payment-button-amount">Submit</span>
                                            {!true && <span id="payment-button-sending" >Sending…</span>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {};
}

const connectToAddNewItem = connect(mapStateToProps)(FormAddNewItem);
export { connectToAddNewItem as FormAddNewItem }