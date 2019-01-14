/*
 * Purpose: this component is used to select user icons
 * Author: xiong
 * Date: Jan,14
*/
import React from 'react';
import {List, Grid} from 'antd-mobile';

const IconSelector = (props) => {
    const listHeader = 'Please choose your icon';
    return (
        <List renderHeader={() => listHeader}>
            <Grid data={}>


            </Grid>
        </List>
    )
}

export default IconSelector;