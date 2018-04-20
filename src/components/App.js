import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUsers} from '../actions/reduxActions';
import '../css/style.css';
import Logo from './Logo';

function mapStateToProps(State){
  return{
    data: State.fetchUsers.data,
    fetching: State.fetchUsers.fetching,
    err: State.fetchUsers.err
  }
}

function mapDispatchToProps(Dispatch){
  return{
    ...bindActionCreators({fetchUsers},Dispatch)
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {userName: '',
    loading: false
  }
    this.inputValue = this.inputValue.bind(this);
  }
  componentDidMount(){

  }
  inputValue(e){
    console.log(e.target.value);
    this.props.fetchUsers(e.target.value);
  }
  render() {
    /*if(this.props.err){
      //alert('USER NOT FOUND');
      return (
      <h1>USER NOT FOUND</h1>
      )
    }*/
    const userimage =  this.props.data.map((user,i)=> {
      if(i===0){
        return(
          <div>
          <img src={user.owner.avatar_url} />
          <div className="user-name">{user.owner.login}</div>
          <div className="organization-type">{user.owner.type}</div>
          </div>
           )
      }})

    const repoData =  this.props.data.map((repo,i)=> {
        return(
          <tr key={'repo_'+i}>
            <td>{repo.id}</td>
            <td>{repo.name}</td>
            <td>{repo.owner.login}</td>
            <td>{repo.stargazers_count}</td>
            <td>{repo.created_at}</td>
          </tr>
           )
      })
        
    return (
      <div className="App">
        <Logo />
        <div className="input-box">
          <input onChange={this.inputValue.bind(this)} />
        </div>
        <div className="user-box">
        {
          userimage
        }
        </div>  
        <div className="repo-box">
         <table border="1" cellpadding="1" cellspacing="1">
          <tr>
            <td>ID</td>
            <td>Repo Title</td>
            <td>Owner</td>
            <td>Stars</td>
            <td>Created</td>
          </tr>
            {
          repoData
        }
        </table>
        
        </div>  
       
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
