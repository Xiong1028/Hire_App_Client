import React, {Component, Fragment} from 'react';
import {Button} from "antd-mobile";

export default () => {
    return (
        <Fragment>
            <p>404! Not found</p>
            <Button type='primary'
                    onClick={() => this.props.history.replace('/')}>
                Back to Home
            </Button>
        </Fragment>
    )
}

