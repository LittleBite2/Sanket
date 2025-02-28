// import ChangeTheme from "./components/ChangeTheme"
// import PropsCompo from "./components/PropsCompo"
// import StateHook from "./components/stateHooks"
// import Task from "./components/task"
// import Form from "./components/Form"
// import UseStateHooke from "./components/UseStateHooke"
// import CountValue from "./components/CountValue"
// import EffectHook from "./components/EffectHook"
// import MemoHook from "./components/MemoHook"
// import UseMemoHook from "./components/UseMemoHook"
// import UseCallbackHook from "./components/UseCallbackHook"
// import CustomHook from "./components/CustomHook"
// import PropsChildren from "./components/PropsChildren"
// import HigherOrderCompo from "./components/HigherOrderCompoParent"

import UseContextHook from "./components/UseContextHook"
import UserContextProvider from "./context/UserContextProvider"





function App() {

  return (
    <UserContextProvider>


      {/* <Task /> */}
      {/* <StateHook /> */}
      {/* <ChangeTheme /> */}
      {/* <PropsCompo /> */}
      {/* <UseStateHooke/> */}
      {/* <Form /> */}
      {/* <CountValue/> */}
      {/* <EffectHook /> */}
      {/* <MemoHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <CustomHook /> */}
      {/* <PropsChildren /> */}
      {/* <HigherOrderCompo /> */}
      <UseContextHook />
    </UserContextProvider>

  )
}

export default App
