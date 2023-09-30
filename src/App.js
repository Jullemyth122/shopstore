import { useEffect, useState } from 'react';
import './App.css';
import Forgot from './components/Forgot';
import Login from './components/Login';
import './scss/auth.scss';
import './scss/footer.scss';
import './scss/home.scss';
import './scss/product.scss';
import './scss/carts.scss';
import './scss/checkout.scss';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './Home';
import Register from './components/Register';
import MenMain from './components/men/MenMain';
import WomenMain from './components/women/WomenMain';
import Carts from './components/carts/Carts';
import ResetPass from './components/ResetPass';
import Products from './components/products/Products';
import Checkout from './components/carts/Checkout';
import NewRelease from './components/products/NewRelease';
function App() {

  const [user,setUser] = useState(null) 
  useEffect(() => {
    const getUser = async () => {
      await fetch("http://localhost:7777/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then((res) => {
        if (res.status == 200) {
          return res.json()
        }
        throw new Error("authentication failed")
      }).then(resObject => {
          setUser(resObject.user)
      }).catch((err) => {
        console.log(err)
      })
    }

    getUser()
  },[])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ user?.displayName ? <Home user={user}/> : <Login setUser={setUser} user={user}/> }></Route>
          <Route path='/men' element={ user?.displayName ? <MenMain user={user}/> : <Login setUser={setUser} user={user}/> }></Route>
          <Route path='/women' element={ user?.displayName ? <WomenMain user={user}/> : <Login setUser={setUser} user={user}/> }></Route>
          <Route path='/cart' element={ user?.displayName ? <Carts user={user}/> : <Login setUser={setUser} user={user}/> }></Route>
          <Route path='/forgot' element={<Forgot/>}></Route>
          <Route path='/reset-password/:id' element={<ResetPass/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/products' element={user?.displayName ? <Home user={user}/> : <Login setUser={setUser} user={user}/>}></Route>
          <Route path='/Men' element={user?.displayName ? <MenMain user={user}/> : <Login setUser={setUser} user={user}/>}></Route>
          <Route path='/Women' element={user?.displayName ? <WomenMain user={user}/> : <Login setUser={setUser} user={user}/>}></Route>
          <Route path='/checkout' element={user?.displayName ? <Checkout user={user}/> : <Login setUser={setUser} user={user}/>}></Route>          
          <Route path='/new' element={ user?.displayName ? <NewRelease user={user}/> : <Login setUser={setUser} user={user}/>}></Route>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
