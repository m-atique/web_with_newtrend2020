import {Home,About,Services,NotFound} from '../components/index'
import {Route,Routes } from 'react-router-dom'



function Mainrouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='/about' element={<About />}>About</Route>
                <Route path='/services' element={<Services />}>Services</Route>
                <Route path = '*' element={<NotFound />}></Route>
            </Routes>
            
        </div>
    );
}

export default Mainrouter;