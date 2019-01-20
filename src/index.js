import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
// class for to define repos structure
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
                      <li><p><i class="fas fa-star"></i> {this.props.repoStars}</p></li>
                      <li><p><i class="fas fa-exclamation-circle"></i> {this.props.repoIssues}</p></li>
                      <li><p>{this.props.repoTimeInter} by <i class="fas fa-user"></i> {this.props.repoOwner}</p></li>
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
var indents = [];
$.getJSON(githubLink2,function(json)
 {
   for(var i = 0; i < json.items.length;i++)
   {
     // limiting the maximum number of name charac to 53
     name= json.items[i].name;
     if(name.length > 53)
     {
       name = name.substr(0,53) + "...";
     }
     // limiting the maximum number of desc charac to 173
     desc = json.items[i].description;
     if(desc.length > 173)
     {
       desc = desc.substr(0,173) + "...";
     }
     stars = json.items[i].stargazers_count;
     issues = json.items[i].open_issues_count;
     login = json.items[i].owner.login;
     avatar = json.items[i].owner.avatar_url;
     indents.push(<Repo repoImg={avatar} repoName={name} repoDesc={desc} repoStars={stars} repoIssues={issues} repoTimeInter="39 day ago" repoOwner={login}/>);
   }
   ReactDOM.render(
     indents,
     document.getElementById('root')
   )
 });
