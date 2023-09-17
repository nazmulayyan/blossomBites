import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';
import OrderTab from './OrderTabs/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();

  const dessert = menu.filter((item) => item.category === 'dessert');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const drinks = menu.filter((item) => item.category === 'drinks');

  return (
    <div>
      <Helmet>
        <title>Blossom Bites | Order</title>
      </Helmet>
      {/* dessert items */}
      <Cover img={orderImg} title="OUR SHOP" description="wOULD YOU LIKE TO TRY A DISH"></Cover>

      <div className="w-11/12 mx-auto my-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex justify-center mb-10">
            <TabList className="flex">
              {categories.map((category, index) => (
                <Tab key={index} className={`tab-button ${tabIndex === index ? 'active-tab' : ''}`}>
                  {category.toUpperCase()}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
