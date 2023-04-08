import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props.title)
  return(
    <header>
        <h1>
          {/* <a href='/' onClick={function(e){
            e.preventDefault();
            props.onChangeMode();
          }}>{props.title}</a> */}
          <a href='/' onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}>{props.title}</a>
        </h1>
      </header>
  )
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topic.length; i++){
  let t = props.topic[i];
  lis.push(<li key={t.id}>
    <a id={t.body} href={'/read/' + t.id} onClick={e => {
      e.preventDefault();
      props.onChangeMode(e.target.id);
    }}>{t.title}</a></li>)
}
  return(
    <nav>
        <ol>
          {lis}
        </ol>
      </nav>
  )
}

function Article(props){
  return(
    <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  )
}

function App() {
  const topics = [
    {id:1, title:'yoona', body:'say hello~'},
    {id:2, title:'yooheun', body:'하이 아임 흔'},
    {id:3, title:'linha', body:'크롱크롱'}
  ]
  return (
    <div>
      <Header title='WEB' onChangeMode={function(){alert('Header');}}></Header>
      <Nav topic={topics} onChangeMode = {(id) => {alert(id)}}></Nav>
      <Article title = "hello" body = "I'm yoonas"></Article>
    </div>
  );
}

export default App;
