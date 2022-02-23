import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './chatbox.css'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Surfboard from "./components/surfboard";
import Topic from "./components/surfboard/Screen/ReduxAgenda/components/Topic"

import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2ludGVyLWhhemUtMiIsImV4cCI6MTY0NTY1MDE3Nn0.XTYbuCWIrJBGk8WkKDm1_gsewaYR12R42yOIlgKjBtw';

chatClient.connectUser(
    {
      id: 'winter-haze-2',
      name: 'winter',
      image: 'https://getstream.io/random_png/?id=winter-haze-2&name=winter',
    },
    userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Chat With Client and Users',
  members: ['winter-haze-2'],
});

const App = () => (
    <>
    <BrowserRouter>
      <div className="container">
      <Link to="/surfboard/agenda">My Agenda</Link>
        <Switch>
          <Route path="/details/:id" component={Topic} />
          <Route path="/surfboard">
            <Surfboard/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    <Chat client={chatClient} theme='messaging light'>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
    </>
);

export default App;