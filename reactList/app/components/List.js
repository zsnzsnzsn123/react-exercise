
import React from 'react';
import Department from 'components/Department';
const update = require('react-addons-update');

let recruitItems = [
    {
        department:'工程研发部门',total:120,
        jobList:[
            {jobName:'Mac 开发工程师',num:9},
            {jobName:'IOS App 测试工程师',num:17},
            {jobName:'Android 远程控制工程师',num:61},
            {jobName:'Web 前端工程师',num:31},
            {jobName:'Android 多媒体软件开发工程师',num:2}
    ]},
    {
        department:'产品设计部门',total:136,
        jobList:[
            {jobName:'网页设计师',num:47},
            {jobName:'ID/工业设计师',num:39},
            {jobName:'视觉设计师/GUI界面设计师',num:42},
            {jobName:'平面设计师',num:8}
    ]}
];

export default class List extends React.Component {

    constructor(props) {
        super(props);
        let checked = [];
        for (let i=0; i<recruitItems.length; i++) {
            let length = recruitItems[i].jobList.length;
            let arr = [];
            for (let j=0; j<length; j++) {
                arr[j] = false;
            }
            checked.push(arr);
        }
        this.state = {checked:checked};
    }
    updateState = (index,arr)=> {
        this.setState(update(this.state, {checked: {[index]: {$apply:x=>arr}}}));
    };
    handleEmpty = ()=> {
        let checked = [];
        for (let i=0; i<this.state.checked.length; i++) {
            let arr = this.state.checked[i];
            for (let j=0; j<arr.length; j++) {
                arr[j] = false;
            }
            checked.push(arr);
        }
        this.setState({checked:checked});
    };

    render() {
        return (
            <div className="JobList-container">
                <p className="Job-header">招聘职位<span  onClick={this.handleEmpty}>清空</span></p>
                <Department items={recruitItems} updateState={this.updateState} checked={this.state.checked}/>
            </div>
        );
    }
}
