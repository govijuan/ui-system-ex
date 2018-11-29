import React from 'react';
interface Props {
    width?: string;
    padding?: string;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
}
declare const Card: React.SFC<Props>;
export default Card;
