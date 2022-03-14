import React, { FC, useState, useEffect } from 'react';
import Button from '../../components/Button';
import DropDown from '../../components/Dropdown';
import Loading from '../../components/Loading';
import { getPokemen } from '../../service/pokemen';
import { composeData } from '../../utils/utils';
import { PokemenData } from '../../types';
import { randomNumber } from '../../utils/utils';
import './LeftController.scss';

interface Props {
    defaultData?: PokemenData;
    setData: React.Dispatch<React.SetStateAction<PokemenData>>;
}
interface Option {
    label: string;
    value: number;
}
const options = [
    { label: 'Select', value: 0 },
    { label: 'Bulbasaur', value: 1 },
    { label: 'Ivysaur', value: 2 },
    { label: 'Venusaur', value: 3 },
];

const LeftController: FC<Props> = ({ setData }) => {
    const defaultData = new PokemenData();

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<Option>({
        label: 'Bulbasaur',
        value: 1,
    });

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };
    const handleChange = (option: Option) => {
        if (option.value !== selectedOption.value) {
            setSelectedOption(option);
            setLoading(true);
        }
    };

    useEffect(() => {
        if (selectedOption.value !== 0) {
            (async () => {
                try {
                    const data = await getPokemen(selectedOption.value);
                    const pokemenData = composeData(data, defaultData);
                    setData(pokemenData);
                } catch (err) {
                } finally {
                    setLoading(false);
                }
            })();
        } else {
            setLoading(false);
            setData(defaultData);
        }
    }, [selectedOption.value]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="LeftController">
                    <div>
                        <div className="LeftController__header">
                            <h2>Pokedex</h2>
                        </div>
                        <div className="LeftController__dropdown-wrapper">
                            <DropDown
                                label="View Starter"
                                open={open}
                                handleOpen={handleOpen}
                                options={options}
                                selectedOption={selectedOption}
                                handleChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="LeftController__viewRandom-wrapper">
                        <Button
                            color="primary"
                            onClick={() => {
                                setSelectedOption(() => ({
                                    label: 'Select',
                                    value: randomNumber(1, 151),
                                }));
                                setLoading(true);
                            }}
                            style={{ width: '100%' }}
                        >
                            View
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};
export default LeftController;
