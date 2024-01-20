import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import LeftRightPanel from "./components/LeftRightPanel";

export default function Homepage({ leftChild, rightChild }) {
  return (
    <LeftRightPanel
      rightChild={
        <>
          <div
            style={{
              fontSize: "72px",
              textAlign: "center",
            }}
          >
            Fight For Finals
          </div>
          <div
            className="textCenter"
            style={{
              fontSize: "48px",
              textAlign: "center",
            }}
          >
            Ready for IQ boost?
          </div>
          <div className="buttonWrapper">
            <Link to={"singleplayer"}>
              <button className="button">Start</button>
            </Link>
            <Link to={"waiting-room"}>
              <button className="button">Create a room</button>
            </Link>
            <Link to={"join-a-room"}>
              <button className="button">Join a room</button>
            </Link>
          </div>
        </>
      }
    />
  );
}