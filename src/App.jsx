import { Header } from "./components/Header"
import { Post } from "./components/Post"

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

import './global.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/marciocs.png',
      name:'Marcio de Carvalho Silva',
      role: 'Desenvolvedor Front end'
    },
    content:[
      {type:'paragraph', content:'Fala galera'},
      {type:'paragraph', content:'Fala galera teste texto para descrição do site ignite feed'},
      {type:'link', content:'Fala galera'},
    ],
    publishedAt: new Date('2023-01-01 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name:'Diego Fernandes',
      role: 'Seo RocketSeat'
    },
    content:[
      {type:'paragraph', content:'Fala galera'},
      {type:'paragraph', content:'Fala galera teste texto para descrição do site ignite feed'},
      {type:'link', content:'Fala galera'},
    ],
    publishedAt: new Date('2023-01-01 20:00:00'),
  },
  {
    id:3,
    author:{
      avatarUrl:'https://github.com/maykbrito',
      name:'Mayk Brito',
      role: 'Educator Rocketseat'
    },
    content:[
      {type:'paragraph', content:'Fala galera'},
      {type:'paragraph', content:'Fala galera teste texto para descrição do site ignite feed'},
      {type:'link', content:'Fala galera'},
    ],
    publishedAt: new Date('2023-01-01 20:00:00'),
  }
];



 export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        
          <Sidebar />
        
        <main>
          <Post author="Marcio de Carvalho" />
        </main>
      </div>
    </div>
   
  )
}


