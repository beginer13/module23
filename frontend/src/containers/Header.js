import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { authenticationOpen } from '../store/actions/authenticationActions'

function mapDispatchToProps(dispatch) {
    return {
        openAuthentication: () => { dispatch(authenticationOpen()) }
    }
}

export default connect(null, mapDispatchToProps)(Header)
