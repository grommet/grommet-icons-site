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
  Launch,
  LinkNext,
  LinkUp,
  Monitor,
  PersonalComputer,
  Refresh,
  Restaurant,
  Run,
  Send,
  Star,
  Train,
  Trophy,
  User,
  UserFemale,
  Workshop,
  Volume,
  Vulnerability,
} from 'grommet-icons';

import { withSmall } from '../utils/hocs';

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
  {
    text: 'Eyes on the prize',
    icons: [
      Inspect, LinkNext, Trophy,
    ],
  },
  {
    text: 'Shoot for the stars',
    icons: [
      Launch, Vulnerability, Star,
    ],
  },
];

class IconHero extends Component {
  state = {
    message: messages[0],
  }

  componentDidMount() {
    this.changeMessageInterval = setInterval(() => {
      const { message } = this.state;
      const possibleMessages = messages.filter(m => m.text !== message.text);
      const newMessage = possibleMessages[Math.floor(Math.random() * possibleMessages.length)];
      newMessage.key = new Date();
      this.setState({ message: newMessage });
    }, 5000); // 5 seconds
  }

  componentWillUnmount() {
    if (this.changeMessageInterval) {
      clearTimeout(this.changeMessageInterval);
      this.changeMessageInterval = undefined;
    }
  }

  render() {
    const { small } = this.props;
    const { message } = this.state;

    const Icon1 = message.icons[0];
    const Icon2 = message.icons[1];
    const Icon3 = message.icons[2];
    // make sure to always remount to animate again
    const headingKey = `message_${message.key}`;
    const icon1Key = `icon1_${message.key}`;
    const icon2Key = `icon2_${message.key}`;
    const icon3Key = `icon3_${message.key}`;
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
      <Box
        align='center'
        justify='start'
        pad={small ? 'medium' : 'large'}
      >
        <Box
          justify='center'
          direction='row'
          wrap={true}
          pad={{ bottom: small ? 'small' : 'large' }}
        >
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
        <Box justify='center' basis='xsmall'>
          <Heading
            key={headingKey}
            textAlign='center'
            level={small ? 2 : 1}
            margin='none'
            className='fade-text'
          >
            {message.text}
          </Heading>
        </Box>
        <Heading level={3} margin='small'>SVG icons for React</Heading>
      </Box>
    );
  }
}

export default withSmall(IconHero);
