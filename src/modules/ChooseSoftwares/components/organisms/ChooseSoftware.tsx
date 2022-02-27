import { useState } from 'react';
import {AutoComplete, Input, message } from 'antd';
import SoftwareList from '../../../../SoftwareList.json';
import useStore, { MAX_SOFTWARE } from '../../store';
import { ISoftware } from '../../../../types/softwareTypes';
import { SearchOutlined } from '@ant-design/icons';
import NextButton from "../molecules/NextButton";
import Header from "../atom/Header";

type CustomOptionProps = {
  software: ISoftware;
};
const CustomOption = ({ software }: CustomOptionProps) => {
  return (
    <div>
      <img className="mr-4 inline-block w-6" src={software.logo} />
      {software.name}
    </div>
  );
};

const ChooseSoftware = () => {
  const { softwares, addSoftware } = useStore();
  const [autoCompleteValue, setAutoCompleteValue] = useState('');
  const [optionsData] = useState(JSON.parse(JSON.stringify(SoftwareList)));

  const handleChange = (value: string) => {
    if (softwares.length < MAX_SOFTWARE && value) {
      const isPresent = softwares.some(
        (item: ISoftware) => item.value === value
      );
      if (isPresent) {
        message.error(`${value} already added`);
        return;
      }
      const selected = SoftwareList.find(
        (item) => item.value === value
      ) as ISoftware;
      addSoftware(selected);
    }
    setAutoCompleteValue('');
  };
  return (
    <div>
      <Header />
      <AutoComplete
        allowClear
        value={autoCompleteValue}
        disabled={softwares.length >= MAX_SOFTWARE}
        filterOption={true}
        className="w-72"
        options={optionsData.map((software: ISoftware) => {
          return {
            value: software.value,
            label: <CustomOption software={software} />,
          };
        })}
        onSelect={handleChange}
      >
        <Input
          placeholder="Search for any software"
          onChange={(e) => setAutoCompleteValue(e.target.value)}
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
      <NextButton />
    </div>
  );
};

export default ChooseSoftware;
