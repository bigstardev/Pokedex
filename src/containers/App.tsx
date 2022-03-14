import { useState } from 'react';
import LeftController from './LeftController';
import RightViewer from './RightViewer';
import { PokemenData } from '../types';
import './App.scss';

export default function App() {
    const defaultData = new PokemenData();

    const [data, setData] = useState<PokemenData>(defaultData);

    return (
        <div className="App">
            <div className="App__main">
                <LeftController setData={setData} />
                <RightViewer pokemenData={data} />
            </div>
        </div>
    );
}
