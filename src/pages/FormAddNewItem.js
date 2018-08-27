import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class FormAddNewItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-header">Credit Card</div>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h3 class="text-center title-2">Pay Invoice</h3>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-6 ">
                                                <img src="/assets/images/noimage.png" class="rounded imagePerson " alt="Cinque Terre" />
                                            </div>
                                            <div class="col-6 cardMobie-320">
                                                <label for="x_card_code" class="control-label mb-1">ID card</label>
                                                <div class="input-group">
                                                    <input id="x_card_code" name="x_card_code" type="tel" class="form-control cc-cvc input-cardID" value="" data-val="true" data-val-required="Please enter the security code"
                                                        data-val-cc-cvc="Please enter a valid security code" autocomplete="off" />

                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group has-success">
                                            <label for="cc-name" class="control-label mb-1">Full name</label>
                                            <input id="cc-name" name="cc-name" type="text" class="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card"
                                                autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error" />
                                            <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="cc-number" class="control-label mb-1">Date of birth</label>
                                            <input id="cc-number" name="cc-number" type="tel" class="form-control cc-number identified visa" value="" data-val="true"
                                                data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number"
                                                autocomplete="cc-number" />
                                            <span class="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="cc-exp" class="control-label mb-1">Sex</label>
                                                    <input id="cc-exp" name="cc-exp" type="tel" class="form-control cc-exp" value="" data-val="true" data-val-required="Please enter the card expiration"
                                                        data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY"
                                                        autocomplete="cc-exp" />
                                                    <span class="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                                                </div>
                                            </div>
                                            <div class="col-6 " >
                                                <label for="x_card_code" class="control-label mb-1">ID card</label>
                                                <div class="input-group">
                                                    <input id="x_card_code" name="x_card_code" type="tel" class="form-control cc-cvc" value="" data-val="true" data-val-required="Please enter the security code"
                                                        data-val-cc-cvc="Please enter a valid security code" autocomplete="off" />

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block submit-lap-custom">
                                                <span id="payment-button-amount">Submit</span>
                                                <span id="payment-button-sending">Sending…</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-header">
                                        <strong>More information</strong>
                                        <small> Form</small>
                                    </div>
                                    <div class="card-body card-block">
                                        <div class="form-group">
                                            <label for="company" class=" form-control-label">Relationship</label>
                                            <input type="text" id="company" placeholder="Father name" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="vat" class=" form-control-label">and</label>
                                            <input type="text" id="vat" placeholder="Mother name" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="street" class=" form-control-label">Adress</label>
                                            <input type="text" id="street" placeholder="Enter adress" class="form-control" />
                                        </div>
                                        <div class="row form-group">
                                            <div class="col-8">
                                                <div class="form-group">
                                                    <label for="city" class=" form-control-label">Degree</label>
                                                    <input type="text" id="city" placeholder="Enter degree of citizen" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-8">
                                                <div class="form-group">
                                                    <label for="postal-code" class=" form-control-label">Identification</label>
                                                    <input type="text" id="postal-code" placeholder="Enter Identification" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <button id="payment-button" type="submit" onClick={this.handleSubmit} class="btn btn-lg btn-info btn-block submit-mobie-custom">
                                            <span id="payment-button-amount">Submit</span>
                                            <span id="payment-button-sending" >Sending…</span>
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