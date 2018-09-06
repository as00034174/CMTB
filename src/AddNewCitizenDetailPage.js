import React from "react"
import { Header } from './pages/Header'
import { connect } from 'react-redux'
import { Menu } from './pages/Menu'
import { Router, Route } from 'react-router-dom'
import { FormAddNewItem } from './pages/FormAddNewItem'
import { MenuCitizenDetailItems } from './pages/MenuCitizenDetailItems'

class AddNewCitizenDetailPage extends React.Component {
    render() {
        console.log(this.props)
        return (

            // <Router history={this.props.history}>

            //     <div className="container">
            //         <Header />
            //         <Menu />
            //         <Route path="/add" component={FormAddNewItem}></Route>
            //         <Route path="/items" component={MenuCitizenDetailItems}  ></Route>
            //     </div>
            // </Router>
            <div className="container">
                <Header />
                <Menu />
                <FormAddNewItem />
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user } = state;
    return { user };
}

const connectToAddNew = connect(mapStateToProps)(AddNewCitizenDetailPage)
export { connectToAddNew as AddNewCitizenDetailPage }