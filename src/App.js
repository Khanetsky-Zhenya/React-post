import React from 'react';
import './App.css';
import { TheFacebookCard } from "./components/TheFacebook/TheFasebookCard"
import { OnlinerCard } from './components/Onliner/OnlinerCard';
import { RabotaByCard } from './components/RabotaBy/RabotaByCard';

const postsFb = [
  {
    avatarUrl: "https://static10.tgstat.ru/channels/_0/55/5597a2eeeb051bbbc9fba439c2118607.jpg",
    firstName:"Jason",
    secondName:"Statham",
    career:"Taxi driver",
    text:"Самое вкусное в куличах - это его верхушка.",
    like:"Like",
    reply:"Reply",
    time:"2 seconds ago",
  }
]

const postsOnliner = [
  {
    avatarUrl:"https://content.onliner.by/news/970x485/351457e5ba9cb9d8cfbb7dcd7b1e5844.jpeg",
    sectionTitle:"люди",
    commentCounter:"239",
    nameNews:"Выходные будут летними, а остальная жизнь — как пойдет",
  }
]

const postsRabotaBy = [
  {
    title: "Junior React.js Engineer (Intership/React.js Lab)",
    nameOrg: "ООО АйтиРекс Групп",
    region:"Минск",
    mainDescription:"Медидинское обслуживание. Онлайн-ивенты. Реферальная программа.",
    secondDescription:"10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки для старта: Базовые знания HTML...",
    date:"7 сентября",
  }
]

function App() {
  return (
    <div className="App">

      <h1 className="title-task_1"> задача 1 Facebook post</h1>
      { 
        postsFb.map((postFb)=>{
          const {
            avatarUrl,
            firstName,
            secondName,
            career,
            text,
            like,
            reply,
            time,
          } = postFb;
          return (
            <TheFacebookCard
            avatarUrl={avatarUrl}
            firstName={firstName}
            secondName={secondName}
            career={career}
            text={text}
            like={like}
            reply={reply}
            time={time}
            />
          )
        })
      }
      <h1 className="title-task_2"> задача 2 Onliner news </h1>
      {
      postsOnliner.map((postOnliner)=>{
          const {
            avatarUrl,
            sectionTitle,
            commentCounter,
            nameNews,
          } = postOnliner;
          return (
            <OnlinerCard
            avatarUrl={avatarUrl}
            sectionTitle={sectionTitle}
            commentCounter={commentCounter}
            nameNews={nameNews}
            />
          )
        })
      }
      <h1 className="title-task_3"> задача 3 Rabota.by </h1>
      {
      postsRabotaBy.map((postRabotaBy)=>{
          const {
            title,
            nameOrg,
            region,
            mainDescription,
            secondDescription,
            date,
          } = postRabotaBy;
          return (
            <RabotaByCard
            title={title}
            nameOrg={nameOrg}
            region={region}
            mainDescription={mainDescription}
            secondDescription={secondDescription}
            date={date}
            />
          )
        })
      }
    </div>
  );
}

export default App;

