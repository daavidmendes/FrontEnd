//import Image from "next/image";
//import styles from "./page.module.css";

import { Profile } from "@/components/Profile"
import { TodoList } from "@/components/TodoList";
import { Avatar } from "@/components/Avatar";

export default function Home() {
  return (
    <section>
      <h1>Site criado para a disciplina Programação Front-End</h1>
      <Profile />
      <hr />
      <TodoList />
      <hr />
      <Avatar />
    </section>
  );
}