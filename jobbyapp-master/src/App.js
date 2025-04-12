import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from "./components/LoginForm"
import Home from "./components/Home"
import Jobs from "./components/Jobs"
import ProtectedRoute from "./components/ProtectedRoute"
import NotFound from "./components/NotFound"
import JobItemDetails from "./components/JobItemDetails"
import SimilarJobs from "./components/SimilarJobs"




import './App.css'


// These are the lists used in the application. You can move them to any component needed.


// Replace your code here
const App = () => 
(<Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails}/>
    <Route exact path="/not-found" component={NotFound} />

    <Redirect to="/not-found" />  

</Switch>



)



export default App
