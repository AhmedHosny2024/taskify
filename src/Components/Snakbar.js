import {  message } from 'antd';

// const [messageApi] = message.useMessage();

export const msg = (type,content) => {
  message.open({
    type,
    content,
    duration:1.5,
  });
};