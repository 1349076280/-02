import React, { Component } from 'react';
import Withdraw from '@/components/withdraw'
import Keyword from '@/components/keyword'
import Other from '@/components/other'
import { Divider } from 'antd';
class index extends Component {
    render() {

        return (
            <div>
                <Keyword></Keyword>
                <Divider />
                <Other></Other>
                <div style={{ marginTop: 20 }}>
                    <Withdraw></Withdraw>
                </div>
            </div >
        );
    }
}

export default index;
