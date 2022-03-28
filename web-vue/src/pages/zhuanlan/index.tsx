import { defineComponent } from 'vue';
import ColumnList from './column-list';

const list = [
  {
    id: 1,
    title: 'PPT实验小学',
    desc: '各种稀奇古怪的装逼技能，或许你可以试试~',
    avatar: 'https://pic2.zhimg.com/v2-3c98b959c2582947850cd69f144d3f03_xs.jpg?source=d16d100b',
  },
  {
    id: 2,
    title: 'CG插画绘画板绘交流',
    desc: '学习绘画交流群：807508668 微信公众号：插画设',
    avatar: 'https://pica.zhimg.com/v2-791cd13ccf7cf22f801328f2f9f1b6fb_xs.jpg?source=d16d100b',
  },
  {
    id: 3,
    title: 'TensorLayer技术分享',
    desc: '各类开源项目、最新论文讨论，不限于TensorFlow',
    avatar: 'https://pica.zhimg.com/v2-b65c706d75c35c9d8f09c662e397e55e_xs.jpg?source=d16d100b',
  },
  {
    id: 4,
    title: '我眼中的世界',
    desc: '一个下午、一杯咖啡、一张沙发。让我来讲述，那',
    avatar: 'https://pica.zhimg.com/4b70deef7_xs.jpg?source=d16d100b',
  },
  {
    id: 5,
    title: '交易法门',
    desc: '入群请加助理微信：zhuliqiqi7',
    avatar: 'https://pica.zhimg.com/v2-e11f6dd8eeee14d452cf4129eaf7ce36_xs.jpg?source=d16d100b',
  },
  {
    id: 6,
    title: '爱美修道院',
    desc: '爱生活，爱艺术，爱美学，成长路上，分享服装搭',
    avatar: 'https://pica.zhimg.com/v2-76cfb545031e96b9a8ec39c237359a6a_xs.jpg?source=d16d100b',
  },
];
const ZhuanlanPage = defineComponent({
  name: 'ZhuanlanPage',
  setup() {
    return () => {
      <ColumnList list={list} />;
    };
  },
});

export default ZhuanlanPage;
