import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post({author, publishedAt}){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
          {publishedAt.toString()}
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

      <form className={styles.commentForm}>
        <strong>Deixe o seu feed</strong>

        <textarea placeholder="Deixe o seu comentário"></textarea>
        <footer>
          <button type="submit" >Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  );
}