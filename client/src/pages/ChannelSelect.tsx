import React from "react";
import { useNavigate } from "react-router-dom";
import { LoadingIndicator, ChannelListMessengerProps } from "stream-chat-react";
import { Button } from "../components/Button";
import { useLoggedInAuth } from "../context/AuthContext";

function ChannelSelection({ loadedChannels }: ChannelListMessengerProps) {
  const navigate = useNavigate();
  const { logout } = useLoggedInAuth();

  const handleChannelSelection = (channelId) => {
    // Assuming channelId is passed when a channel is selected
    navigate(`/channel/${channelId}`);
  };

  return (
    <div className="w-60 flex flex-col gap-4 m-3 h-full">
      <Button onClick={() => navigate("/channel/new")}>New Channel</Button>
      <hr className="border-gray-500" />
      {loadedChannels != null && loadedChannels.length > 0 ? (
        loadedChannels.map((channel) => (
          <button
            onClick={() => handleChannelSelection(channel.id)}
            className="p-4 rounded-lg flex gap-3 items-center hover:bg-blue-100 bg-gray-100 text-black"
            key={channel.id}
          >
            {channel.data?.image && (
              <img
                src={channel.data.image}
                className="w-10 h-10 rounded-full object-center object-cover"
                alt="Channel Image"
              />
            )}
            <div className="text-ellipsis overflow-hidden whitespace-nowrap">
              {channel.data?.name || channel.id}
            </div>
          </button>
        ))
      ) : (
        <p>No Conversations</p>
      )}
      <hr className="border-gray-500 mt-auto" />
      <Button onClick={() => logout.mutate()} disabled={logout.isLoading}>
        Logout
      </Button>
    </div>
  );
}

export default ChannelSelection;
