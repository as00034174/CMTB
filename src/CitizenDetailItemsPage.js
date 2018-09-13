import React from "react"
import { Header } from './pages/Header'
import { Menu } from './pages/Menu'
import { connect } from "react-redux";
import { MenuCitizenDetailItems } from './pages/MenuCitizenDetailItems'

class CitizenDetailItemsPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Menu />
                <MenuCitizenDetailItems />
            </div>
        )
    }
}

function mapStateToProps(state) {
}

const connectToCitizenDetailItemsPage = connect(mapStateToProps)(CitizenDetailItemsPage)
export { connectToCitizenDetailItemsPage as CitizenDetailItemsPage }