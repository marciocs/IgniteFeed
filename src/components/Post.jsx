import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/marciocs.png" />
          <div className={styles.authorInfo}>
            <strong>Marcio de Carvalho</strong>
            <span>Front End</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir projeto no meu portifolio</p>
        <p><a href=''>teste.test/testanto</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#ignite</a>{' '}
          <a href=''>#rocket</a>
        </p>

      </div>
    </article>
  );
}