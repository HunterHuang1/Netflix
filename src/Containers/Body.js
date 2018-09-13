import Units from '../Components/Units';
import { connect } from 'react-redux';

const mapStateToProp = (state) => {
    return {
        listUrl : state.mylist,
        recUrl: state.recommendations
    }
}

export default connect(mapStateToProp)(Units);