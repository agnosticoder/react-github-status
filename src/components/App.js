import React from 'react';
import request from 'request';
import Item from './Item';

const App = () => {
    const [status, setStatus] = React.useState([]);


    const handleGetStatus = () => {
        request('https://www.githubstatus.com/', {json: true}, (error, response, body) => {
            console.log({error});
            console.log({response});
            setStatus(body.components);
        })
    }




    return (
        <div>
            <div className='header'>
                <h1>CSS Variable App</h1>
            </div>
            <div className='container'>
                <button onClick={handleGetStatus}>Get Status</button>
            </div>
            <div>
                {status.map(item => {
                    return <Item item={item} key={item.position}/>
                })}
            </div>
        </div>
    )
}

export default App
