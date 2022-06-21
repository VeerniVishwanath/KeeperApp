import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";

export default function App() {
  return (
    <div>
      <Header />

      {notes.map((note) => (
        <Note
          id={note.key}
          key={note.key}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
}
