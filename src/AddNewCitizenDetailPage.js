import React from "react"
import { Link } from 'react-router-dom'
import { Header } from './pages/Header'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'

class AddNewCitizenDetailPage extends React.Component {
    render() {
        return (
                <div className="container">
                    <Header />
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