import React, { FC } from 'react';
import { Tag } from '../../components/Tag';
import { TAG_COLOR } from '../../constant';
import { PokemenData } from '../../types';
import './RightViewer.scss';

interface ViewerProps {
    pokemenData: PokemenData;
}

const RightViewer: FC<ViewerProps> = ({ pokemenData }) => {
    return (
        <div className="RightViewer">
            <div className="RightViewer__header">
                <h2>{pokemenData.name ? pokemenData.name : 'No data'}</h2>
                <span>{pokemenData.id ? pokemenData.id : 'No data'}</span>
            </div>
            <div className="RightViewer__main">
                <div className="RightViewer__main-left">
                    <div className="RightViewer__main-left-types">
                        {pokemenData.types.map((pokeType: string) => (
                            <Tag
                                key={Math.random()}
                                label={pokeType}
                                color={TAG_COLOR[pokeType]}
                                style={{ margin: '0px 8px 8px 0px' }}
                            />
                        ))}
                    </div>
                    <div className="RightViewer__main-left-property">
                        <div>
                            <span style={{ marginRight: '30px' }}>Height:</span>
                            <span>
                                {pokemenData.height
                                    ? `${pokemenData.height} ft`
                                    : 'No data'}
                            </span>
                        </div>
                        <div>
                            <span style={{ marginRight: '24px' }}>Weight:</span>
                            <span>
                                {pokemenData.weight
                                    ? `${pokemenData.weight} lbs`
                                    : 'No data'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="RightViewer__main-right">
                    <img
                        src={pokemenData.sprite}
                        alt="pokemen"
                        className="pokemanImg"
                    />
                </div>
            </div>
        </div>
    );
};

export default RightViewer;
