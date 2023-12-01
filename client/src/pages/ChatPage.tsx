import React from "react";
import {
  Chat,
  Channel,
  Window,
  MessageInput,
  MessageList,
  ChannelHeader,
  LoadingIndicator,
} from "stream-chat-react";
import { useLoggedInAuth } from "../context/AuthContext";

function ChannelChat({ channelId }: { channelId }) {
  const { user, streamChat } = useLoggedInAuth();

  if (streamChat == null) return <LoadingIndicator />;

  return (
    <Chat client={streamChat} theme="messaging dark">
      <Channel channel={channelId}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
}

export default ChannelChat;
