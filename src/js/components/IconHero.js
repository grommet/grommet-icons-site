import React, { Component } from 'react';

import { Box, Heading } from 'grommet';

import {
  Alarm,
  Article,
  Bar,
  Bike,
  Cafeteria,
  Catalog,
  CatalogOption,
  Car,
  Cart,
  ChatOption,
  Configure,
  Diamond,
  Edit,
  EmptyCircle,
  Inspect,
  Favorite,
  InProgress,
  Gamepad,
  Gift,
  Grow,
  Gremlin,
  Java,
  LinkUp,
  Monitor,
  PersonalComputer,
  Refresh,
  Restaurant,
  Run,
  Send,
  Train,
  User,
  UserFemale,
  Workshop,
  Volume,
} from 'grommet-icons';

import { Responsive } from './responsive';

const hugeIconTheme = {
  icon: {
    size: {
      xlarge: '176px',
    },
  },
};

const messages = [
  {
    text: 'I love games',
    icons: [
      Inspect, Favorite, Gamepad,
    ],
  },
  {
    text: 'I like pretty things',
    icons: [
      Diamond, Gift, Cart,
    ],
  },
  {
    text: 'Get up and commute',
    icons: [
      Alarm, Run, Bike,
    ],
  },
  {
    text: 'Grow, cook, and enjoy',
    icons: [
      Grow, Restaurant, Gremlin,
    ],
  },
  {
    text: 'Tools of the trade',
    icons: [
      Edit, PersonalComputer, Configure,
    ],
  },
  {
    text: 'Planes, trains, and automobiles',
    icons: [
      Send, Train, Car,
    ],
  },
  {
    text: 'Eat, drink, and be merry',
    icons: [
      Cafeteria, Bar, Gremlin,
    ],
  },
  {
    text: 'Time to make the donuts',
    icons: [
      InProgress, Restaurant, EmptyCircle,
    ],
  },
  {
    text: 'Boy meets Girl',
    icons: [
      User, ChatOption, UserFemale,
    ],
  },
  {
    text: 'The daily routine',
    icons: [
      Java, Monitor, Workshop,
    ],
  },
  {
    text: 'Well read',
    icons: [
      Catalog, CatalogOption, Article,
    ],
  },
  {
    text: 'Turn up the beat',
    icons: [
      Refresh, LinkUp, Volume,
    ],
  },
];

class IconHero extends Component {
  state = {
    small: false,
  }

  render() {
    const { small } = this.state;
    const possibleMessages = messages.filter(
      (message, index) => index !== this.previousMessageIndex
    );
    this.previousMessageIndex = Math.floor(Math.random() * possibleMessages.length);
    const message = possibleMessages[this.previousMessageIndex];

    const Icon1 = message.icons[0];
    const Icon2 = message.icons[1];
    const Icon3 = message.icons[2];
    // make sure to always remount to animate again
    const timestamp = new Date();
    const headingKey = `message_${timestamp}`;
    const icon1Key = `icon1_${timestamp}`;
    const icon2Key = `icon2_${timestamp}`;
    const icon3Key = `icon3_${timestamp}`;
    let iconProps = {
      theme: hugeIconTheme,
      size: 'xlarge',
    };
    if (small) {
      iconProps = {
        size: 'large',
      };
    }
    return (
      <Responsive onChange={isSmall => this.setState({ small: isSmall })}>
        <Box align='center' pad={small ? 'small' : 'medium'}>
          <Box justify='center' direction='row' wrap={true}>
            <Box margin='medium'>
              <Icon1 key={icon1Key} className='spin' {...iconProps} />
            </Box>
            <Box margin='medium'>
              <Icon2 key={icon2Key} className='spin' {...iconProps} />
            </Box>
            <Box margin='medium'>
              <Icon3 key={icon3Key} className='spin' {...iconProps} />
            </Box>
          </Box>
          <Heading
            key={headingKey}
            textAlign='center'
            level={1}
            margin='none'
            className='fade'
          >
            {message.text}
          </Heading>
          <Heading level={3} margin='small'>SVG icons for React</Heading>
        </Box>
      </Responsive>
    );
  }
}

export default IconHero;
