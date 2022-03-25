import React from "react";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import Biography from "../Biography/Biography";
import Title from "../Title/Title.js";


function App() {
  const dispatch = useDispatch();
  const FootballStars = useSelector(function(state){
    return state;
  })
  
  return (
    <div>
      <Title />
      <Biography FootballStars={FootballStars} onSearch={(text) => {
        dispatch({
          type: "search",
          payload: {
            text: text
          }
        })
      }}/>
    </div>
  );
}

export default App;
