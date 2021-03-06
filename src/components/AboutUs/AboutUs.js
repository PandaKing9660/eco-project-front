import React, {useState} from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import ProjectFooter from '../HomePage/ProjectFooter/ProjectFooter';
import {ProgressBar, Row, Col} from 'react-bootstrap';

import NamePlateCard from './NamePlateCard';

const AboutUS = () => {
  const [namePlates, setNamePlates] = useState ([
    {
      image: './aditya.jpeg',
      name: ' Aditya Sharma',
      task: 'Frontend Dev, Game Dev',
    },
    {
      image: './amit.jpg',
      name: ' Amit Kesari',
      task: ' Backend Dev, Frontend Dev ',
    },
    {
      image: './Ajay.jpeg',
      name: 'D. Ajay',
      task: 'Content Creation, Data Collection ',
    },
    {
      image: './Anand.jpeg',
      name: 'Anu Anand Annu ',
      task: 'Content Creation , Data Collection ',
    },
    {
      image: './Sowmya.jpeg',
      name: 'Emani Naga Sowmya',
      task: 'Project data and design',
    },
    {
      image: './Teju.jpeg',
      name: 'Tejaswini Hotkar',
      task: 'Project data and Design',
    },
    {
      image: './Manjunath.jpeg',
      name: 'V. Manjunath',
      task: 'Frontend Dev, Game Dev',
    },
    {image: './404.png', name: 'Angki Pajing', task: 'Project Data and Design'},
    {
      image: './404.png',
      name: 'Ankit Ghildiyal ',
      task: 'Project write up and Content',
    },
    {image: './404.png', name: ' L Sai Kritik', task: 'NONE'},
  ]);
  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
      <NavigationBar />
      {/* <img src={"./amit.jpg"} /> */}

      <div>
        <ProgressBar
          striped
          variant="success"
          now={51}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
        <ProgressBar
          striped
          variant="info"
          now={40}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
        <ProgressBar
          striped
          variant="warning"
          now={80}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
        <ProgressBar
          striped
          variant="danger"
          now={70}
          animated
          style={{background: 'none', transform: 'rotate(180deg)'}}
        />
      </div>
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0',
        }}
      >
        {namePlates.map (namePlate => {
          return (
            <Col
              md={3}
              key={Math.random ()}
              style={{
                padding: '0',
                margin: '0',
              }}
            >
              <NamePlateCard memeCard={namePlate} />
            </Col>
          );
        })}
      </Row>
      <p
        style={{
          backgroundColor: 'chocolate',
          fontSize: 'x-large',
          margin: '50px',
        }}
      >
        <strong>“Desh ki mitti se jude log” </strong>
        made this in hope that it will help to spread knowledge about soil pollution in much shorter time through memes, games etc.
        {' '}
        This is our team and we worked together to promote a good scientific way to make soil healthy for plants and also to spread
        {' '}
        how this plays a major role in our life cycles as every living organism is attached to the soil in some way.
      </p>
      <ProjectFooter />
    </div>
  );
};

export default AboutUS;
