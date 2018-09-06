import React from 'react'
import { itemAction } from '../actions/item.acion';
import { connect } from 'react-redux';
// import { itemService } from '../services/item.service';

class MenuCitizenDetailItems extends React.Component {
    render() {
        return (
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                            <h3 class="title-5 m-b-35">data table</h3>
                                <div class="table-data__tool">
                                    <div class="table-data__tool-left">
                                        <div class="rs-select2--light rs-select2--md">
                                            <select class="js-select2" name="property">
                                                <option selected="selected">All Properties</option>
                                                <option value="">Option 1</option>
                                                <option value="">Option 2</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                        <div class="rs-select2--light rs-select2--sm">
                                            <select class="js-select2" name="time">
                                                <option selected="selected">Today</option>
                                                <option value="">3 Days</option>
                                                <option value="">1 Week</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                    </div>
                                    <div class="table-data__tool-right">
                                        <button class="au-btn au-btn-icon au-btn--green au-btn--small">
                                            <i class="zmdi zmdi-plus"></i>add item</button>
                                        <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                            <select class="js-select2" name="type">
                                                <option selected="selected">Export</option>
                                                <option value="">Option 1</option>
                                                <option value="">Option 2</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive table-responsive-data2">
                                    <table class="table table-data2 table-bordered ">
                                        <thead class="table-dr thead-dark">
                                            <tr>

                                                <th scope="col">Full Name</th>
                                                <th>Birthday</th>
                                                <th>Gender</th>
                                                <th>Address</th>
                                                <th>Identitication</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr class="tr-shadow item-citizen-hover">

                                                <td>
                                                    <p class="full-name-col">Tran Trung Nam</p>
                                                </td>
                                                <td>
                                                    <p>16/11/1997</p>
                                                </td>
                                                <td class="desc">Male</td>
                                                <td class="col-address">
                                                    <p class="address-item">528/17/16 Tinh lo 43, khu pho 2, phuong Tam Binh, Quan Thu Duc, TPHCM</p>
                                                </td>
                                                <td>
                                                    <span class=" col-criminal-item">025644227</span>
                                                </td>
                                                <td>
                                                    <div class="table-data-feature">
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                            <i class="zmdi zmdi-mail-send"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                            <i class="zmdi zmdi-edit"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                            <i class="zmdi zmdi-delete"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                                            <i class="zmdi zmdi-more"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="spacer"></tr>
                                            <tr class="tr-shadow item-citizen-hover">

                                                <td>
                                                    <p class="full-name-col">Tran Trung Nam</p>
                                                </td>
                                                <td>
                                                    <p>16/11/1997</p>
                                                </td>
                                                <td class="desc">Male</td>
                                                <td class="col-address">
                                                    <p class="address-item">528/17/16 Tinh lo 43, khu pho 2, phuong Tam Binh, Quan Thu Duc, TPHCM</p>
                                                </td>
                                                <td>
                                                    <span class=" col-criminal-item">025644227</span>
                                                </td>
                                                <td>
                                                    <div class="table-data-feature">
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                            <i class="zmdi zmdi-mail-send"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                            <i class="zmdi zmdi-edit"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                            <i class="zmdi zmdi-delete"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                                            <i class="zmdi zmdi-more"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

const connectToMenuCitizenDetailItems = connect(mapStateToProps)(MenuCitizenDetailItems);
export { connectToMenuCitizenDetailItems as MenuCitizenDetailItems }