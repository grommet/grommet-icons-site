import React, { useContext, useEffect, useState } from 'react';

import { Box, Heading, ResponsiveContext } from 'grommet';

import {
  Achievement,
  Ascend,
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
  Chrome,
  Compass,
  Cursor,
  Configure,
  Currency,
  Descend,
  Diamond,
  Directions,
  Drag,
  Edge,
  Edit,
  EmptyCircle,
  Inspect,
  Favorite,
  Firefox,
  InProgress,
  Gamepad,
  Gift,
  Group,
  Grow,
  Gremlin,
  Home,
  IceCream,
  InternetExplorer,
  Install,
  Java,
  Launch,
  Like,
  LinkNext,
  LinkUp,
  Monitor,
  Opera,
  PersonalComputer,
  Refresh,
  Restaurant,
  Run,
  SafariOption,
  Search,
  Send,
  Star,
  Swim,
  Ticket,
  Tools,
  Train,
  TreeOption,
  Trophy,
  User,
  UserFemale,
  Workshop,
  Volume,
  Vulnerability,
} from 'grommet-icons';

const messages = [
  {
    text: 'I love games',
    icons: [Inspect, Favorite, Gamepad],
  },
  {
    text: 'I like pretty things',
    icons: [Diamond, Gift, Cart],
  },
  {
    text: 'Get up and commute',
    icons: [Alarm, Run, Bike],
  },
  {
    text: 'Grow, cook, and enjoy',
    icons: [Grow, Restaurant, Gremlin],
  },
  {
    text: 'Tools of the trade',
    icons: [Edit, PersonalComputer, Configure],
  },
  {
    text: 'Planes, trains, and automobiles',
    icons: [Send, Train, Car],
  },
  {
    text: 'Eat, drink, and be merry',
    icons: [Cafeteria, Bar, Gremlin],
  },
  {
    text: 'Time to make the donuts',
    icons: [InProgress, Restaurant, EmptyCircle],
  },
  {
    text: 'Boy meets Girl',
    icons: [User, ChatOption, UserFemale],
  },
  {
    text: 'The daily routine',
    icons: [Java, Monitor, Workshop],
  },
  {
    text: 'Be well read',
    icons: [Catalog, CatalogOption, Article],
  },
  {
    text: 'Turn up the beat',
    icons: [Refresh, LinkUp, Volume],
  },
  {
    text: 'Eyes on the prize',
    icons: [Inspect, LinkNext, Trophy],
  },
  {
    text: 'Shoot for the stars',
    icons: [Launch, Vulnerability, Star],
  },
  {
    text: 'Try a triathlon',
    icons: [Swim, Bike, Run],
  },
  {
    text: 'We like ice cream',
    icons: [Group, Like, IceCream],
  },
  {
    text: 'Click, drag, and drop',
    icons: [Cursor, Drag, Install],
  },
  {
    text: 'Build a tree house',
    icons: [Tools, TreeOption, Home],
  },
  {
    text: 'Buy your meal ticket',
    icons: [Currency, Cafeteria, Ticket],
  },
  {
    text: 'Search high and low',
    icons: [Search, Ascend, Descend],
  },
  {
    text: 'Cross-browser, of course',
    icons: [Edge, Chrome, Firefox],
  },
  {
    text: 'Cross-browser, of course',
    icons: [InternetExplorer, SafariOption, Opera],
  },
  {
    text: 'Chart a course to success',
    icons: [Compass, Directions, Achievement],
  },
];

const IconHero = () => {
  const responsive = useContext(ResponsiveContext);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const possibleMessages = messages.filter(m => m.text !== message.text);
      const newMessage =
        possibleMessages[Math.floor(Math.random() * possibleMessages.length)];
      newMessage.key = new Date();
      setMessage(newMessage);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  const Icon1 = message.icons[0];
  const Icon2 = message.icons[1];
  const Icon3 = message.icons[2];
  // make sure to always remount to animate again
  const headingKey = `message_${message.key}`;
  const icon1Key = `icon1_${message.key}`;
  const icon2Key = `icon2_${message.key}`;
  const icon3Key = `icon3_${message.key}`;
  const size = responsive === 'small' ? 'large' : 'xlarge';

  return (
    <Box align="center" justify="start" pad="large">
      <Box
        justify="center"
        direction="row"
        wrap
        pad={{ bottom: 'large' }}
      >
        <Box margin="medium">
          <Icon1 key={icon1Key} className="spin" size={size} />
        </Box>
        <Box margin="medium">
          <Icon2 key={icon2Key} className="spin" size={size} />
        </Box>
        <Box margin="medium">
          <Icon3 key={icon3Key} className="spin" size={size} />
        </Box>
      </Box>
      <Box justify="center" basis="xsmall">
        <Heading
          key={headingKey}
          textAlign="center"
          level={1}
          margin="none"
          className="fade-text"
        >
          {message.text}
        </Heading>
      </Box>
      <Heading level={3} margin="small">
        SVG icons for React
      </Heading>
    </Box>
  );
}

export default IconHero;
