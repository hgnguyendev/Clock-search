import React from 'react';

interface Props {
  names: string[]; // Chuyển từ string sang mảng các chuỗi
}

export const ContainerNames = ({ names }: Props) => {
  return (
    <div>
        <ul>
            {names.map((item) => (
                <li style={{color:'white'}}>{item}</li>
            ))}
        </ul>
    </div>
  );
};
