
const rootReducer = (state, action) => {
        switch(action.type){
                case "REMOVE_ITEM": 
                {
                    let SelectedMoive = state.mylist.filter(list => list.id === action.id);
                    let Newmylist = state.mylist.filter(list => list.id !== action.id);
                    state.recommendations.push(SelectedMoive[0]);
                    return {
                        ...state,
                        mylist: Newmylist,
                        recommendations: state.recommendations
                    }
                }
                case "ADD_ITEM":
                {
                    let SelectedMoive = state.recommendations.filter(rec => rec.id === action.id);
                    let Newrecommendations = state.recommendations.filter(rec => rec.id !== action.id);
                    state.mylist.push(SelectedMoive[0]);
                    return {
                        ...state,
                        recommendations: Newrecommendations,
                        mylist:state.mylist
                    }
                }
                default:
                    return state;
            }
}

export default rootReducer;