import React, { useEffect, useState } from 'react';
import URLSearchParams from 'url-search-params';
import {
  Anchor,
  Box,
  Grid,
  Grommet,
  Heading,
  InfiniteScroll,
  Paragraph,
  Text,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { hpe } from 'grommet-theme-hpe';

import * as Icons from 'grommet-icons';
import metadata from 'grommet-icons/metadata';

import IconExample from './components/IconExample';
import IconHero from './components/IconHero';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderFooter from './components/HeaderFooter';
import Gremlin from './components/Gremlin';
import Search from './components/Search';

const ignoreNames = [
  'base',
  'default',
  'defaultProps',
  'extendDefaultTheme',
  'ThemeContext',
  'Blank',
  'Icon',
];

const iconKeys = Object.keys(Icons).filter(
  name =>
    Icons[name] &&
    ignoreNames.indexOf(name) === -1,
);

const openIssueAnchor = (
  <Anchor
    target="_blank"
    href="https://github.com/grommet/grommet-icons/issues/new"
  >
    issue
  </Anchor>
);

const App = () => {
  const [theme, setTheme] = useState();
  const [iconName, setIconName] = useState(iconKeys[Math.floor(Math.random() * iconKeys.length)]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setInterval(() =>
      setIconName(iconKeys[Math.floor(Math.random() * iconKeys.length)]),
      5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      setSearch(params.get('s') || '');
      setTheme(params.get('theme') === 'hpe' ? hpe : grommet);
    } else {
      setTheme(grommet);
    }
  }, []);

  useEffect(() => {
    // throttle when user is typing
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (search) params.set('s', search);
      else params.delete('s');
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}?${params.toString()}`,
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  const icons = iconKeys
    // filter out based on search
    .filter(
      name =>
        name
          .toLowerCase()
          // sanitize regular expression characters
          .match(search.toLowerCase().replace(/[#-}]/g, '\\$&')) ||
        (
          (metadata[name] && metadata[name].concat(name.toLowerCase())) ||
          []
        ).some(
          synonym =>
            synonym.substr(0, search.length).toLowerCase() ===
            search.toLowerCase(),
        ),
    )
    .map(name => ({
      name,
      Icon: Icons[name],
      label: search
        ? name.replace(new RegExp(search, 'ig'), text =>
            text ? `<strong>${text}</strong>` : '',
          )
        : name,
    }));

  return (
    <Grommet theme={theme}>
      <Box background="brand" animation="fadeIn">
        <Header />
        <IconHero />
        <HeaderFooter />
      </Box>
      <IconExample name={iconName} icon={Icons[iconName]} />
      <Box align="center" pad={{ horizontal: 'medium' }}>
        <Heading textAlign="center">
          Looking for something in particular?
        </Heading>
        <Box margin="medium">
          <Search
            value={search}
            placeholder={`Search ${
              iconKeys.length
            } icons (e.g. social, delete, user, arrow, sport, player)`}
            onChange={event => setSearch(event.target.value)}
          />
        </Box>
        <Box width="xlarge" style={{ minHeight: '80vh' }}>
          {icons.length > 0 ? (
            <Grid columns="small" justifyContent="around">
              <InfiniteScroll items={icons}>
                {({ label, Icon, name }) => (
                  <Box
                    key={name + search}
                    animation="fadeIn"
                    justify="center"
                    align="center"
                    height="small"
                  >
                    <Icon size="large" color="plain" />
                    <Text
                      textAlign="center"
                      margin="small"
                      style={{ wordBreak: 'break-all' }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: label }} />
                    </Text>
                  </Box>
                )}
              </InfiniteScroll>
            </Grid>
          ) : (
            <Box align="center">
              <Heading level={3}>No icon, sorry!</Heading>
              <Paragraph textAlign="center" margin="small">
                If you believe this icon should exist in our library, please
                file an {openIssueAnchor} and we will look into it.
              </Paragraph>
              <Box pad={{ top: 'medium' }}>
                <Gremlin />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </Grommet>
  );
}

export default App;
