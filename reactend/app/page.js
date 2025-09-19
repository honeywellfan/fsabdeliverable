"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

export default function Home() {
  async function newlog() {
    const logdeets = {
      title,
      author,
      datesread,
      timeread,
    };
    const res = await fetch("http://localhost:8080/test", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(logdeets),
    });

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");
    const [datesread, setDatesRead] = useState("");
    const [timeread, setTimeRead] = useState("");

  }
  const [bologs, setbologs] = useState([]);
  async function fetchy() {
    const res = await fetch("http://localhost:8080/test", {
      method: "GET",
    });
    const data = await res.json();
    setbologs(data);
  }

  function enter() {
    newlog();
    // fetchy();
  }
  useEffect(() => {
    fetchy();
  }, []);
  return (
    <div>
      <div className="headertable">
        <h1>Book Logger:</h1>
        <table id="table1">
          <tbody>
            <tr key={"toprow"}>
              <th>Title</th>
              <th>Author</th>
              <th>Dates/Times Read</th>
              <th>Total Time Read (Hours)</th>
            </tr>
            {bologs.map((bolog) => (
              <tr key={bolog.title}>
                <td>{bolog.title}</td>
                <td>{bolog.author}</td>
                {/* firebase.firestore.Timestamp.toDate() */}
                {/* .toDate().toDateString().join(", ") */}
                <td>
                  {new Timestamp(
                    bolog.datesread.seconds,
                    bolog.datesread.nanoseconds
                  )
                    .toDate()
                    .toDateString()}
                </td>
                <td>{bolog.timeread}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="input">
        <label>Title</label>
        <br></br>
        <input></input>
        <br></br>
        <label>Author</label>
        <br></br>
        <input></input>
        <br></br>
        <label>Date Read</label>
        <br></br>
        <input type="date"></input>
        <br></br>
        <label>Hour(s) Read</label>
        <br></br>
        <input type="number" min={1}></input>
        <br></br>
        <input type="button" value="Submit New Log" onClick={enter()}></input>
      </div>
    </div>
  );
}
