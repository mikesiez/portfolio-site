import Topbar from './shared/Topbar'
import {appConfig} from "../appConfig";
import { useState } from 'react';
const config = appConfig.name

function name() {
    const [maximized, setMaximized] = useState(false)
    function maximize() {
        setMaximized(!maximized);
    }
    
    return (
        <div className="appMainDiv" data-maximized={maximized}>
            <Topbar maximize={maximize} maximized={maximized} Icon={config.icon} name={config.name} desc={config.desc}/>
        </div>
    )
}

export default name