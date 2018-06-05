import React, { Component } from 'react';

import { Anchor, Box, Grid, Grommet, Heading, InfiniteScroll, Paragraph, Text } from 'grommet';

import * as Icons from 'grommet-icons';
import metadata from 'grommet-icons/metadata';

import IconExample from './components/IconExample';
import IconHero from './components/IconHero';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderFooter from './components/HeaderFooter';
import Gremlin from './components/Gremlin';
import Search from './components/Search';

import { withSmall } from './utils/hocs';

const iconKeys = Object.keys(Icons).filter(icon =>
  Icons[icon] && icon !== 'default' && icon !== 'ThemeContext' &&
  Icons[icon] !== true);

class App extends Component {
  state = {
    iconName: iconKeys[Math.floor(Math.random() * iconKeys.length)],
    search: '',
  }

  componentDidMount() {
    this.changeIconInterval = setInterval(() => {
      this.setState({ iconName: iconKeys[Math.floor(Math.random() * iconKeys.length)] });
    }, 5000); // 5 seconds
  }

  componentWillUnmount() {
    if (this.changeIconInterval) {
      clearTimeout(this.changeIconInterval);
      this.changeIconInterval = undefined;
    }
  }

  render() {
    const { small } = this.props;
    const { iconName, search } = this.state;

    const icons = iconKeys
      .filter(icon => (
        icon.toLowerCase().match(search.toLowerCase()) ||
        (metadata[icon] || []).some(synonym =>
          synonym.substr(0, search.length).toLowerCase() === search.toLowerCase())
      ))
      .map(icon => ({
        name: icon,
        Icon: Icons[icon],
        label: search ? icon.replace(
          new RegExp(search, 'ig'),
          text => (text ? `<strong>${text}</strong>` : '')
        ) : icon,
      }));

    return (
      <Grommet>
        <Box background='brand'>
          <Header />
          <IconHero />
          <HeaderFooter />
        </Box>
        <IconExample name={iconName} icon={Icons[iconName]} />
        <Box align='center' pad={{ horizontal: 'medium' }}>
          <Heading textAlign='center'>Looking for something in particular?</Heading>
        </Box>
        <Box justify='center' direction='row' pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Search
            value={search}
            placeholder={`Search ${iconKeys.length} icons (e.g. social, delete, user, arrow, sport, player)`}
            onInput={event => this.setState({ search: event.target.value })}
          />
        </Box>
        <Box justify='center' direction='row' pad={{ top: 'medium' }}>
          <Box basis='xlarge'>
            <Grid columns='small'>
              {icons.length > 0 ? (
                <InfiniteScroll items={icons}>
                  {({ label, Icon, name }) => (
                    <Box
                      basis={small ? 'xsmall' : 'small'}
                      justify='start'
                      align='center'
                      pad={{ vertical: 'small' }}
                      key={name}
                      style={{ minHeight: small ? '162px' : '144px' }}
                    >
                      <Icon size='large' color='plain' />
                      <Text
                        textAlign='center'
                        margin='small'
                        style={{ wordBreak: 'break-all' }}
                      >
                        <span dangerouslySetInnerHTML={{ __html: label }} />
                      </Text>
                    </Box>
                  )}
                </InfiniteScroll>
              ) : (
                <Box align='center'>
                  <Heading level={3} margin='none'>No icon, sorry!</Heading>
                  <Paragraph textAlign='center' margin='small'>
                    If you believe this icon should exist in our library,
                    please file an
                    <Anchor target='_blank' href='https://github.com/grommet/grommet-icons/issues/new'>
                      issue
                    </Anchor> and we will look into it.
                  </Paragraph>
                  <Box pad={{ top: 'medium' }}>
                    <Gremlin />
                  </Box>
                </Box>
              )}
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Grommet>
    );
  }
}

export default withSmall(App);
