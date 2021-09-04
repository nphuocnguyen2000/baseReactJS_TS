import { FC, useEffect } from "react";

import MessagesSidebar from "./sidebar";
import WelcomeChatting from "./welcome";
import MessagesContent from "./content";

const MessagesPage: FC = () => {

  return (
    <>
      <MessagesSidebar />
      <WelcomeChatting /> 
      {/* {!true ? <WelcomeChatting /> : <MessagesContent />} */}
    </>
  );
};

export default MessagesPage;
