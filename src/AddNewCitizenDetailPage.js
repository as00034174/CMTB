import React from "react"
import { Link } from 'react-router-dom'
import { Header } from './pages/Header'
import { connect } from 'react-redux'
import { Menu } from './pages/Menu'
import { Router, Route } from 'react-router-dom'
import { FormAddNewItem } from './pages/FormAddNewItem'

class AddNewCitizenDetailPage extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <div className="container">
                    <Header />
                    <Menu />
                    <div>
                        <Route path="/" component={FormAddNewItem}></Route>
                    </div>
                </div>
            </Router>

        )
    }
}
function mapStateToProps(state) {
    const { user } = state;
    return { user };
}

const connectToAddNew = connect(mapStateToProps)(AddNewCitizenDetailPage)
export { connectToAddNew as AddNewCitizenDetailPage }