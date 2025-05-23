import ClickEvent_FunctionCall from "./ClickEvent_FunctionCall";
import Component from "./Component";
import CurlyBrackets from "./CurlyBrackets";
import Login,{ Profile, UserKey} from "./UserComp";

function App(){  // Apple Also Work Only Small Not Allowed
  return (
    <><h1>Hello</h1>
    <Component />
    <Comp />
    <Login />
    <Profile />
    <h1>{UserKey}</h1>

    <CurlyBrackets />
    <ClickEvent_FunctionCall />
    </>
  )
}


function Comp(){
  return(
    <h1>Comp</h1>
  )
}

export default App;  // Apple Also Work Only Small Not Allowed