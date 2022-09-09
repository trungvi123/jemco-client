import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoute, privateRoute } from './routes';
import { DefaultLayout } from './layout';
import './App.scss';

const firebaseConfig = {
    apiKey: "AIzaSyCFYdBGXkRpT7mvixzMmHohWBuzenITDGQ",
    authDomain: "jemcoclient-e5c33.firebaseapp.com",
    projectId: "jemcoclient-e5c33",
    storageBucket: "jemcoclient-e5c33.appspot.com",
    messagingSenderId: "213975107478",
    appId: "1:213975107478:web:a43c91fd2a818ebe91ffb7",
    measurementId: "G-JBYXNJ55DX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
function App() {
    const user = JSON.parse(localStorage.getItem('user'))
    
    return (
        <div>
            <Routes>
                {publicRoute.map((item, index) => {
                    let Layout = DefaultLayout;
                    if (item.layout) {
                        Layout = item.layout;
                    } else if (item.layout === null) {
                        Layout = Fragment;
                    }
                    return <Route key={index} path={item.path} element={<Layout>{item.element}</Layout>}></Route>;
                })}
                {user && user.isAdmin && 
                    privateRoute.map((item, index) => {
                        let Layout = DefaultLayout;
                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) {
                            Layout = Fragment;
                        }
                        return <Route key={index} path={item.path} element={<Layout>{item.element}</Layout>}></Route>;
                    })}
            </Routes>
        </div>
    );
}
export default App;
