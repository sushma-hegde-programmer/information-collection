import { Avatar, Button, Card } from "antd";
import "./ProfileCard.css";

import React from "react";

function ProfileCard() {
  return (
    <div className="card">
      {/* when user clicks on profile what should get displayed */}
      <Card>
        <div className="card__options">
          <Button shape="round">View Profile</Button>
          <Button>Sign Out</Button>
        </div>
      </Card>
    </div>
  );
}

export default ProfileCard;
