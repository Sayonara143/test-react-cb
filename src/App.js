import Main from "./pages/main/Main";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'moment/locale/bm'
import moment from "moment"; 

function App() {
  moment().locale('bm')
  return (
    <Main/>
  );
}

export default App;
