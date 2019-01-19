import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
class Repo extends React.Component
{
  render()
  {
      return(
        <div className="container">
          <div className="repo">
            <div className="repo-image">
              <img src={this.props.repoImg} alt={this.props.repoOwner}/>
            </div>
            <div className="repo-info">
              <ul>
                <li><h4 className="repo-name">{this.props.repoName}</h4></li>
                <li><p className="repo-desc">{this.props.repoDesc}</p></li>
                <li>
                  <div className="repo-stat">
                    <ul>
                      <li><p>{this.props.repoStars}</p></li>
                      <li><p>{this.props.repoIssues}</p></li>
                      <li><p>{this.props.repoTimeInter} by {this.props.repoOwner}</p></li>
                    </ul>

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
  }
}
//var date = new Date();
// var githubDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
// var githubLink = "https://api.github.com/search/repositories?q=created:>"+ githubDate +"&sort=stars&order=desc";
var githubLink2 = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";
let name,desc,stars,issues,login,avatar;
$.getJSON(githubLink2,function(json)
 {
   name=json.items[0].name;
   desc = json.items[0].description;
   stars = json.items[0].stargazers_count;
   issues = json.items[0].open_issues_count;
   login = json.items[0].owner.login;
   avatar = json.items[0].owner.avatar_url;
   console.log(name);
   ReactDOM.render(
     <Repo repoImg={avatar} repoName={name} repoDesc={desc} repoStars={stars} repoIssues={issues} repoTimeInter="39 day ago" repoOwner={login}/>,
     document.getElementById('root')
   )
 });
