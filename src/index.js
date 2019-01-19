import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Repo extends React.Component
{
  render()
  {
      return(
        <div class="repo">
          <div class="repo-image">
            <img src=""/>
          </div>
          <div class="repo-info">
            <ul>
              <li><h4 class="repo-name">Repo Name:</h4></li>
              <li><p class="repo-desc">Repository Description</p></li>
              <li>
                <div class="repo-stat">
                  <ul>
                    <li><p>NB Stars</p></li>
                    <li><p>Issues</p></li>
                    <li><p>Time interval by Owner Name</p></li>
                  </ul>

                </div>
              </li>
            </ul>
          </div>
        </div>
      );
  }
}
ReactDOM.render(
  <Repo />,
  document.getElementById('root')
)
