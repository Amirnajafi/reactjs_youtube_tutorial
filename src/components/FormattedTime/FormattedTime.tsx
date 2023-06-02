import React, { memo } from 'react'
import IFormattedTimeProps from './FormattedTime.types';
import moment from 'moment';
const FormattedTime = (props : IFormattedTimeProps) => {
    return (
        <div>
            <span>{moment(props.stringDate).format("YYYY/MM/DD")}</span>
        </div>
    )
}

export default memo(FormattedTime)