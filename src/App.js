import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoute, privateRoute } from './routes';
import { DefaultLayout } from './layout';
import './App.scss';

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
