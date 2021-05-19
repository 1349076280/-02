
import React, { Component } from 'react';
import Withdraw from '@/components/withdraw'
import Keyword from '@/components/keyword'
import Other from '@/components/other'
import { Divider } from 'antd';

class index extends Component {
    render() {
        return (
            <div>
                <div>警告话语设置</div>
                <Divider />
                <Keyword></Keyword>
                <Other></Other>
                <div style={{ marginTop: 20 }}>
                    <Withdraw></Withdraw>
                </div>
            </div>
        );
    }
}

export default index;
