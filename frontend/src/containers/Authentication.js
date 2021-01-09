import { connect } from 'react-redux'
import Authentication from '../components/Authentication/Authentication'
import { authenticationClose } from '../store/actions/authenticationActions'

function mapStateToProps(state) {
    return {
        opened: state.authenticationOpened
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeAuthentication: () => { dispatch(authenticationClose()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)

